/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! natyl.demo.ttf */ \"./src/natyl.demo.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! Agraham.otf */ \"./src/Agraham.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! vinque rg.otf */ \"./src/vinque rg.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: Natyl;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n@font-face {\n    font-family: Agraham;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n@font-face {\n    font-family: Vinque;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n\n*::selection {\n    color:black;\n    background-color: white;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    background-color: black;\n    /* background-image: radial-gradient(circle, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), url(BackgroundO.png); */\n    /* background-color: rgb(36, 3, 3); */\n}\n\nbody > div {\n    padding: 0;\n    margin: 0;\n}\n\n#content {\n    display: grid;\n    grid-template: 2fr 1.5fr 14fr / 1fr;\n    height: 100vh;\n}\n\n.banner {\n    color: white;\n    text-align: center;\n    display:flex;\n    flex-direction: column;\n    user-select: none;\n    cursor:text;\n    \n}\n\n.banner > h1 {\n    font-family: Agraham;\n    font-size: 2rem;\n    letter-spacing: 5px;\n    margin: 0;\n    margin-top: -1rem;\n}\n\n.banner > p {\n    margin-top: -1.5rem;\n    font-family: Vinque;\n    font-size: 1rem;\n}\n\n.banner > p:last-child {\n    margin:0;\n    margin-top: -0.75rem;\n    font-size: 0.75rem;\n}\n\n.nav {\n    /* width: 60vw; */\n    width: clamp(200px,60vw,800px);\n    margin: 1.25vh auto;\n    display: grid;\n    grid-template: 1fr / 1fr 1fr 1fr 1fr;\n    text-align: center;\n    grid-auto-flow: column;\n    color:white;\n    font-weight: bold;\n}\n\n.nav > p {\n    border: 1px solid transparent;\n    cursor:pointer;\n    justify-self:center;\n    user-select: none;\n}\n\n.nav > p:last-of-type {\n    border: 1px solid white;\n    justify-self: center;\n    padding: 2px 8px;\n}\n\n.currentNav {\n    border-bottom: 1px solid white !important;\n}\n\n#reservations.currentNav, #reservations:hover {\n    color:black;\n    transition: background-color 2s, color 2s;\n    background-color: white;\n}\n\n.main {\n    margin: 0 15vw;\n    margin: 0 0;\n    max-width: 100vw;\n    position: relative;\n    /* background-color: black; */\n    /* background: linear-gradient(0deg, rgba(129,10,10,1) 0%, rgba(64,5,5,1) 100%); */\nbackground-color: rgb(25, 25, 25);\n}\n\n.menusHeader {\n    text-align: center;\n    color: white;\n    font-weight:400;\n}\n\n.menusDiv {\n    display: flex;\n    justify-content: center;\n}\n\n.menusButton {\n    font-weight: 400;\n    text-align: center;\n    align-self: center;\n    justify-self: center;\n    color: white;\n    font-size: 1rem;\n    border: white solid 1px;\n    padding: 6px;\n    margin: 10px;\n    cursor: pointer;\n    user-select: none;\n}\n\n.selectedMenuButton, .menusButton:hover {\n    background-color: white;\n    color: rgb(29, 4, 4);\n}\n\n.menusContent > div {\n    color: white;\n    text-align:center;\n    letter-spacing: -0.5px;\n}\n\n.menusContent > div > h1{\n    margin: 15px auto;\n    font-size: 1.5rem;\n    font-weight: 800;\n    margin-bottom: 7.5px;\n    max-width: 40ch;\n    text-align:center;\n}\n\n.menusContent > div > p{\n    margin:0 auto;\n    margin-bottom: 30px;\n    width: clamp(200px,75ch,80vw);\n    text-align:center;\n\n}\n\n.about {\n}\n.aboutImage {\n/* position:absolute; */\nheight: 80vh;\nwidth: 100vw;\nbackground: url(https://elitetraveler.com/wp-content/uploads/sites/8/2017/10/Hotel-Eden-La-Terrazza-scaled-e1600071873644.jpg);\nbackground-size: cover;\n/* margin-left: -15vw; */\nbackground-position: 25% 25%;\n}\n\n.aboutHeading {\n    font-weight: 400;\n    color: white;\n    text-align: center;\n    margin: 2rem 0 1.5rem 0;\n    letter-spacing: 4px;\n    font-size: 2rem;\n}\n\n.aboutText {\n    font-weight: 400;\n    color: white;\n    text-align: center;\n    max-width: 70ch;\n    margin: 1.5rem auto;\n    line-height: 1.5;\n    letter-spacing: 1px;\n}\n\n.aboutTeam {\n    font-weight: 400;\n    color: white;\n    text-align: center;\n    margin: 2rem 0 1.5rem 0;\n    letter-spacing: 4px;\n    font-size: 1.75rem;\n}\n\n.teamContainer {\n    display: flex;\n    justify-content: center;\n    max-width: 75vw;\n    margin: 0 auto;\n    flex-wrap:wrap;\n    gap: 4rem;\n}\n\n.teammateCard {\n    display: flex;\n    flex-direction: column;\n    width: 250px;\n}\n\n.teammateCard > * {\n    margin: 0.15rem 0;\n    text-align: center;\n    color: white;\n}\n\n.teammateCard h2 {\n    font-weight: 400;\n    color: white;\n    text-align: center;\n    letter-spacing: 4px;\n    font-size: 1.5rem;\n}\n\n.teammateCard p {\n    font-weight: 400;\n    color: white;\n    text-align: center;\n    max-width: 70ch;\n    line-height: 1.5;\n    letter-spacing: 1px;\n\n}\n\n.teammateImage {\n    height: 300px;\n    width: 250px;\n    justify-self: center;\n    align-self: center;\n    background-position: 35% 25%;\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n    background-color: black;\n\n}\n\n.teammateImage:hover {\n    background-size: 125% 125%;\n    transition: background-size 2s;\n    cursor: pointer;\n}\n\n.noDouble {\n    pointer-events: none;\n}\n\n.dialogue {\n    height: 0vh;\n    width: 0vw;\n    /* transition: width 2s, height 2s; */\n    position: fixed;\n    z-index: 2;\n    transform-origin:center;\n    animation: expand 1s forwards;\n    background-color: rgba(255, 217, 0, 0.75);\n    display:flex;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);  \n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    color: black;\n    flex-direction: column;\n    overflow:auto;\n    user-select: none;\n}\n\n.dialogue > h1 {\n    font-weight: 400;\n    color: black;\n    text-align: center;\n    letter-spacing: 4px;\n    font-size: 3rem;\n    margin: 0.5rem;\n    animation: scaleAnimation 1s forwards;\n    user-select: none;\n    cursor: text;\n\n}\n\n.dialogue > h2 {\n    font-weight: 400;\n    color: black;\n    text-align: center;\n    letter-spacing: 4px;\n    font-size: 2rem;\n    margin: 0;\n    animation: scaleAnimation 1s forwards;\n    cursor: text;\n}\n\n\n.teammateDescription {\n    color:black;\n    font-weight: 400;\n    letter-spacing: 1px;\n    max-width: clamp(0px,75ch,80vw);\n    white-space: pre-wrap;  \n    animation: scaleAnimation 1s forwards;\n    cursor: text;\n\n}\n\n@keyframes expand {\n    to {\n      height: 100vh;\n      width: 100vw;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);  \n      }}  \n\n.closeButton {\n    font-size: 3rem;\n    font-weight: bold;\n    position: fixed;\n    top: 10px;\n    right:20px;\n    z-index: 3;\n    cursor: pointer;\n    color: white;\n}\n\n.closeButton:hover {\n    color: rgb(209, 209, 209);\n    transition: color 2s;\n}\n\n.bodyDuringDialogue {\n    overflow: hidden;\n}\n\n@keyframes scaleAnimation {\n    0% {\n        transform: scale(0);\n    }\n    50% {\n        transform: scale(0)\n    }\n    60% {\n        transform:scale(0.6)\n    }\n    100% {\n        transform: scale(1);\n    }\n}\n\n.reviewsContainer {\n    justify-content: center;\n    width: 75vw;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n    flex-wrap: wrap;\n}\n\n.reviewDiv {\n    align-self:center;\n    justify-self: center;\n    padding: 5px 10px;\n    text-align: center;\n    display:grid;\n    align-items: center;\n    justify-content: center;\n    grid-template: 1fr 1fr /120px calc(100% - 120px);\n    grid-auto-flow: column;\n    justify-content: center;\n    border: solid white 2px;\n    margin: 1rem 0 0 0;\n    width: clamp(200px,80%,300px);\n    grid-template-areas:\n    \"img name\"\n    \"img text\"\n    \"img stars\";\n    height: 120px;\n    overflow-y: auto;\n\n}\n\n.reviewDiv > h2 {\n    grid-area: name;\n    margin: 0;\n    color: white;\n    grid-column: 2 / 4 ;\n\n}\n\n.reviewImage {\n    grid-area: img;\n    border-radius: 50%;\n    width: 100px;\n    height:100px;\n    object-fit: cover;\n    margin: 0px;\n    margin-left: 0.5rem;\n\n}\n\n.reviewText {\n    grid-area: text;\n    text-align: center;\n    color:white;\n    margin:0px;\n    justify-self: center;\n    word-break:normal;\n    max-width: 55ch;\n    grid-column: 2 / 4 ;\n}\n\n\n.stars {\n    grid-area: stars;\n    font-size: 1rem;\n    color:gold;\n    margin: 0;\n    grid-column: 2 / 4 ;\n}\n\n@keyframes reservationsColor{\n    0% {\n        background-color: black;\n    }\n    100% {\n        background-color: silver;\n    }\n}\n\n.reservationsContainer {\n    height: 100%;\n    width: 100%;\n    background-color: black;\n    animation: reservationsColor 1s forwards;\n    display:flex;\n    flex-direction: column;\n}\n\n.reservationsForm {\n    display:flex;\n    flex-direction:column;\n}\n\n.reservationsForm > h1 {\n    margin: 1rem auto;\n    text-align: center;\n}\n\n.formField {\n    padding:1rem;\n    display:flex;\n    flex-direction: column;\n    text-align: left;\n    width: clamp(200px,60vw,800px);\n    margin: auto;\n}\n\n.formField > * {\n    margin: 2.5px;\n}\n\n.formField > label {\n    font-weight:300;\n}\n.formField > span {\n    font-weight: 100;\n}\n\n.formField > input, .formField > select {\n    height: 3rem;\n}\n\n.bookButton {\n    all:unset;\n    border: solid black 2px;\n    padding: 5px 10px;\n    font-size: 1rem;\n    border-radius: 10px;\nmargin: 0 auto;\nbackground-color: white;\nfont-weight: bold;\nmargin-top: 1rem;\ntext-align: center;\njustify-self: center;\nalign-self: center;\ncursor: pointer;\n\n}\n\n@keyframes resButtonColor{\n    0% {\n        background-color: silver;\n        color: black;\n    }\n    100% {\n        background-color: black;\n        color: silver;\n    }\n}\n\n\n.bookButton:hover {\n    animation: resButtonColor 0.5s forwards;\n}\n\noption, select {\n    cursor:pointer\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dorsia/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://dorsia/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://dorsia/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dorsia/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://dorsia/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://dorsia/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://dorsia/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://dorsia/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://dorsia/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://dorsia/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://dorsia/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAbout: () => (/* binding */ createAbout)\n/* harmony export */ });\nfunction createAbout(mainDisplayObj) {\n    let aboutImage = document.createElement(\"div\")\n    aboutImage.classList = \"aboutImage\"\n    mainDisplayObj.main.appendChild(aboutImage)\n    let aboutHeading = document.createElement(\"h1\")\n    aboutHeading.textContent = \"Timeless Elegance, Enduring Flavor\"\n    aboutHeading.classList = \"aboutHeading\"\n    mainDisplayObj.main.appendChild(aboutHeading)\n    let aboutText = document.createElement(\"p\")\n    aboutText.classList = \"aboutText\"\n    mainDisplayObj.main.appendChild(aboutText)\n    aboutText.textContent = \"Capturing the essence of our establishment's storied past and contemporary allure, DORSIA stands as the pinnacle of refined dining in the heart of the city. Presenting a curated culinary journey, our skilled chefs artfully craft seasonal menus in collaboration with local purveyors and sustainable partners.\"\n    let aboutTeam = document.createElement(\"h1\")\n    aboutTeam.textContent = \"Our Team\"\n    mainDisplayObj.main.appendChild(aboutTeam)\n    aboutTeam.classList = \"aboutTeam\"\n    let teamContainer = document.createElement(\"div\")\n    teamContainer.classList = \"teamContainer\"\n    mainDisplayObj.main.appendChild(teamContainer)\n\n    let createTeamMember = (name,title,imgSrc,description) => {\n        let div = document.createElement(\"div\")\n        div.classList = \"teammateCard\"\n        let img = document.createElement(\"div\")\n        img.classList = \"teammateImage\"\n        img.style.backgroundImage = `url(\"${imgSrc}\")`\n        let fullName = document.createElement(\"h2\")\n        fullName.textContent = name\n        let jobTitle = document.createElement(\"p\")\n        jobTitle.textContent = title\n        teamContainer.appendChild(div)\n        div.appendChild(img)\n        div.appendChild(fullName)\n        div.appendChild(jobTitle)\n\n        function createDialogue() {\n            let body = document.querySelector(\"body\")\n            body.classList = \"bodyDuringDialogue\"\n            div.classList = \"teammateCard noDouble\"\n            let dialogue = document.createElement(\"div\")\n            dialogue.classList = \"dialogue\" \n            body.appendChild(dialogue)\n            let closeButton = document.createElement(\"div\")\n            body.appendChild(closeButton)\n            closeButton.classList = \"closeButton\"\n            closeButton.textContent = \"X\"\n            let header = document.createElement(\"h1\")\n            header.textContent=name\n            let subHeader = document.createElement(\"h2\")\n            subHeader.textContent= title\n            let teammateDescription = document.createElement(\"p\")\n            teammateDescription.classList = \"teammateDescription\"\n            teammateDescription.textContent = description    \n            dialogue.appendChild(header)\n            dialogue.appendChild(subHeader)\n            dialogue.appendChild(teammateDescription)\n            closeButton.addEventListener(\"click\",() => {body.removeChild(dialogue)\n            body.classList = \"\"\n        body.removeChild(closeButton)\n        div.classList = \"teammateCard\"})\n            \n        }\n        div.addEventListener(\"click\",createDialogue)\n    }\n    const dorsiaExperience = `\n    With an unwavering commitment to orchestrating an unparalleled diner's delight, Patrick Bateman's quarter-century tenure as the discerning head of Dorsia's avant-garde culinary domain has fostered an unassailable esprit de corps among our accomplished team. Manifesting genuine pleasure in delivering meticulous service, Patrick propels Dorsia's vision to captivate every facet of our esteemed guests' sensory journey—whether it be the thoughtfully curated jazz ensemble or the subtly ambient illumination gracing our private dining enclaves. In each meticulous detail, Patrick defines Dorsia's luxury.\n\n    Within the realm of Patrick's personal recommendations for an exquisite Dorsia dining experience, he fervently champions the Lobster Chitarra, a gastronomic masterpiece perfectly complemented by a velvety Paul Hobbs California Chardonnay.`;\n\n    const chefDescription = `\n    With an unmatched flair for culinary innovation, Mario Luigitello assumes the role of Executive Restaurant Chef, orchestrating a symphony of flavors that dance upon the palate. Mario's culinary journey is a testament to his passion for exquisite gastronomy, and his creative prowess has elevated our dining experience to unparalleled heights.\n\n    In the kitchen, Mario is a maestro, blending tradition with avant-garde techniques to craft dishes that transcend the ordinary. His dedication to sourcing the finest ingredients and infusing each creation with a touch of his Italian heritage sets the stage for a gastronomic journey like no other.\n\n    Executing his culinary vision with precision, Mario Luigitello invites you to savor the artistry of his creations, where each dish tells a story, and every bite is a celebration of flavor, texture, and culinary finesse.\n    `;\n    const sommelierDescription = `\n    As our esteemed Sommelier-in-Chief, Barack Obama brings a refined palate and a wealth of experience to curate an exceptional wine selection that complements the exquisite dining experience at our establishment. With a passion for the art of wine, Barack's journey in oenology has been nothing short of illustrious.\n\n    Drawing on his extensive knowledge and impeccable taste, Barack has meticulously curated a wine list that mirrors the diversity and complexity of flavors found in every corner of the world. His commitment to showcasing both well-established vineyards and hidden gems ensures that our guests embark on a vinous journey that transcends expectations.\n\n    In Barack's capable hands, each glass becomes a narrative, and every pour tells a story of terroir, craftsmanship, and the joy of discovery. Join us as Sommelier Obama guides you through a curated selection that elevates your dining experience to new heights.\n    `;\n\n    createTeamMember(\"Patrick Bateman\",\"General Manager\",\"https://media.gq-magazine.co.uk/photos/5e9ee080be258400088d6fc3/1:1/w_1080,h_1080,c_limit/20200421-psycho-04.jpg\", dorsiaExperience)\n    createTeamMember(\"Mario Luigitello\",\"Execute Restaurant Chef\",\"https://www.the-yeatman-hotel.com/fotos/gca/chef_212942577763b6a8b28754d.jpg\", chefDescription)\n    createTeamMember(\"Obama\",\"Sommilier\",\"./Obama.png\",sommelierDescription)\n\n}\n\n//# sourceURL=webpack://dorsia/./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _menus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menus */ \"./src/menus.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _reviews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reviews */ \"./src/reviews.js\");\n/* harmony import */ var _reservations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reservations */ \"./src/reservations.js\");\n\n\n\n\n\n\nlet content = document.querySelector(\"#content\")\n\nfunction mainDisplay() {\n    let banner = document.createElement(\"div\")\n    banner.classList = \"banner\"\n    let nav = document.createElement(\"div\")\n    nav.classList = \"nav\"\n    let main = document.createElement(\"div\")\n    main.classList = \"main\"\n    content.appendChild(banner)\n    content.appendChild(nav)\n    content.appendChild(main)\n    return {banner,nav,main}\n}\n\nfunction menusDisplay() {\n    let logo = document.createElement(\"H1\")\n    logo.textContent = \"Dorsia\"\n    let description = document.createElement(\"p\")\n    description.textContent = \"A gastronomical Experience\"\n    let location = document.createElement(\"p\")\n    location.textContent = \"Exclusive Reservations\"\n    mainDisplayObj.banner.appendChild(logo)\n    mainDisplayObj.banner.appendChild(description)\n    mainDisplayObj.banner.appendChild(location)\n    return {logo,description,location}\n}\n\nfunction navDisplay() {\n    let menus = document.createElement(\"p\")\n    menus.textContent = \"menus\"\n    menus.classList = \"navButton\"\n    let about = document.createElement(\"p\")\n    about.textContent = \"about\"\n    about.classList = \"navButton currentNav\"\n    let reviews = document.createElement(\"p\")\n    reviews.textContent = \"reviews\"\n    reviews.classList = \"navButton\"\n    let reservations = document.createElement(\"p\")\n    reservations.textContent = \"Reservations\"\n    reservations.classList = \"navButton\"\n    reservations.id = \"reservations\"\n    mainDisplayObj.nav.appendChild(about)\n    mainDisplayObj.nav.appendChild(menus)\n    mainDisplayObj.nav.appendChild(reviews)\n    mainDisplayObj.nav.appendChild(reservations)\n    return {about,menus,reviews,reservations}\n}\n\nlet cleanMain = () => {\n    mainDisplayObj.main.innerHTML = \"\"\n}\n\nlet informationObject = {\n    selectedPage: document.querySelector(\".navButton\"),\n    switchPage(e) {informationObject.selectedPage.classList = \"navButton\"\n    informationObject.selectedPage = e.currentTarget\n    informationObject.selectedPage.classList = \"navButton currentNav\"\n        switch (informationObject.selectedPage.textContent) {\n        case (\"menus\"):\n            cleanMain()\n            ;(0,_menus__WEBPACK_IMPORTED_MODULE_1__.createMenus)(mainDisplayObj)\n            break;\n        case (\"about\"):\n            cleanMain()\n            ;(0,_about__WEBPACK_IMPORTED_MODULE_2__.createAbout)(mainDisplayObj)\n            break;\n        case (\"reviews\"):\n            cleanMain()\n            ;(0,_reviews__WEBPACK_IMPORTED_MODULE_3__.createReviews)(mainDisplayObj)\n            break;\n        case (\"Reservations\"):\n        cleanMain()\n        ;(0,_reservations__WEBPACK_IMPORTED_MODULE_4__.createReservations)(mainDisplayObj)\n            break;\n    }\n}\n}\n\nlet createNavClick = () => {\n    let navButtons = document.querySelectorAll(\".navButton\")\n    navButtons.forEach((button) => {button.addEventListener(\"click\",informationObject.switchPage)})\n    ;(0,_about__WEBPACK_IMPORTED_MODULE_2__.createAbout)(mainDisplayObj)\n}\n\nlet mainDisplayObj = mainDisplay()\nlet menusDisplayObj = menusDisplay()\nlet navDisplayObj = navDisplay()\ninformationObject.selectedPage = navDisplayObj.about\ncreateNavClick()\n\n\n//# sourceURL=webpack://dorsia/./src/index.js?");

/***/ }),

/***/ "./src/menus.js":
/*!**********************!*\
  !*** ./src/menus.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenus: () => (/* binding */ createMenus)\n/* harmony export */ });\nfunction createMenus (mainDisplayObj) {\n    console.log(mainDisplayObj)\n    let selectedMenu = \"Entrees\"\n    let menusHeader = document.createElement(\"h1\")\n    menusHeader.textContent = \"Menus\"\n    menusHeader.classList = \"menusHeader\"\n    mainDisplayObj.main.appendChild(menusHeader)\n\n    let menusDiv = document.createElement(\"div\")\n    menusDiv.classList = \"menusDiv\"\n    mainDisplayObj.main.appendChild(menusDiv)\n\n    let menusContent = document.createElement(\"div\")\n    menusContent.classList = \"menusContent\"\n    mainDisplayObj.main.appendChild(menusContent)\n\n    let entreesButton =  document.createElement(\"h1\")\n    entreesButton.textContent = \"Entrees\"\n    let cuisineButton = document.createElement(\"h1\")\n    cuisineButton.textContent = \"Cuisine\"\n    let spiritsButton = document.createElement(\"h1\")\n    spiritsButton.textContent = \"Spirits\"\n    let delicaciesButton = document.createElement(\"h1\")\n    delicaciesButton.textContent = \"Delicacies\"\n\n    let buttons = [entreesButton,cuisineButton,spiritsButton,delicaciesButton]\n    let switchMenu = () => {\n        switch (selectedMenu) {\n            case \"Entrees\":\n                createItem(\"Cilantro Crawfish Gumbo\",\"A tantalizing Cajun serenade, melds the bold zest of cilantro with the sultry dance of crawfish, creating a symphony of flavors that echoes through the bayou.\")\n                createItem(\"Mud Soup\",\"A daring divergence, Mud Soup captivates with avant-garde earthiness, defying culinary norms in a bold journey through unconventional cuisine's untamed wilderness.\")\n                createItem(\"Red snapper with violets and pine nuts\",\"The Red Snapper, a piscatorial virtuoso, elegantly bedecked with violets and pine nuts, orchestrates a sensory concerto on the palate.\")\n                createItem(\"Charcola Arugula\",\"A darkened rebellion against the usual verdant fare, Charcoal Arugula emerges as a mysterious and shadowy kaleidoscope on the plate, infusing intrigue into every bite.\")\n                break;\n            case \"Cuisine\":\n                createItem(\"Sea Urchin Ceviche\",\"A great initiation into indulgence, the Sea Urchin Ceviche unfolds as a masterpiece of marine delight.\")\n                createItem(\"Peanut Butter Soup with Smoked Duck and Mashed Squash\", \" a flavorful fusion where rich peanut butter meets smoky duck and sweet mashed squash, creating a harmonious culinary masterpiece.\")\n                createItem(\"Squid Ravioli in a Lemongrass Broth with Goat Cheese Profiteroles\",\"An exquisite voyage through the seas and gardens of gastronomy, the Squid Ravioli in a Lemongrass Broth with Goat Cheese Profiteroles is a culinary sonnet.\")\n                createItem(\"Pork Loin with Lime Jell-o\",\"A daring culinary juxtaposition, the Pork Loin with Lime Jell-o redefines flavor expectations.\")\n                createItem(\"Swordfish Meatloaf with Onion Marmalade\", \"A bold reinterpretation of a classic, takes meatloaf to the heights of oceanic elegance.\")\n                break;\n            case \"Spirits\":\n                createItem(\"Vodka Mirage\", \"Vodka + Cranberry Juice + Splash of Club Soda\")\n                createItem(\"Gin Sonata\",\"Gin + Dry Vermouth + Lemon Twist\")\n                createItem(\"Mystic Mule\", \"Bourbon + Ginger Beer + Fresh Lime\")\n            case \"Delicacies\":\n                createItem(\"Caramelized Pecan Parfait\",\"Vanilla Bean Ice Cream combined with Warm Caramel Sauce and Toasted Pecans\")\n                createItem(\"Dark Chocolate Decadence\",\"Flourless Chocolate Cake with Raspberry Coulis and a Dollop of Whipped Cream\")\n                createItem(\"Lemon Infusion Tart\",\"Lemon Curd on Buttery Shortcrust, topped with Zest of Fresh Lemons\")\n            }\n    }\n\n    let menusButtonsHandler = (e) => {selectedMenu = e.currentTarget\n        buttons.forEach((button) => {button.classList = \"menusButton\"})\n        e.currentTarget.classList = \"menusButton selectedMenuButton\"\n        selectedMenu = e.currentTarget.textContent\n        menusContent.innerHTML = \"\"\n        switchMenu(selectedMenu)\n    }\n\n    buttons.forEach((button) => {menusDiv.appendChild(button)\n    button.classList = \"menusButton\"\n    button.addEventListener(\"click\",menusButtonsHandler)})\n\n    let createItem = (Header,Description) => {\n        let div = document.createElement(\"div\")\n        let h1 = document.createElement(\"h1\")\n        h1.textContent = Header\n        let p = document.createElement(\"p\")\n        p.textContent = Description\n        menusContent.appendChild(div)\n        div.appendChild(h1)\n        div.appendChild(p)\n\n    }\n    switchMenu(selectedMenu)\n    entreesButton.classList = \"menusButton selectedMenuButton\"\n}\n\n//# sourceURL=webpack://dorsia/./src/menus.js?");

/***/ }),

/***/ "./src/reservations.js":
/*!*****************************!*\
  !*** ./src/reservations.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createReservations: () => (/* binding */ createReservations)\n/* harmony export */ });\nfunction createReservations (mainDisplayObj) {\n    let reservationsContainer = document.createElement(\"div\")\n    reservationsContainer.classList = \"reservationsContainer\"\n    mainDisplayObj.main.appendChild(reservationsContainer)\n    let reservationsForm = document.createElement(\"form\")\n    reservationsForm.classList = \"reservationsForm\"\n    let formHeader = document.createElement(\"h1\")\n    formHeader.textContent = \"Reservations\"\n    reservationsForm.appendChild(formHeader)\n    let createFormField = (labelText,placeholder,id,required,inputType) => {\n        let div = document.createElement(\"div\")\n        div.classList = \"formField\"\n        let label = document.createElement(\"label\")\n        label.textContent = labelText\n        label.for = id\n        let input = document.createElement(inputType)\n        input.placeholder = placeholder\n        input.id = id\n        if (required == \"true\") {input.required = true\n        let requiredText = document.createElement(\"strong\")\n        requiredText.classlist = \"requiredText\"\n        requiredText.textContent = \" - Required\"\n        label.appendChild(requiredText)}\n        else {\n            let notRequiredText = document.createElement(\"span\")\n            notRequiredText.classlist = \"optionalText\"\n            notRequiredText.textContent = \" - Optional\"\n            label.appendChild(notRequiredText)}\n        reservationsForm.appendChild(div)\n        div.appendChild(label)\n        div.appendChild(input)\n        return {div,label,input}\n    }\n    let createSelectOption = (selectElement,optionVal,disabled,selected) => {\n        let option = document.createElement(\"option\")\n        option.value = optionVal\n        option.textContent = optionVal\n        selectElement.appendChild(option)\n        if (disabled !== null) {option.disabled = \"true\"}\n        if (selected !== null) {option.selected = \"true\"}\n        return {option}\n    }\n    let first = createFormField(\"Number of People\",\"Number of people\",\"Nobama\",\"\",\"select\")\n    createSelectOption(first.input,\"Number of people\",\"false\")\n    createSelectOption(first.input,\"2 People\",null,\"\")\n    createSelectOption(first.input,\"3 People\",null,null)\n    createSelectOption(first.input,\"4 People\",null,null)\n    createSelectOption(first.input,\"5 People\",null,null)\n    createSelectOption(first.input,\"6 People\",null,null)\n    createSelectOption(first.input,\"7 People\",null,null)\n    createSelectOption(first.input,\"8 People\",null,null)\n\n    let currentDate = new Date()\n    let date = createFormField(\"Date\",\"Date\",\"Date\",\"true\",\"input\")\n    date.input.type = \"date\"\n    const formattedDate = currentDate.toISOString().split('T')[0];\n    date.input.value = formattedDate\n\n    let time = createFormField(\"Time\",\"Time\",\"Time\",\"true\",\"select\")\n    createSelectOption(time.input,\"Time\",\"true\",null)\n    // createSelectOption(time.input,currentDate.getHours(),null,null)\n    // let hourOptions = []\n    for (let i = 16 ; i < 24.5; i+= 0.5) {\n        let hour = 0\n        if (i % 1 == 0) {\n            // this if is obsolete i just didn't want to remove the if else formatting, the else is always the one\n            if (false) {}\n            else {hour = createSelectOption(time.input,i + \" : 00\",null,null)}\n        // hourOptions.push(hour)\n        }\n        else {if (i !== 20.5) {hour = createSelectOption(time.input,i-0.5 + \" : 30\",null,null)}\n        else{hour = createSelectOption(time.input,i-0.5 + \" : 30\",null,\"true\")}\n    }\n}\n    let bookButton = document.createElement(\"button\")\n    bookButton.classList = \"bookButton\"\n    bookButton.textContent = \"Find a Table\"\n    reservationsForm.appendChild(bookButton)\n    reservationsContainer.appendChild(reservationsForm)\n\n}\n\n//# sourceURL=webpack://dorsia/./src/reservations.js?");

/***/ }),

/***/ "./src/reviews.js":
/*!************************!*\
  !*** ./src/reviews.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createReviews: () => (/* binding */ createReviews)\n/* harmony export */ });\n\nfunction createReviews (mainDisplayObj) {\n    let reviewsContainer = document.createElement(\"div\")\n    mainDisplayObj.main.appendChild(reviewsContainer)\n    reviewsContainer.classList = \"reviewsContainer\"\n    let createReview = (nameVal,starsCount,reviewTextVal,src) => {\n        let div = document.createElement(\"div\")\n        div.classList = \"reviewDiv\"\n        let img = document.createElement(\"img\")\n        img.src = src\n        img.classList = \"reviewImage\"\n        let name = document.createElement(\"h2\")\n        name.textContent = nameVal\n        let reviewText = document.createElement(\"p\")\n        reviewText.textContent = reviewTextVal\n        reviewText.classList = \"reviewText\"\n        let stars = document.createElement(\"p\")\n        stars.classList = \"stars\"\n        stars.textContent = \"★\".repeat(starsCount)\n        reviewsContainer.appendChild(div)\n        div.appendChild(img)\n        div.appendChild(name)\n        div.appendChild(reviewText)\n        div.appendChild(stars)\n    }\n    createReview(\"Paul Allen\",5,\"Great sea urchin seviche.\", \"https://static.wikia.nocookie.net/the-dead-meat/images/5/5d/Paul_Allen.jpg\")\n    createReview(\"Timothy Bryce\",5,\"God, I hate this place. It's a chick restaurant. Why aren't we at Dorsia?\", \"https://pbs.twimg.com/profile_images/1634341787/297575_2324427623435_1031953486_2684668_652685917_n_400x400.jpg\")\n    createReview(\"David Van Patten\",3,\"No good bathroom to do coke in.\", \"https://i.redd.it/lyh6fz8i72wa1.png\")\n}\n\n//# sourceURL=webpack://dorsia/./src/reviews.js?");

/***/ }),

/***/ "./src/Agraham.otf":
/*!*************************!*\
  !*** ./src/Agraham.otf ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5d4cc9038dcca3f21a29.otf\";\n\n//# sourceURL=webpack://dorsia/./src/Agraham.otf?");

/***/ }),

/***/ "./src/natyl.demo.ttf":
/*!****************************!*\
  !*** ./src/natyl.demo.ttf ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"850f30998797d86af63c.ttf\";\n\n//# sourceURL=webpack://dorsia/./src/natyl.demo.ttf?");

/***/ }),

/***/ "./src/vinque rg.otf":
/*!***************************!*\
  !*** ./src/vinque rg.otf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"74fb3d986520e3312749.otf\";\n\n//# sourceURL=webpack://dorsia/./src/vinque_rg.otf?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;