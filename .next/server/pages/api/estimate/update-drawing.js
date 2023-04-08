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
exports.id = "pages/api/estimate/update-drawing";
exports.ids = ["pages/api/estimate/update-drawing"];
exports.modules = {

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./pages/api/estimate/update-drawing.js":
/*!**********************************************!*\
  !*** ./pages/api/estimate/update-drawing.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    try {\n        if (req.method !== \"POST\") {\n            return;\n        }\n        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n            req: req\n        });\n        if (!session) {\n            res.status(401).json({\n                message: \"Not Authenticated.\"\n            });\n            return;\n        }\n        const authToken = session.cognitoAccessToken;\n        const bodyData = req.body;\n        let url = `${process.env.AWSAPIURL}/estimate/update/drawing`;\n        let method = \"PUT\";\n        const response = await fetch(url, {\n            method: method,\n            body: JSON.stringify(bodyData),\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: authToken\n            }\n        });\n        if (response.status == 401) {\n            res.status(401).json({\n                message: \"Not Authenticated.\"\n            });\n            return;\n        }\n        const respondObj = await response.json();\n        //console.log(respondObj);\n        if (!respondObj.success) {\n            res.status(422).json({\n                ...respondObj\n            });\n            return;\n        }\n        res.status(201).json({\n            ...respondObj\n        });\n    } catch (error) {\n        console.log(\"error\", error);\n        res.status(500).json({\n            message: error.message\n        });\n        return;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXN0aW1hdGUvdXBkYXRlLWRyYXdpbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBRTdDLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQy9CLElBQUk7UUFDRixJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtZQUN6QjtRQUNGLENBQUM7UUFFRCxNQUFNQyxVQUFVLE1BQU1MLDJEQUFVQSxDQUFDO1lBQUVFLEtBQUtBO1FBQUk7UUFFNUMsSUFBSSxDQUFDRyxTQUFTO1lBQ1pGLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBcUI7WUFDckQ7UUFDRixDQUFDO1FBRUQsTUFBTUMsWUFBWUosUUFBUUssa0JBQWtCO1FBQzVDLE1BQU1DLFdBQVdULElBQUlVLElBQUk7UUFFekIsSUFBSUMsTUFBTSxDQUFDLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDLHdCQUF3QixDQUFDO1FBQzVELElBQUlaLFNBQVM7UUFHYixNQUFNYSxXQUFXLE1BQU1DLE1BQU1MLEtBQUs7WUFDaENULFFBQVFBO1lBQ1JRLE1BQU1PLEtBQUtDLFNBQVMsQ0FBQ1Q7WUFDckJVLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQkMsZUFBZWI7WUFDakI7UUFDRjtRQUlBLElBQUlRLFNBQVNYLE1BQU0sSUFBSSxLQUFLO1lBQzFCSCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQXFCO1lBQ3JEO1FBQ0YsQ0FBQztRQUVELE1BQU1lLGFBQWEsTUFBTU4sU0FBU1YsSUFBSTtRQUN0QywwQkFBMEI7UUFFMUIsSUFBSSxDQUFDZ0IsV0FBV0MsT0FBTyxFQUFFO1lBQ3ZCckIsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRSxHQUFHZ0IsVUFBVTtZQUFDO1lBQ3JDO1FBQ0YsQ0FBQztRQUVEcEIsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFLEdBQUdnQixVQUFVO1FBQUM7SUFDdkMsRUFBRSxPQUFPRSxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQyxTQUFTRjtRQUNyQnRCLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBU2lCLE1BQU1qQixPQUFPO1FBQUM7UUFDOUM7SUFDRjtBQUNGO0FBRUEsaUVBQWVQLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG1pbi1mcm9udC1lbmQvLi9wYWdlcy9hcGkvZXN0aW1hdGUvdXBkYXRlLWRyYXdpbmcuanM/YTE3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiByZXEgfSk7XHJcblxyXG4gICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogXCJOb3QgQXV0aGVudGljYXRlZC5cIiB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGF1dGhUb2tlbiA9IHNlc3Npb24uY29nbml0b0FjY2Vzc1Rva2VuO1xyXG4gICAgY29uc3QgYm9keURhdGEgPSByZXEuYm9keTtcclxuXHJcbiAgICBsZXQgdXJsID0gYCR7cHJvY2Vzcy5lbnYuQVdTQVBJVVJMfS9lc3RpbWF0ZS91cGRhdGUvZHJhd2luZ2A7XHJcbiAgICBsZXQgbWV0aG9kID0gJ1BVVCc7XHJcblxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5RGF0YSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBhdXRoVG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6IFwiTm90IEF1dGhlbnRpY2F0ZWQuXCIgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXNwb25kT2JqID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhyZXNwb25kT2JqKTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbmRPYmouc3VjY2Vzcykge1xyXG4gICAgICByZXMuc3RhdHVzKDQyMikuanNvbih7IC4uLnJlc3BvbmRPYmogfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IC4uLnJlc3BvbmRPYmogfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2Vzc2lvbiIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiYXV0aFRva2VuIiwiY29nbml0b0FjY2Vzc1Rva2VuIiwiYm9keURhdGEiLCJib2R5IiwidXJsIiwicHJvY2VzcyIsImVudiIsIkFXU0FQSVVSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25kT2JqIiwic3VjY2VzcyIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/estimate/update-drawing.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/estimate/update-drawing.js"));
module.exports = __webpack_exports__;

})();