/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst app = express();\nconst cors = __webpack_require__(/*! cors */ \"./node_modules/cors/lib/index.js\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst apiData = __webpack_require__(/*! ./data.json */ \"./data.json\");\napp.use(cors());\napp.use(express.static(path.join(__dirname, 'public')));\napp.get(\"/\", (req, res) => {\n  res.send(`\n    <center>\n    <h3>Hello This is a fake API</h3>\n    <pre> API Link is given\nBelow </pre>\n    <a href=\"/products\"> Link </a>\n    </center>\n    `);\n});\n/* app.get(\"/\", (req, res) => {\r\n    res.sendFile(path.join(__dirname + \"/index.html\"));\r\n}); */\n\napp.get(\"/products\", (req, res) => {\n  res.send(apiData);\n});\nconst port = process.env.PORT || 3000;\napp.listen(port, () => {\n  console.log(`The application is started successfully on port ${port}`);\n});\n\n//# sourceURL=webpack://fakeapi/./index.js?");

/***/ }),

/***/ "./node_modules/cors/lib/index.js":
/*!****************************************!*\
  !*** ./node_modules/cors/lib/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("(function () {\n\n  'use strict';\n\n  var assign = __webpack_require__(/*! object-assign */ \"./node_modules/object-assign/index.js\");\n  var vary = __webpack_require__(/*! vary */ \"./node_modules/vary/index.js\");\n\n  var defaults = {\n    origin: '*',\n    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',\n    preflightContinue: false,\n    optionsSuccessStatus: 204\n  };\n\n  function isString(s) {\n    return typeof s === 'string' || s instanceof String;\n  }\n\n  function isOriginAllowed(origin, allowedOrigin) {\n    if (Array.isArray(allowedOrigin)) {\n      for (var i = 0; i < allowedOrigin.length; ++i) {\n        if (isOriginAllowed(origin, allowedOrigin[i])) {\n          return true;\n        }\n      }\n      return false;\n    } else if (isString(allowedOrigin)) {\n      return origin === allowedOrigin;\n    } else if (allowedOrigin instanceof RegExp) {\n      return allowedOrigin.test(origin);\n    } else {\n      return !!allowedOrigin;\n    }\n  }\n\n  function configureOrigin(options, req) {\n    var requestOrigin = req.headers.origin,\n      headers = [],\n      isAllowed;\n\n    if (!options.origin || options.origin === '*') {\n      // allow any origin\n      headers.push([{\n        key: 'Access-Control-Allow-Origin',\n        value: '*'\n      }]);\n    } else if (isString(options.origin)) {\n      // fixed origin\n      headers.push([{\n        key: 'Access-Control-Allow-Origin',\n        value: options.origin\n      }]);\n      headers.push([{\n        key: 'Vary',\n        value: 'Origin'\n      }]);\n    } else {\n      isAllowed = isOriginAllowed(requestOrigin, options.origin);\n      // reflect origin\n      headers.push([{\n        key: 'Access-Control-Allow-Origin',\n        value: isAllowed ? requestOrigin : false\n      }]);\n      headers.push([{\n        key: 'Vary',\n        value: 'Origin'\n      }]);\n    }\n\n    return headers;\n  }\n\n  function configureMethods(options) {\n    var methods = options.methods;\n    if (methods.join) {\n      methods = options.methods.join(','); // .methods is an array, so turn it into a string\n    }\n    return {\n      key: 'Access-Control-Allow-Methods',\n      value: methods\n    };\n  }\n\n  function configureCredentials(options) {\n    if (options.credentials === true) {\n      return {\n        key: 'Access-Control-Allow-Credentials',\n        value: 'true'\n      };\n    }\n    return null;\n  }\n\n  function configureAllowedHeaders(options, req) {\n    var allowedHeaders = options.allowedHeaders || options.headers;\n    var headers = [];\n\n    if (!allowedHeaders) {\n      allowedHeaders = req.headers['access-control-request-headers']; // .headers wasn't specified, so reflect the request headers\n      headers.push([{\n        key: 'Vary',\n        value: 'Access-Control-Request-Headers'\n      }]);\n    } else if (allowedHeaders.join) {\n      allowedHeaders = allowedHeaders.join(','); // .headers is an array, so turn it into a string\n    }\n    if (allowedHeaders && allowedHeaders.length) {\n      headers.push([{\n        key: 'Access-Control-Allow-Headers',\n        value: allowedHeaders\n      }]);\n    }\n\n    return headers;\n  }\n\n  function configureExposedHeaders(options) {\n    var headers = options.exposedHeaders;\n    if (!headers) {\n      return null;\n    } else if (headers.join) {\n      headers = headers.join(','); // .headers is an array, so turn it into a string\n    }\n    if (headers && headers.length) {\n      return {\n        key: 'Access-Control-Expose-Headers',\n        value: headers\n      };\n    }\n    return null;\n  }\n\n  function configureMaxAge(options) {\n    var maxAge = (typeof options.maxAge === 'number' || options.maxAge) && options.maxAge.toString()\n    if (maxAge && maxAge.length) {\n      return {\n        key: 'Access-Control-Max-Age',\n        value: maxAge\n      };\n    }\n    return null;\n  }\n\n  function applyHeaders(headers, res) {\n    for (var i = 0, n = headers.length; i < n; i++) {\n      var header = headers[i];\n      if (header) {\n        if (Array.isArray(header)) {\n          applyHeaders(header, res);\n        } else if (header.key === 'Vary' && header.value) {\n          vary(res, header.value);\n        } else if (header.value) {\n          res.setHeader(header.key, header.value);\n        }\n      }\n    }\n  }\n\n  function cors(options, req, res, next) {\n    var headers = [],\n      method = req.method && req.method.toUpperCase && req.method.toUpperCase();\n\n    if (method === 'OPTIONS') {\n      // preflight\n      headers.push(configureOrigin(options, req));\n      headers.push(configureCredentials(options, req));\n      headers.push(configureMethods(options, req));\n      headers.push(configureAllowedHeaders(options, req));\n      headers.push(configureMaxAge(options, req));\n      headers.push(configureExposedHeaders(options, req));\n      applyHeaders(headers, res);\n\n      if (options.preflightContinue) {\n        next();\n      } else {\n        // Safari (and potentially other browsers) need content-length 0,\n        //   for 204 or they just hang waiting for a body\n        res.statusCode = options.optionsSuccessStatus;\n        res.setHeader('Content-Length', '0');\n        res.end();\n      }\n    } else {\n      // actual response\n      headers.push(configureOrigin(options, req));\n      headers.push(configureCredentials(options, req));\n      headers.push(configureExposedHeaders(options, req));\n      applyHeaders(headers, res);\n      next();\n    }\n  }\n\n  function middlewareWrapper(o) {\n    // if options are static (either via defaults or custom options passed in), wrap in a function\n    var optionsCallback = null;\n    if (typeof o === 'function') {\n      optionsCallback = o;\n    } else {\n      optionsCallback = function (req, cb) {\n        cb(null, o);\n      };\n    }\n\n    return function corsMiddleware(req, res, next) {\n      optionsCallback(req, function (err, options) {\n        if (err) {\n          next(err);\n        } else {\n          var corsOptions = assign({}, defaults, options);\n          var originCallback = null;\n          if (corsOptions.origin && typeof corsOptions.origin === 'function') {\n            originCallback = corsOptions.origin;\n          } else if (corsOptions.origin) {\n            originCallback = function (origin, cb) {\n              cb(null, corsOptions.origin);\n            };\n          }\n\n          if (originCallback) {\n            originCallback(req.headers.origin, function (err2, origin) {\n              if (err2 || !origin) {\n                next(err2);\n              } else {\n                corsOptions.origin = origin;\n                cors(corsOptions, req, res, next);\n              }\n            });\n          } else {\n            next();\n          }\n        }\n      });\n    };\n  }\n\n  // can pass either an options hash, an options delegate, or nothing\n  module.exports = middlewareWrapper;\n\n}());\n\n\n//# sourceURL=webpack://fakeapi/./node_modules/cors/lib/index.js?");

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n\n/* eslint-disable no-unused-vars */\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nfunction shouldUseNative() {\n\ttry {\n\t\tif (!Object.assign) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// Detect buggy property enumeration order in older V8 versions.\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\t\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\n\t\ttest1[5] = 'de';\n\t\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test2 = {};\n\t\tfor (var i = 0; i < 10; i++) {\n\t\t\ttest2['_' + String.fromCharCode(i)] = i;\n\t\t}\n\t\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n\t\t\treturn test2[n];\n\t\t});\n\t\tif (order2.join('') !== '0123456789') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test3 = {};\n\t\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n\t\t\ttest3[letter] = letter;\n\t\t});\n\t\tif (Object.keys(Object.assign({}, test3)).join('') !==\n\t\t\t\t'abcdefghijklmnopqrst') {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch (err) {\n\t\t// We don't expect any of the above to throw, but better to be safe.\n\t\treturn false;\n\t}\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (getOwnPropertySymbols) {\n\t\t\tsymbols = getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n\n//# sourceURL=webpack://fakeapi/./node_modules/object-assign/index.js?");

/***/ }),

/***/ "./node_modules/vary/index.js":
/*!************************************!*\
  !*** ./node_modules/vary/index.js ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("/*!\n * vary\n * Copyright(c) 2014-2017 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module exports.\n */\n\nmodule.exports = vary\nmodule.exports.append = append\n\n/**\n * RegExp to match field-name in RFC 7230 sec 3.2\n *\n * field-name    = token\n * token         = 1*tchar\n * tchar         = \"!\" / \"#\" / \"$\" / \"%\" / \"&\" / \"'\" / \"*\"\n *               / \"+\" / \"-\" / \".\" / \"^\" / \"_\" / \"`\" / \"|\" / \"~\"\n *               / DIGIT / ALPHA\n *               ; any VCHAR, except delimiters\n */\n\nvar FIELD_NAME_REGEXP = /^[!#$%&'*+\\-.^_`|~0-9A-Za-z]+$/\n\n/**\n * Append a field to a vary header.\n *\n * @param {String} header\n * @param {String|Array} field\n * @return {String}\n * @public\n */\n\nfunction append (header, field) {\n  if (typeof header !== 'string') {\n    throw new TypeError('header argument is required')\n  }\n\n  if (!field) {\n    throw new TypeError('field argument is required')\n  }\n\n  // get fields array\n  var fields = !Array.isArray(field)\n    ? parse(String(field))\n    : field\n\n  // assert on invalid field names\n  for (var j = 0; j < fields.length; j++) {\n    if (!FIELD_NAME_REGEXP.test(fields[j])) {\n      throw new TypeError('field argument contains an invalid header name')\n    }\n  }\n\n  // existing, unspecified vary\n  if (header === '*') {\n    return header\n  }\n\n  // enumerate current values\n  var val = header\n  var vals = parse(header.toLowerCase())\n\n  // unspecified vary\n  if (fields.indexOf('*') !== -1 || vals.indexOf('*') !== -1) {\n    return '*'\n  }\n\n  for (var i = 0; i < fields.length; i++) {\n    var fld = fields[i].toLowerCase()\n\n    // append value (case-preserving)\n    if (vals.indexOf(fld) === -1) {\n      vals.push(fld)\n      val = val\n        ? val + ', ' + fields[i]\n        : fields[i]\n    }\n  }\n\n  return val\n}\n\n/**\n * Parse a vary header into an array.\n *\n * @param {String} header\n * @return {Array}\n * @private\n */\n\nfunction parse (header) {\n  var end = 0\n  var list = []\n  var start = 0\n\n  // gather tokens\n  for (var i = 0, len = header.length; i < len; i++) {\n    switch (header.charCodeAt(i)) {\n      case 0x20: /*   */\n        if (start === end) {\n          start = end = i + 1\n        }\n        break\n      case 0x2c: /* , */\n        list.push(header.substring(start, end))\n        start = end = i + 1\n        break\n      default:\n        end = i + 1\n        break\n    }\n  }\n\n  // final token\n  list.push(header.substring(start, end))\n\n  return list\n}\n\n/**\n * Mark that a request is varied on a header field.\n *\n * @param {Object} res\n * @param {String|Array} field\n * @public\n */\n\nfunction vary (res, field) {\n  if (!res || !res.getHeader || !res.setHeader) {\n    // quack quack\n    throw new TypeError('res argument is required')\n  }\n\n  // get existing header\n  var val = res.getHeader('Vary') || ''\n  var header = Array.isArray(val)\n    ? val.join(', ')\n    : String(val)\n\n  // set new header\n  if ((val = append(header, field))) {\n    res.setHeader('Vary', val)\n  }\n}\n\n\n//# sourceURL=webpack://fakeapi/./node_modules/vary/index.js?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
const express = require('express');

module.exports = express;

/***/ }),

/***/ "./data.json":
/*!*******************!*\
  !*** ./data.json ***!
  \*******************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('[{\"id\":1,\"title\":\"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops\",\"price\":109.95,\"description\":\"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday\",\"category\":\"men\\'s clothing\",\"image\":\"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg\",\"rating\":{\"rate\":3.9,\"count\":120}},{\"id\":2,\"title\":\"Mens Casual Premium Slim Fit T-Shirts \",\"price\":22.3,\"description\":\"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.\",\"category\":\"men\\'s clothing\",\"image\":\"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg\",\"rating\":{\"rate\":4.1,\"count\":259}},{\"id\":3,\"title\":\"Mens Cotton Jacket\",\"price\":55.99,\"description\":\"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.\",\"category\":\"men\\'s clothing\",\"image\":\"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg\",\"rating\":{\"rate\":4.7,\"count\":500}},{\"id\":4,\"title\":\"Mens Casual Slim Fit\",\"price\":15.99,\"description\":\"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.\",\"category\":\"men\\'s clothing\",\"image\":\"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg\",\"rating\":{\"rate\":2.1,\"count\":430}},{\"id\":5,\"title\":\"John Hardy Women\\'s Legends Naga Gold & Silver Dragon Station Chain Bracelet\",\"price\":695,\"description\":\"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean\\'s pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.\",\"category\":\"jewelery\",\"image\":\"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg\",\"rating\":{\"rate\":4.6,\"count\":400}},{\"id\":6,\"title\":\"Solid Gold Petite Micropave \",\"price\":168,\"description\":\"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.\",\"category\":\"jewelery\",\"image\":\"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg\",\"rating\":{\"rate\":3.9,\"count\":70}},{\"id\":7,\"title\":\"White Gold Plated Princess\",\"price\":9.99,\"description\":\"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine\\'s Day...\",\"category\":\"jewelery\",\"image\":\"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg\",\"rating\":{\"rate\":3,\"count\":400}},{\"id\":8,\"title\":\"Pierced Owl Rose Gold Plated Stainless Steel Double\",\"price\":10.99,\"description\":\"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel\",\"category\":\"jewelery\",\"image\":\"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg\",\"rating\":{\"rate\":1.9,\"count\":100}},{\"id\":9,\"title\":\"WD 2TB Elements Portable External Hard Drive - USB 3.0 \",\"price\":64,\"description\":\"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system\",\"category\":\"electronics\",\"image\":\"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg\",\"rating\":{\"rate\":3.3,\"count\":203}},{\"id\":10,\"title\":\"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s\",\"price\":109,\"description\":\"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)\",\"category\":\"electronics\",\"image\":\"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg\",\"rating\":{\"rate\":2.9,\"count\":470}},{\"id\":11,\"title\":\"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5\",\"price\":109,\"description\":\"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.\",\"category\":\"electronics\",\"image\":\"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg\",\"rating\":{\"rate\":4.8,\"count\":319}},{\"id\":12,\"title\":\"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive\",\"price\":114,\"description\":\"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer\\'s limited warranty\",\"category\":\"electronics\",\"image\":\"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg\",\"rating\":{\"rate\":4.8,\"count\":400}},{\"id\":13,\"title\":\"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin\",\"price\":599,\"description\":\"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz\",\"category\":\"electronics\",\"image\":\"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg\",\"rating\":{\"rate\":2.9,\"count\":250}},{\"id\":14,\"title\":\"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED \",\"price\":999.99,\"description\":\"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag\",\"category\":\"electronics\",\"image\":\"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg\",\"rating\":{\"rate\":2.2,\"count\":140}},{\"id\":15,\"title\":\"BIYLACLESEN Women\\'s 3-in-1 Snowboard Jacket Winter Coats\",\"price\":56.99,\"description\":\"Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates\",\"category\":\"women\\'s clothing\",\"image\":\"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg\",\"rating\":{\"rate\":2.6,\"count\":235}},{\"id\":16,\"title\":\"Lock and Love Women\\'s Removable Hooded Faux Leather Moto Biker Jacket\",\"price\":29.95,\"description\":\"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON\",\"category\":\"women\\'s clothing\",\"image\":\"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg\",\"rating\":{\"rate\":2.9,\"count\":340}},{\"id\":17,\"title\":\"Rain Jacket Women Windbreaker Striped Climbing Raincoats\",\"price\":39.99,\"description\":\"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn\\'t overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.\",\"category\":\"women\\'s clothing\",\"image\":\"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg\",\"rating\":{\"rate\":3.8,\"count\":679}},{\"id\":18,\"title\":\"MBJ Women\\'s Solid Short Sleeve Boat Neck V \",\"price\":9.85,\"description\":\"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem\",\"category\":\"women\\'s clothing\",\"image\":\"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg\",\"rating\":{\"rate\":4.7,\"count\":130}},{\"id\":19,\"title\":\"Opna Women\\'s Short Sleeve Moisture\",\"price\":7.95,\"description\":\"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort\",\"category\":\"women\\'s clothing\",\"image\":\"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg\",\"rating\":{\"rate\":4.5,\"count\":146}},{\"id\":20,\"title\":\"DANVOUY Womens T Shirt Casual Cotton Short\",\"price\":12.99,\"description\":\"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.\",\"category\":\"women\\'s clothing\",\"image\":\"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg\",\"rating\":{\"rate\":3.6,\"count\":145}}]');\n\n//# sourceURL=webpack://fakeapi/./data.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;