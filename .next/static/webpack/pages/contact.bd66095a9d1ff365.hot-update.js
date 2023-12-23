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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Notifications_Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Notifications/Notification */ \"./components/ui/Notifications/Notification.jsx\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-form.module.css */ \"./components/ui/Contact-Page/contact-form.module.css\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nasync function sendContactData(newMessage) {\n    const res = await fetch(\"/api/contact\", {\n        method: \"POST\",\n        body: JSON.stringify(newMessage),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    if (!res.ok) {\n        throw new Error(data.message || \"Someting went wrong...\");\n    }\n    const data = await res.json();\n}\nfunction ContactForm() {\n    _s();\n    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const messageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [requestStatus, setRequestStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [requestError, setRequestError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (requestStatus === \"success\" || requestStatus === \"error\") {\n            const timer = setTimeout(()=>{\n                setRequestStatus(null);\n                setRequestError(null);\n            }, 3000);\n            return ()=>clearTimeout(timer);\n        }\n    }, [\n        requestStatus\n    ]);\n    async function sendMessageHandler(e) {\n        e.preventDefault();\n        const email = emailRef.current.value;\n        const name = nameRef.current.value;\n        const message = messageRef.current.value;\n        const newMessage = {\n            email,\n            name,\n            message\n        };\n        setRequestStatus(\"pending\");\n        try {\n            await sendContactData(newMessage);\n            setRequestStatus(\"success\");\n            emailRef.current.value = \"\";\n            nameRef.current.value = \"\";\n            messageRef.current.value = \"\";\n        } catch (error) {\n            setRequestError(error.message);\n            setRequestStatus(\"error\");\n        }\n    }\n    let notification;\n    if (requestStatus === \"pending\") {\n        notification = {\n            status: \"pending\",\n            title: \"Sending message...\",\n            messsage: \"Your message is on its way!\"\n        };\n    }\n    if (requestStatus === \"success\") {\n        notification = {\n            status: \"success\",\n            title: \"Success!\",\n            messsage: \"Message sent successfully!\"\n        };\n    }\n    if (requestStatus === \"error\") {\n        notification = {\n            status: \"error\",\n            title: \"Error!\",\n            messsage: requestError\n        };\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().contact),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"How can I help you?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n                onSubmit: sendMessageHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().controls),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"email\",\n                                        children: \"Your Email\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        id: \"email\",\n                                        required: true,\n                                        ref: emailRef\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"name\",\n                                        children: \"Your Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"name\",\n                                        required: true,\n                                        ref: nameRef\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                lineNumber: 103,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"message\",\n                                children: \"Your Message\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                lineNumber: 109,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"message\",\n                                rows: 5,\n                                ref: messageRef,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                                lineNumber: 110,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: notification.status === \"pending\" ? \"Pending...\" : \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                            lineNumber: 114,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, this),\n            notification && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Notifications_Notification__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                status: notification.status,\n                title: notification.title,\n                message: notification.messsage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n                lineNumber: 117,\n                columnNumber: 30\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\EmirCBKC\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\Full-Stack Web Developer\\\\Front-end\\\\Programlama Dilleri\\\\JAVASCRIPT (react, angular,vue,svelte)\\\\React (Next)\\\\Next Framework\\\\Maximilian Schwarzm\\xfcller\\\\8-) Blog App\\\\components\\\\ui\\\\Contact-Page\\\\ContactForm.jsx\",\n        lineNumber: 95,\n        columnNumber: 9\n    }, this);\n}\n_s(ContactForm, \"Vtlr4Zhsgn3Arb24I0T0CzFrUko=\");\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL0NvbnRhY3QtUGFnZS9Db250YWN0Rm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNLO0FBQ1g7QUFFOUMsZUFBZUssZ0JBQWdCQyxVQUFVO0lBQ3JDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxnQkFBZ0I7UUFDcENDLFFBQVE7UUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDTjtRQUNyQk8sU0FBUztZQUNMLGdCQUFnQjtRQUNwQjtJQUNKO0lBRUEsSUFBSSxDQUFDTixJQUFJTyxFQUFFLEVBQUU7UUFDVCxNQUFNLElBQUlDLE1BQU1DLEtBQUtDLE9BQU8sSUFBSTtJQUNwQztJQUVBLE1BQU1ELE9BQU8sTUFBTVQsSUFBSVcsSUFBSTtBQUMvQjtBQUVlLFNBQVNDOztJQUVwQixNQUFNQyxXQUFXbkIsNkNBQU1BO0lBQ3ZCLE1BQU1vQixVQUFVcEIsNkNBQU1BO0lBQ3RCLE1BQU1xQixhQUFhckIsNkNBQU1BO0lBRXpCLE1BQU0sQ0FBQ3NCLGVBQWVDLGlCQUFpQixHQUFHdEIsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDdUIsY0FBY0MsZ0JBQWdCLEdBQUd4QiwrQ0FBUUEsQ0FBQztJQUVqREYsZ0RBQVNBLENBQUM7UUFDTixJQUFJdUIsa0JBQWtCLGFBQWFBLGtCQUFrQixTQUFTO1lBQzFELE1BQU1JLFFBQVFDLFdBQVc7Z0JBQ3JCSixpQkFBaUI7Z0JBQ2pCRSxnQkFBZ0I7WUFDcEIsR0FBRztZQUVILE9BQU8sSUFBTUcsYUFBYUY7UUFDOUI7SUFDSixHQUFHO1FBQUNKO0tBQWM7SUFFbEIsZUFBZU8sbUJBQW1CQyxDQUFDO1FBQy9CQSxFQUFFQyxjQUFjO1FBRWhCLE1BQU1DLFFBQVFiLFNBQVNjLE9BQU8sQ0FBQ0MsS0FBSztRQUNwQyxNQUFNQyxPQUFPZixRQUFRYSxPQUFPLENBQUNDLEtBQUs7UUFDbEMsTUFBTWxCLFVBQVVLLFdBQVdZLE9BQU8sQ0FBQ0MsS0FBSztRQUV4QyxNQUFNN0IsYUFBYTtZQUNmMkI7WUFDQUc7WUFDQW5CO1FBQ0o7UUFFQU8saUJBQWlCO1FBQ2pCLElBQUk7WUFDQSxNQUFNbkIsZ0JBQWdCQztZQUN0QmtCLGlCQUFpQjtZQUNqQkosU0FBU2MsT0FBTyxDQUFDQyxLQUFLLEdBQUc7WUFDekJkLFFBQVFhLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHO1lBQ3hCYixXQUFXWSxPQUFPLENBQUNDLEtBQUssR0FBRztRQUMvQixFQUFFLE9BQU9FLE9BQU87WUFDWlgsZ0JBQWdCVyxNQUFNcEIsT0FBTztZQUM3Qk8saUJBQWlCO1FBQ3JCO0lBRUo7SUFFQSxJQUFJYztJQUVKLElBQUlmLGtCQUFrQixXQUFXO1FBQzdCZSxlQUFlO1lBQ1hDLFFBQVE7WUFDUkMsT0FBTztZQUNQQyxVQUFVO1FBQ2Q7SUFDSjtJQUVBLElBQUlsQixrQkFBa0IsV0FBVztRQUM3QmUsZUFBZTtZQUNYQyxRQUFRO1lBQ1JDLE9BQU87WUFDUEMsVUFBVTtRQUNkO0lBQ0o7SUFFQSxJQUFJbEIsa0JBQWtCLFNBQVM7UUFDM0JlLGVBQWU7WUFDWEMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLFVBQVVoQjtRQUNkO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ2lCO1FBQVFDLFdBQVd2Qyx5RUFBYTs7MEJBQzdCLDhEQUFDeUM7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtILFdBQVd2QyxzRUFBVTtnQkFBRTJDLFVBQVVqQjs7a0NBQ25DLDhEQUFDa0I7d0JBQUlMLFdBQVd2QywwRUFBYzs7MENBQzFCLDhEQUFDNEM7Z0NBQUlMLFdBQVd2Qyx5RUFBYTs7a0RBQ3pCLDhEQUFDK0M7d0NBQU1DLFNBQVE7a0RBQVE7Ozs7OztrREFDdkIsOERBQUNDO3dDQUFNQyxNQUFLO3dDQUFRQyxJQUFHO3dDQUFRQyxRQUFRO3dDQUFDQyxLQUFLckM7Ozs7Ozs7Ozs7OzswQ0FFakQsOERBQUM0QjtnQ0FBSUwsV0FBV3ZDLHlFQUFhOztrREFDekIsOERBQUMrQzt3Q0FBTUMsU0FBUTtrREFBTzs7Ozs7O2tEQUN0Qiw4REFBQ0M7d0NBQU1DLE1BQUs7d0NBQU9DLElBQUc7d0NBQU9DLFFBQVE7d0NBQUNDLEtBQUtwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUduRCw4REFBQzJCO3dCQUFJTCxXQUFXdkMseUVBQWE7OzBDQUN6Qiw4REFBQytDO2dDQUFNQyxTQUFROzBDQUFVOzs7Ozs7MENBQ3pCLDhEQUFDTTtnQ0FBU0gsSUFBRztnQ0FBVUksTUFBTTtnQ0FBR0YsS0FBS25DO2dDQUFZa0MsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUc3RCw4REFBQ1I7d0JBQUlMLFdBQVd2Qyx5RUFBYTtrQ0FDekIsNEVBQUN5RDtzQ0FBUXZCLGFBQWFDLE1BQU0sS0FBSyxZQUFZLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR25FRCw4QkFBZ0IsOERBQUNuQyxtRUFBWUE7Z0JBQUNvQyxRQUFRRCxhQUFhQyxNQUFNO2dCQUFFQyxPQUFPRixhQUFhRSxLQUFLO2dCQUFFdkIsU0FBU3FCLGFBQWFHLFFBQVE7Ozs7Ozs7Ozs7OztBQUdqSTtHQW5Hd0J0QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL0NvbnRhY3QtUGFnZS9Db250YWN0Rm9ybS5qc3g/MGFmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vTm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25cIjtcclxuaW1wb3J0IFN0eWxlIGZyb20gXCIuL2NvbnRhY3QtZm9ybS5tb2R1bGUuY3NzXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZW5kQ29udGFjdERhdGEobmV3TWVzc2FnZSkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NvbnRhY3RcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3TWVzc2FnZSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIlNvbWV0aW5nIHdlbnQgd3JvbmcuLi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xyXG5cclxuICAgIGNvbnN0IGVtYWlsUmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBuYW1lUmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBtZXNzYWdlUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gICAgY29uc3QgW3JlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcmVxdWVzdEVycm9yLCBzZXRSZXF1ZXN0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gXCJzdWNjZXNzXCIgfHwgcmVxdWVzdFN0YXR1cyA9PT0gXCJlcnJvclwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgc2V0UmVxdWVzdEVycm9yKG51bGwpO1xyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtyZXF1ZXN0U3RhdHVzXSk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2VIYW5kbGVyKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gZW1haWxSZWYuY3VycmVudC52YWx1ZTtcclxuICAgICAgICBjb25zdCBuYW1lID0gbmFtZVJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlUmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld01lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhcInBlbmRpbmdcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgc2VuZENvbnRhY3REYXRhKG5ld01lc3NhZ2UpO1xyXG4gICAgICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgZW1haWxSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIG5hbWVSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0UmVxdWVzdEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFwiZXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBsZXQgbm90aWZpY2F0aW9uO1xyXG5cclxuICAgIGlmIChyZXF1ZXN0U3RhdHVzID09PSBcInBlbmRpbmdcIikge1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbiA9IHtcclxuICAgICAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiU2VuZGluZyBtZXNzYWdlLi4uXCIsXHJcbiAgICAgICAgICAgIG1lc3NzYWdlOiBcIllvdXIgbWVzc2FnZSBpcyBvbiBpdHMgd2F5IVwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICBub3RpZmljYXRpb24gPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlN1Y2Nlc3MhXCIsXHJcbiAgICAgICAgICAgIG1lc3NzYWdlOiBcIk1lc3NhZ2Ugc2VudCBzdWNjZXNzZnVsbHkhXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXF1ZXN0U3RhdHVzID09PSBcImVycm9yXCIpIHtcclxuICAgICAgICBub3RpZmljYXRpb24gPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJFcnJvciFcIixcclxuICAgICAgICAgICAgbWVzc3NhZ2U6IHJlcXVlc3RFcnJvclxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhY3R9PlxyXG4gICAgICAgICAgICA8aDE+SG93IGNhbiBJIGhlbHAgeW91PzwvaDE+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17U3R5bGUuZm9ybX0gb25TdWJtaXQ9e3NlbmRNZXNzYWdlSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuY29udHJvbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250cm9sfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPllvdXIgRW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHJlcXVpcmVkIHJlZj17ZW1haWxSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Zb3VyIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiByZXF1aXJlZCByZWY9e25hbWVSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250cm9sfT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj5Zb3VyIE1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cIm1lc3NhZ2VcIiByb3dzPXs1fSByZWY9e21lc3NhZ2VSZWZ9IHJlcXVpcmVkID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+e25vdGlmaWNhdGlvbi5zdGF0dXMgPT09IFwicGVuZGluZ1wiID8gXCJQZW5kaW5nLi4uXCIgOiBcIlN1Ym1pdFwifTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAge25vdGlmaWNhdGlvbiAmJiA8Tm90aWZpY2F0aW9uIHN0YXR1cz17bm90aWZpY2F0aW9uLnN0YXR1c30gdGl0bGU9e25vdGlmaWNhdGlvbi50aXRsZX0gbWVzc2FnZT17bm90aWZpY2F0aW9uLm1lc3NzYWdlfSAvPn1cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTm90aWZpY2F0aW9uIiwiU3R5bGUiLCJzZW5kQ29udGFjdERhdGEiLCJuZXdNZXNzYWdlIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwiZGF0YSIsIm1lc3NhZ2UiLCJqc29uIiwiQ29udGFjdEZvcm0iLCJlbWFpbFJlZiIsIm5hbWVSZWYiLCJtZXNzYWdlUmVmIiwicmVxdWVzdFN0YXR1cyIsInNldFJlcXVlc3RTdGF0dXMiLCJyZXF1ZXN0RXJyb3IiLCJzZXRSZXF1ZXN0RXJyb3IiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzZW5kTWVzc2FnZUhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsIm5hbWUiLCJlcnJvciIsIm5vdGlmaWNhdGlvbiIsInN0YXR1cyIsInRpdGxlIiwibWVzc3NhZ2UiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiY29udGFjdCIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiZGl2IiwiY29udHJvbHMiLCJjb250cm9sIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZXF1aXJlZCIsInJlZiIsInRleHRhcmVhIiwicm93cyIsImFjdGlvbnMiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/Contact-Page/ContactForm.jsx\n"));

/***/ })

});