"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/estimate/save-estimate";
exports.ids = ["pages/api/estimate/save-estimate"];
exports.modules = {

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./pages/api/estimate/save-estimate.js":
/*!*********************************************!*\
  !*** ./pages/api/estimate/save-estimate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    try {\n        if (req.method !== \"POST\") {\n            return;\n        }\n        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n            req: req\n        });\n        if (!session) {\n            res.status(401).json({\n                message: \"Not Authenticated.\"\n            });\n            return;\n        }\n        const authToken = session.cognitoAccessToken;\n        const bodyData = req.body;\n        let url = `${process.env.AWSAPIURL}/estimate/new`;\n        let method = \"POST\";\n        if (!bodyData.newRecord) {\n            url = `${process.env.AWSAPIURL}/estimate/update`;\n            method = \"PUT\";\n        }\n        const response = await fetch(url, {\n            method: method,\n            body: JSON.stringify(bodyData),\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: authToken\n            }\n        });\n        if (response.status == 401) {\n            res.status(401).json({\n                message: \"Not Authenticated.\"\n            });\n            return;\n        }\n        const respondObj = await response.json();\n        console.log(respondObj);\n        if (!respondObj.success) {\n            res.status(422).json({\n                ...respondObj\n            });\n            return;\n        }\n        res.status(201).json({\n            ...respondObj\n        });\n    } catch (error) {\n        console.log(\"error\", error);\n        res.status(500).json({\n            message: error.message\n        });\n        return;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXN0aW1hdGUvc2F2ZS1lc3RpbWF0ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFFN0MsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0IsSUFBSTtRQUNGLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1lBQ3pCO1FBQ0YsQ0FBQztRQUVELE1BQU1DLFVBQVUsTUFBTUwsMkRBQVVBLENBQUM7WUFBRUUsS0FBS0E7UUFBSTtRQUU1QyxJQUFJLENBQUNHLFNBQVM7WUFDWkYsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFxQjtZQUNyRDtRQUNGLENBQUM7UUFFRCxNQUFNQyxZQUFZSixRQUFRSyxrQkFBa0I7UUFDNUMsTUFBTUMsV0FBV1QsSUFBSVUsSUFBSTtRQUV6QixJQUFJQyxNQUFNLENBQUMsRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBQ2pELElBQUlaLFNBQVM7UUFFYixJQUFHLENBQUNPLFNBQVNNLFNBQVMsRUFBQztZQUNuQkosTUFBTSxDQUFDLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1lBQ2hEWixTQUFTO1FBQ2IsQ0FBQztRQUdELE1BQU1jLFdBQVcsTUFBTUMsTUFBTU4sS0FBSztZQUNoQ1QsUUFBUUE7WUFDUlEsTUFBTVEsS0FBS0MsU0FBUyxDQUFDVjtZQUNyQlcsU0FBUztnQkFDUCxnQkFBZ0I7Z0JBQ2hCQyxlQUFlZDtZQUNqQjtRQUNGO1FBSUEsSUFBSVMsU0FBU1osTUFBTSxJQUFJLEtBQUs7WUFDMUJILElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBcUI7WUFDckQ7UUFDRixDQUFDO1FBRUQsTUFBTWdCLGFBQWEsTUFBTU4sU0FBU1gsSUFBSTtRQUN0Q2tCLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFFWixJQUFJLENBQUNBLFdBQVdHLE9BQU8sRUFBRTtZQUN2QnhCLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUUsR0FBR2lCLFVBQVU7WUFBQztZQUNyQztRQUNGLENBQUM7UUFFRHJCLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRSxHQUFHaUIsVUFBVTtRQUFDO0lBQ3ZDLEVBQUUsT0FBT0ksT0FBTztRQUNkSCxRQUFRQyxHQUFHLENBQUMsU0FBU0U7UUFDckJ6QixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVNvQixNQUFNcEIsT0FBTztRQUFDO1FBQzlDO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlUCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRtaW4tZnJvbnQtZW5kLy4vcGFnZXMvYXBpL2VzdGltYXRlL3NhdmUtZXN0aW1hdGUuanM/YjQ2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiByZXEgfSk7XHJcblxyXG4gICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogXCJOb3QgQXV0aGVudGljYXRlZC5cIiB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGF1dGhUb2tlbiA9IHNlc3Npb24uY29nbml0b0FjY2Vzc1Rva2VuO1xyXG4gICAgY29uc3QgYm9keURhdGEgPSByZXEuYm9keTtcclxuXHJcbiAgICBsZXQgdXJsID0gYCR7cHJvY2Vzcy5lbnYuQVdTQVBJVVJMfS9lc3RpbWF0ZS9uZXdgO1xyXG4gICAgbGV0IG1ldGhvZCA9ICdQT1NUJztcclxuXHJcbiAgICBpZighYm9keURhdGEubmV3UmVjb3JkKXtcclxuICAgICAgICB1cmwgPSBgJHtwcm9jZXNzLmVudi5BV1NBUElVUkx9L2VzdGltYXRlL3VwZGF0ZWA7XHJcbiAgICAgICAgbWV0aG9kID0gJ1BVVCc7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keURhdGEpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYXV0aFRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiBcIk5vdCBBdXRoZW50aWNhdGVkLlwiIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzcG9uZE9iaiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbmRPYmopO1xyXG5cclxuICAgIGlmICghcmVzcG9uZE9iai5zdWNjZXNzKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgLi4ucmVzcG9uZE9iaiB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgLi4ucmVzcG9uZE9iaiB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXNzaW9uIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJhdXRoVG9rZW4iLCJjb2duaXRvQWNjZXNzVG9rZW4iLCJib2R5RGF0YSIsImJvZHkiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiQVdTQVBJVVJMIiwibmV3UmVjb3JkIiwicmVzcG9uc2UiLCJmZXRjaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbmRPYmoiLCJjb25zb2xlIiwibG9nIiwic3VjY2VzcyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/estimate/save-estimate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/estimate/save-estimate.js"));
module.exports = __webpack_exports__;

})();