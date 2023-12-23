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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Notifications_Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Notifications/Notification */ \"./components/ui/Notifications/Notification.jsx\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-form.module.css */ \"./components/ui/Contact-Page/contact-form.module.css\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nasync function sendContactData(newMessage) {\n    const res = await fetch(\"/api/contact\", {\n        method: \"POST\",\n        body: JSON.stringify(newMessage),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    if (!res.ok) {\n        throw new Error(data.message || \"Someting went wrong...\");\n    }\n    const data = await res.json();\n}\nfunction ContactForm() {\n    _s();\n    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const messageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [requestStatus, setRequestStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [requestError, setRequestError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function sendMessageHandler(e) {\n        e.preventDefault();\n        const email = emailRef.current.value;\n        const name = nameRef.current.value;\n        const message = messageRef.current.value;\n        const newMessage = {\n            email,\n            name,\n            message\n        };\n        setRequestStatus(\"pending\");\n        try {\n            await sendContactData(newMessage);\n            setRequestStatus(\"success\");\n        } catch (error) {\n            setRequestError(error.message);\n            setRequestStatus(\"error\");\n        }\n    }\n    let notification;\n    if (requestStatus === \"pending\") {\n        notification = {\n            status: \"pending\",\n            title: \"Sending message...\",\n            messsage: \"Your message is on its way!\"\n        };\n    }\n    if (requestStatus === \"success\") {\n        notification = {\n            status: \"success\",\n            title: \"Success!\",\n            messsage: \"Message sent successfully!\"\n        };\n    }\n    if (requestStatus === \"error\") {\n        notification = {\n            status: \"error\",\n            title: \"Error!\",\n            messsage: requestError\n        };\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().contact),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"How can I help you?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n                onSubmit: sendMessageHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().controls),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"email\",\n                                        children: \"Your Email\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        id: \"email\",\n                                        required: true,\n                                        ref: emailRef\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"name\",\n                                        children: \"Your Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"name\",\n                                        required: true,\n                                        ref: nameRef\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"message\",\n                                children: \"Your Message\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"message\",\n                                rows: 5,\n                                ref: messageRef,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Send Message\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this),\n            notification && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Notifications_Notification__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                status: notification.status,\n                title: notification.title,\n                message: notification.messsage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                lineNumber: 104,\n                columnNumber: 30\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, this);\n}\n_s(ContactForm, \"iDScm7mcXErfbpGfm10M6V0Sr7w=\");\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL0NvbnRhY3QtUGFnZS9Db250YWN0Rm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNnQjtBQUNYO0FBRTlDLGVBQWVJLGdCQUFnQkMsVUFBVTtJQUNyQyxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sZ0JBQWdCO1FBQ3BDQyxRQUFRO1FBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ047UUFDckJPLFNBQVM7WUFDTCxnQkFBZ0I7UUFDcEI7SUFDSjtJQUVBLElBQUksQ0FBQ04sSUFBSU8sRUFBRSxFQUFFO1FBQ1QsTUFBTSxJQUFJQyxNQUFNQyxLQUFLQyxPQUFPLElBQUk7SUFDcEM7SUFFQSxNQUFNRCxPQUFPLE1BQU1ULElBQUlXLElBQUk7QUFFL0I7QUFFZSxTQUFTQzs7SUFFcEIsTUFBTUMsV0FBV25CLDZDQUFNQTtJQUN2QixNQUFNb0IsVUFBVXBCLDZDQUFNQTtJQUN0QixNQUFNcUIsYUFBYXJCLDZDQUFNQTtJQUV6QixNQUFNLENBQUNzQixlQUFlQyxpQkFBaUIsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ3VCLGNBQWNDLGdCQUFnQixHQUFHeEIsK0NBQVFBLENBQUM7SUFFakQsZUFBZXlCLG1CQUFtQkMsQ0FBQztRQUMvQkEsRUFBRUMsY0FBYztRQUVoQixNQUFNQyxRQUFRVixTQUFTVyxPQUFPLENBQUNDLEtBQUs7UUFDcEMsTUFBTUMsT0FBT1osUUFBUVUsT0FBTyxDQUFDQyxLQUFLO1FBQ2xDLE1BQU1mLFVBQVVLLFdBQVdTLE9BQU8sQ0FBQ0MsS0FBSztRQUV4QyxNQUFNMUIsYUFBYTtZQUNmd0I7WUFDQUc7WUFDQWhCO1FBQ0o7UUFFQU8saUJBQWlCO1FBQ2pCLElBQUk7WUFDQSxNQUFNbkIsZ0JBQWdCQztZQUN0QmtCLGlCQUFpQjtRQUNyQixFQUFFLE9BQU9VLE9BQU87WUFDWlIsZ0JBQWdCUSxNQUFNakIsT0FBTztZQUM3Qk8saUJBQWlCO1FBQ3JCO0lBRUo7SUFFQSxJQUFJVztJQUVKLElBQUlaLGtCQUFrQixXQUFXO1FBQzdCWSxlQUFlO1lBQ1hDLFFBQVE7WUFDUkMsT0FBTztZQUNQQyxVQUFVO1FBQ2Q7SUFDSjtJQUVBLElBQUlmLGtCQUFrQixXQUFXO1FBQzdCWSxlQUFlO1lBQ1hDLFFBQVE7WUFDUkMsT0FBTztZQUNQQyxVQUFVO1FBQ2Q7SUFDSjtJQUVBLElBQUlmLGtCQUFrQixTQUFTO1FBQzNCWSxlQUFlO1lBQ1hDLFFBQVE7WUFDUkMsT0FBTztZQUNQQyxVQUFVYjtRQUNkO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ2M7UUFBUUMsV0FBV3BDLHlFQUFhOzswQkFDN0IsOERBQUNzQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0gsV0FBV3BDLHNFQUFVO2dCQUFFd0MsVUFBVWpCOztrQ0FDbkMsOERBQUNrQjt3QkFBSUwsV0FBV3BDLDBFQUFjOzswQ0FDMUIsOERBQUN5QztnQ0FBSUwsV0FBV3BDLHlFQUFhOztrREFDekIsOERBQUM0Qzt3Q0FBTUMsU0FBUTtrREFBUTs7Ozs7O2tEQUN2Qiw4REFBQ0M7d0NBQU1DLE1BQUs7d0NBQVFDLElBQUc7d0NBQVFDLFFBQVE7d0NBQUNDLEtBQUtsQzs7Ozs7Ozs7Ozs7OzBDQUVqRCw4REFBQ3lCO2dDQUFJTCxXQUFXcEMseUVBQWE7O2tEQUN6Qiw4REFBQzRDO3dDQUFNQyxTQUFRO2tEQUFPOzs7Ozs7a0RBQ3RCLDhEQUFDQzt3Q0FBTUMsTUFBSzt3Q0FBT0MsSUFBRzt3Q0FBT0MsUUFBUTt3Q0FBQ0MsS0FBS2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR25ELDhEQUFDd0I7d0JBQUlMLFdBQVdwQyx5RUFBYTs7MENBQ3pCLDhEQUFDNEM7Z0NBQU1DLFNBQVE7MENBQVU7Ozs7OzswQ0FDekIsOERBQUNNO2dDQUFTSCxJQUFHO2dDQUFVSSxNQUFNO2dDQUFHRixLQUFLaEM7Z0NBQVkrQixRQUFROzs7Ozs7Ozs7Ozs7a0NBRzdELDhEQUFDUjt3QkFBSUwsV0FBV3BDLHlFQUFhO2tDQUN6Qiw0RUFBQ3NEO3NDQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztZQUdmdkIsOEJBQWdCLDhEQUFDaEMsbUVBQVlBO2dCQUFDaUMsUUFBUUQsYUFBYUMsTUFBTTtnQkFBRUMsT0FBT0YsYUFBYUUsS0FBSztnQkFBRXBCLFNBQVNrQixhQUFhRyxRQUFROzs7Ozs7Ozs7Ozs7QUFHakk7R0FyRndCbkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9Db250YWN0LVBhZ2UvQ29udGFjdEZvcm0uanN4PzBhZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gXCIuLi9Ob3RpZmljYXRpb25zL05vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vY29udGFjdC1mb3JtLm1vZHVsZS5jc3NcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlbmRDb250YWN0RGF0YShuZXdNZXNzYWdlKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvY29udGFjdFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdNZXNzYWdlKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiU29tZXRpbmcgd2VudCB3cm9uZy4uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xyXG5cclxuICAgIGNvbnN0IGVtYWlsUmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBuYW1lUmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBtZXNzYWdlUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gICAgY29uc3QgW3JlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcmVxdWVzdEVycm9yLCBzZXRSZXF1ZXN0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2VIYW5kbGVyKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gZW1haWxSZWYuY3VycmVudC52YWx1ZTtcclxuICAgICAgICBjb25zdCBuYW1lID0gbmFtZVJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlUmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld01lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhcInBlbmRpbmdcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgc2VuZENvbnRhY3REYXRhKG5ld01lc3NhZ2UpO1xyXG4gICAgICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRSZXF1ZXN0RXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHNldFJlcXVlc3RTdGF0dXMoXCJlcnJvclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxldCBub3RpZmljYXRpb247XHJcblxyXG4gICAgaWYgKHJlcXVlc3RTdGF0dXMgPT09IFwicGVuZGluZ1wiKSB7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uID0ge1xyXG4gICAgICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJTZW5kaW5nIG1lc3NhZ2UuLi5cIixcclxuICAgICAgICAgICAgbWVzc3NhZ2U6IFwiWW91ciBtZXNzYWdlIGlzIG9uIGl0cyB3YXkhXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXF1ZXN0U3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbiA9IHtcclxuICAgICAgICAgICAgc3RhdHVzOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiU3VjY2VzcyFcIixcclxuICAgICAgICAgICAgbWVzc3NhZ2U6IFwiTWVzc2FnZSBzZW50IHN1Y2Nlc3NmdWxseSFcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlcXVlc3RTdGF0dXMgPT09IFwiZXJyb3JcIikge1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbiA9IHtcclxuICAgICAgICAgICAgc3RhdHVzOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yIVwiLFxyXG4gICAgICAgICAgICBtZXNzc2FnZTogcmVxdWVzdEVycm9yXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17U3R5bGUuY29udGFjdH0+XHJcbiAgICAgICAgICAgIDxoMT5Ib3cgY2FuIEkgaGVscCB5b3U/PC9oMT5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtTdHlsZS5mb3JtfSBvblN1Ym1pdD17c2VuZE1lc3NhZ2VIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250cm9sc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBFbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcmVxdWlyZWQgcmVmPXtlbWFpbFJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPllvdXIgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHJlcXVpcmVkIHJlZj17bmFtZVJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPllvdXIgTWVzc2FnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwibWVzc2FnZVwiIHJvd3M9ezV9IHJlZj17bWVzc2FnZVJlZn0gcmVxdWlyZWQgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuYWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIHtub3RpZmljYXRpb24gJiYgPE5vdGlmaWNhdGlvbiBzdGF0dXM9e25vdGlmaWNhdGlvbi5zdGF0dXN9IHRpdGxlPXtub3RpZmljYXRpb24udGl0bGV9IG1lc3NhZ2U9e25vdGlmaWNhdGlvbi5tZXNzc2FnZX0gLz59XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk5vdGlmaWNhdGlvbiIsIlN0eWxlIiwic2VuZENvbnRhY3REYXRhIiwibmV3TWVzc2FnZSIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwib2siLCJFcnJvciIsImRhdGEiLCJtZXNzYWdlIiwianNvbiIsIkNvbnRhY3RGb3JtIiwiZW1haWxSZWYiLCJuYW1lUmVmIiwibWVzc2FnZVJlZiIsInJlcXVlc3RTdGF0dXMiLCJzZXRSZXF1ZXN0U3RhdHVzIiwicmVxdWVzdEVycm9yIiwic2V0UmVxdWVzdEVycm9yIiwic2VuZE1lc3NhZ2VIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJuYW1lIiwiZXJyb3IiLCJub3RpZmljYXRpb24iLCJzdGF0dXMiLCJ0aXRsZSIsIm1lc3NzYWdlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImNvbnRhY3QiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImNvbnRyb2xzIiwiY29udHJvbCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicmVxdWlyZWQiLCJyZWYiLCJ0ZXh0YXJlYSIsInJvd3MiLCJhY3Rpb25zIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui/Contact-Page/ContactForm.jsx\n"));

/***/ })

});