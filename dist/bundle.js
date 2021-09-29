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

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./index.html\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ \"./css/main.scss\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ \"./js/main.js?9e1e\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);\n/*\n * This is the main entry point for Webpack, the compiler & dependency loader.\n * All files that are necessary for your web page and need to be 'watched' for changes should be included here!\n */\n// HTML Files\n // Stylesheets\n\n // Scripts\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/main.js?9e1e":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

eval("/* Your JS here. */\nvar section_dict = {\n  0: 'home',\n  1: 'academics',\n  2: 'experiences',\n  3: 'projects',\n  4: 'interests',\n  5: 'contacts'\n};\ncurrent_section = 0; // if (current_section === undefined) {\n//     current_section = 0;\n// };\n\nwindow.onscroll = function () {\n  stickyHeader();\n  var hom = document.getElementById('home').getBoundingClientRect().top;\n  var aca = document.getElementById('academics').getBoundingClientRect().top;\n  var exp = document.getElementById('experiences').getBoundingClientRect().top;\n  var pro = document.getElementById('projects').getBoundingClientRect().top;\n  var int = document.getElementById('interests').getBoundingClientRect().top;\n  var con = document.getElementById('contacts').getBoundingClientRect().top;\n  let arr = [hom, aca, exp, pro, int, con];\n  var i = 0;\n  console.log(arr);\n\n  for (i = 0; i < arr.length; i++) {\n    if (arr[i] > 3) {\n      i -= 1;\n      break;\n    }\n  }\n\n  i = i == arr.length ? arr.length - 1 : i;\n  document.getElementById(\"click-\" + section_dict[i]).style.textDecoration = \"underline\";\n\n  if (i > 0) {\n    document.getElementById(\"click-\" + section_dict[i - 1]).style.textDecoration = \"none\";\n  }\n\n  if (i < arr.length - 1) {\n    document.getElementById(\"click-\" + section_dict[i + 1]).style.textDecoration = \"none\";\n  }\n};\n\nvar navbar = document.getElementById(\"sticky-navbar\");\nvar navbar_element = document.getElementsByClassName(\"navbar-element\");\nvar sticky = window.innerHeight;\nwindow.addEventListener('resize', function (event) {\n  sticky = window.innerHeight;\n}, true);\nvar home_button = document.getElementById(\"click-home\");\nvar academics_button = document.getElementById('click-academics');\nvar experiences_button = document.getElementById('click-experiences');\nvar projects_button = document.getElementById('click-projects');\nvar interests_button = document.getElementById('click-interests');\nvar contacts_button = document.getElementById('click-contacts');\nvar prev_button = document.getElementById('prev');\nvar next_button = document.getElementById('next');\nhome_button.addEventListener('click', function () {\n  document.getElementById('home').scrollIntoView({\n    behavior: 'smooth'\n  });\n});\nacademics_button.addEventListener('click', function () {\n  document.getElementById('academics').scrollIntoView({\n    behavior: 'smooth'\n  });\n});\nexperiences_button.addEventListener('click', function () {\n  smoothScroll('experiences');\n});\nprojects_button.addEventListener('click', function () {\n  smoothScroll('projects');\n});\ninterests_button.addEventListener('click', function () {\n  smoothScroll('interests');\n});\ncontacts_button.addEventListener('click', function () {\n  smoothScroll('contacts');\n});\nprev_button.addEventListener('click', function () {\n  plusSlides(-1);\n});\nnext_button.addEventListener('click', function () {\n  plusSlides(1);\n});\n\nfunction stickyHeader() {\n  if (window.pageYOffset >= sticky) {\n    navbar.classList.add(\"sticky\");\n    home_button.classList.add(\"sticky\");\n    academics_button.classList.add(\"sticky\");\n    experiences_button.classList.add(\"sticky\");\n    projects_button.classList.add(\"sticky\");\n    interests_button.classList.add(\"sticky\");\n    contacts_button.classList.add(\"sticky\");\n  } else {\n    navbar.classList.remove(\"sticky\");\n    home_button.classList.remove(\"sticky\");\n    academics_button.classList.remove(\"sticky\");\n    experiences_button.classList.remove(\"sticky\");\n    projects_button.classList.remove(\"sticky\");\n    interests_button.classList.remove(\"sticky\");\n    contacts_button.classList.remove(\"sticky\");\n  }\n}\n\nfunction smoothScroll(element) {\n  document.getElementById(element).scrollIntoView({\n    behavior: 'smooth'\n  });\n}\n\nvar slideIndex = 1;\nshowSlides(slideIndex); // Next/previous controls\n\nfunction plusSlides(n) {\n  showSlides(slideIndex += n);\n} // Thumbnail image controls\n\n\nfunction currentSlide(n) {\n  showSlides(slideIndex = n);\n}\n\nfunction showSlides(n) {\n  var i;\n  var slides = document.getElementsByClassName(\"mySlides\");\n  var dots = document.getElementsByClassName(\"dot\"); // console.log(\"slides length\", slides.length);\n\n  if (n > slides.length) {\n    slideIndex = 1;\n  }\n\n  if (n < 1) {\n    slideIndex = slides.length;\n  }\n\n  for (i = 0; i < slides.length; i++) {\n    slides[i].style.display = \"none\";\n  }\n\n  for (i = 0; i < dots.length; i++) {\n    dots[i].className = dots[i].className.replace(\" active\", \"\");\n  }\n\n  slides[slideIndex - 1].style.display = \"block\";\n  dots[slideIndex - 1].className += \" active\";\n}\n\nvar modal_button_one = document.getElementById(\"modalOne\");\nvar modal_one = document.getElementById(\"modalContentOne\");\n\nmodal_button_one.onclick = function () {\n  modal_one.style.display = \"block\";\n};\n\nvar modal_button_two = document.getElementById(\"modalTwo\");\nvar modal_two = document.getElementById(\"modalContentTwo\");\n\nmodal_button_two.onclick = function () {\n  modal_two.style.display = \"block\";\n};\n\nvar span_one = document.getElementsByClassName(\"close\")[0];\n\nspan_one.onclick = function () {\n  modal_one.style.display = \"none\";\n};\n\nvar span_two = document.getElementsByClassName(\"close\")[1];\n\nspan_two.onclick = function () {\n  modal_two.style.display = \"none\";\n};\n\nwindow.onclick = function (event) {\n  if (event.target == modal_one) {\n    modal_one.style.display = \"none\";\n  }\n\n  if (event.target == modal_two) {\n    modal_two.style.display = \"none\";\n  }\n};\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/uiuc.png */ \"./assets/uiuc.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Your SCSS here. */\\nhtml {\\n  height: 100%;\\n}\\n\\n.link {\\n  color: #ff9ba3;\\n  font-weight: bold;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\nh2 {\\n  font-size: 40px;\\n}\\n\\nh3 {\\n  font-size: 20px;\\n}\\n\\nh4 {\\n  font-size: 16px;\\n}\\n\\n.align-center {\\n  text-align: center;\\n}\\n\\n.text-large {\\n  font-size: 20px;\\n  font-weight: bold;\\n}\\n\\n.text-content {\\n  font-size: 16px;\\n}\\n\\n.text-content.footer {\\n  font-size: 16px;\\n  position: relative;\\n  top: 54%;\\n  margin: auto 0%;\\n  align-items: center;\\n  padding: 0 auto;\\n}\\n\\nbody {\\n  display: inline;\\n  align-items: center;\\n  justify-content: flex;\\n  height: 100%;\\n  margin: 0;\\n  font-family: \\\"Sora\\\", sans-serif;\\n  height: 100%;\\n}\\n\\n.container {\\n  text-align: center;\\n  height: 100%;\\n  width: 100%;\\n  position: static;\\n}\\n\\n.section {\\n  padding: 100px;\\n  text-align: center;\\n  height: 95%;\\n}\\n\\n.academics {\\n  content: \\\"\\\";\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-attachment: fixed;\\n  background-size: cover;\\n}\\n\\n.academics-container {\\n  display: grid;\\n  grid-template-columns: 30% 70%;\\n  grid-template-rows: auto;\\n  grid-template-areas: \\\"interest-left interest-right\\\";\\n  width: 80%;\\n  position: relative;\\n  top: 30%;\\n  text-align: justify;\\n  margin: 0 auto;\\n}\\n\\n/* Experiences */\\n.experiences-container {\\n  display: grid;\\n  grid-template-columns: 33.33% 33.33% 33.33%;\\n  grid-template-rows: auto;\\n  grid-template-areas: \\\"experience-left experience-center experience-right\\\";\\n  width: 100%;\\n  height: 100%;\\n  position: relative;\\n  text-align: justify;\\n}\\n\\n.experience-left {\\n  top: 5%;\\n  position: relative;\\n  grid-area: \\\"experience-left\\\";\\n  margin: 0% 3%;\\n}\\n\\n.experience-center {\\n  top: 5%;\\n  position: relative;\\n  grid-area: \\\"experience-center\\\";\\n  margin: 0% 3%;\\n}\\n\\n.experience-right {\\n  top: 5%;\\n  position: relative;\\n  grid-area: \\\"experience-right\\\";\\n  margin: 0% 3%;\\n}\\n\\n.experience-logo {\\n  display: block;\\n  margin: 0% auto;\\n  width: 15%;\\n  height: 15%;\\n  -o-object-fit: contain;\\n     object-fit: contain;\\n}\\n\\n.text-content.experience {\\n  padding-top: 5%;\\n}\\n\\n/* Projects */\\n.caption {\\n  position: absolute;\\n  top: 45%;\\n}\\n\\n.container video {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  -o-object-fit: cover;\\n     object-fit: cover;\\n  z-index: 0;\\n  top: 0%;\\n  left: 0%;\\n  overflow: hidden;\\n}\\n\\n.container .caption {\\n  z-index: 1;\\n  position: relative;\\n  text-align: center;\\n  color: white;\\n  padding: 10px;\\n}\\n\\n.navbar {\\n  padding: 40px 0px;\\n  font-size: 30px;\\n  width: 100%;\\n  background: #555;\\n  color: #f1f1f1;\\n  overflow: hidden;\\n  table-layout: fixed;\\n  display: flex;\\n  justify-content: space-evenly;\\n  align-items: center;\\n  z-index: 1000;\\n  cursor: pointer;\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  -webkit-animation-name: enlarge;\\n          animation-name: enlarge;\\n  -webkit-animation-duration: 0.3s;\\n          animation-duration: 0.3s;\\n  -webkit-animation-timing-function: ease-out;\\n          animation-timing-function: ease-out;\\n  -webkit-animation-iteration-count: 1;\\n          animation-iteration-count: 1;\\n}\\n\\n.navbar-element {\\n  float: left;\\n  font-size: 20px;\\n  color: white;\\n  text-align: center;\\n  text-decoration: none;\\n  table-layout: fixed;\\n  -webkit-animation-name: enlargeElement;\\n          animation-name: enlargeElement;\\n  -webkit-animation-duration: 0.3s;\\n          animation-duration: 0.3s;\\n  -webkit-animation-timing-function: ease-out;\\n          animation-timing-function: ease-out;\\n  -webkit-animation-iteration-count: 1;\\n          animation-iteration-count: 1;\\n}\\n\\n.navbar-element:hover {\\n  font-weight: bold;\\n}\\n\\n.navbar.sticky {\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  padding: 20px 0px;\\n  -webkit-animation-name: shrink;\\n          animation-name: shrink;\\n  -webkit-animation-duration: 0.3s;\\n          animation-duration: 0.3s;\\n  -webkit-animation-timing-function: ease-out;\\n          animation-timing-function: ease-out;\\n  -webkit-animation-iteration-count: 1;\\n          animation-iteration-count: 1;\\n  font-size: 20px;\\n}\\n\\n.navbar-element.sticky {\\n  float: left;\\n  font-size: 16px;\\n  color: white;\\n  text-align: center;\\n  text-decoration: none;\\n  table-layout: fixed;\\n  -webkit-animation-name: shrinkElement;\\n          animation-name: shrinkElement;\\n  -webkit-animation-duration: 0.3s;\\n          animation-duration: 0.3s;\\n  -webkit-animation-timing-function: ease-out;\\n          animation-timing-function: ease-out;\\n  -webkit-animation-iteration-count: 1;\\n          animation-iteration-count: 1;\\n  font-size: 16px;\\n}\\n\\n.sticky + .section {\\n  padding-top: 1px;\\n}\\n\\n.projects-container {\\n  position: relative;\\n  align-items: center;\\n  width: 70%;\\n  margin: 0 auto;\\n  height: 100%;\\n}\\n\\n.contacts-container {\\n  align-items: center;\\n  padding: auto 0;\\n  top: 20%;\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  flex-wrap: wrap;\\n  justify-content: space-around;\\n  height: auto;\\n  width: 100%;\\n}\\n\\n.slideshow-container {\\n  top: 20%;\\n  max-width: 1000px;\\n  position: relative;\\n  margin: auto auto;\\n  align-items: center;\\n  z-index: 0;\\n  overflow: visible;\\n}\\n\\n.mySlides {\\n  display: none;\\n}\\n\\n.transition {\\n  width: 100%;\\n  max-width: 1000px;\\n  position: absolute;\\n  top: 40%;\\n  margin: 0 auto;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.prev,\\n.next {\\n  cursor: pointer;\\n  padding: 16px;\\n  color: white;\\n  font-weight: bold;\\n  font-size: 18px;\\n  border-radius: 0 3px 3px 0;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none;\\n  z-index: 1;\\n}\\n\\n/* On hover, add a black background color with a little bit see-through */\\n.prev:hover,\\n.next:hover {\\n  background-color: rgba(0, 0, 0, 0.8);\\n}\\n\\n/* Caption text */\\n.text {\\n  color: #f2f2f2;\\n  font-size: 15px;\\n  padding: 20px 0;\\n  position: absolute;\\n  top: 75%;\\n  width: 100%;\\n  text-align: center;\\n}\\n\\n/* Number text (1/3 etc) */\\n.numbertext {\\n  color: #f2f2f2;\\n  font-size: 12px;\\n  padding: 8px 12px;\\n  position: absolute;\\n  top: 0%;\\n}\\n\\n/* The dots/bullets/indicators */\\n.dot {\\n  cursor: pointer;\\n  height: 15px;\\n  width: 15px;\\n  margin: 0 2px;\\n  background-color: #bbb;\\n  border-radius: 50%;\\n  display: inline-block;\\n  transition: background-color 0.6s ease;\\n  bottom: 0%;\\n}\\n\\n.active,\\n.dot:hover {\\n  background-color: #717171;\\n}\\n\\n.fade {\\n  -webkit-animation-name: fade;\\n  -webkit-animation-duration: 1.5s;\\n  animation-name: fade;\\n  animation-duration: 1.5s;\\n}\\n\\n@-webkit-keyframes fade {\\n  from {\\n    opacity: 0.4;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@keyframes fade {\\n  from {\\n    opacity: 0.4;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n/* Interests*/\\n.interests-container {\\n  display: grid;\\n  grid-template-columns: 50%;\\n  grid-template-rows: auto;\\n  grid-template-areas: \\\"interest-left interest-right\\\";\\n  width: 100%;\\n  height: 100%;\\n  position: relative;\\n  text-align: justify;\\n}\\n\\n.interest-left {\\n  top: 10%;\\n  position: relative;\\n  grid-area: interest-left;\\n  margin: 0% 5%;\\n}\\n\\n.interest-right {\\n  top: 10%;\\n  position: relative;\\n  grid-area: interest-right;\\n  margin: 0% 5%;\\n}\\n\\n.modal {\\n  display: none;\\n  position: fixed;\\n  z-index: 1;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  background-color: black;\\n  background-color: rgba(0, 0, 0, 0.4);\\n}\\n\\n/* Modal Content/Box */\\n.modal-content {\\n  background-color: #fefefe;\\n  margin: 30% auto;\\n  padding: 20px;\\n  border: 1px solid #888;\\n  width: 80%;\\n  border-radius: 15px;\\n  overflow: scroll;\\n}\\n\\n.modal-content p {\\n  width: 90%;\\n  height: 100%;\\n  margin: 0 auto;\\n  padding: 20px;\\n}\\n\\n/* The Close Button */\\n.close {\\n  color: #aaa;\\n  float: right;\\n  font-size: 28px;\\n  font-weight: bold;\\n}\\n\\n.close:hover,\\n.close:focus {\\n  color: black;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\n/* Contacts */\\ndiv#contacts.section {\\n  padding: 100px 100px 0px 100px;\\n}\\n\\n.sns-links {\\n  width: 80%;\\n  text-align: center;\\n  list-style: none;\\n  margin: 0;\\n  padding: 5rem 0;\\n  display: table;\\n  flex-direction: row;\\n  justify-content: space-around;\\n  flex-wrap: wrap;\\n}\\n\\n.sns-links i {\\n  color: black;\\n}\\n\\n.sns-links i:visited {\\n  color: white;\\n}\\n\\n.sns-links i:hover {\\n  color: #ff9ba3;\\n}\\n\\n.sns {\\n  align-self: center;\\n  display: table-cell;\\n}\\n\\n.fa {\\n  font-size: 25px;\\n}\\n\\n.fas {\\n  font-size: 40px;\\n  text-align: center;\\n  width: 100%;\\n  margin: auto auto;\\n}\\n\\n.fas.academic {\\n  font-size: 60px;\\n}\\n\\n@-webkit-keyframes enlarge {\\n  0% {\\n    padding: 20px 0px;\\n  }\\n  100% {\\n    padding: 40px 0px;\\n  }\\n}\\n\\n@keyframes enlarge {\\n  0% {\\n    padding: 20px 0px;\\n  }\\n  100% {\\n    padding: 40px 0px;\\n  }\\n}\\n@-webkit-keyframes enlargeElement {\\n  0% {\\n    font-size: 16px;\\n  }\\n  100% {\\n    font-size: 20px;\\n  }\\n}\\n@keyframes enlargeElement {\\n  0% {\\n    font-size: 16px;\\n  }\\n  100% {\\n    font-size: 20px;\\n  }\\n}\\n@-webkit-keyframes shrink {\\n  0% {\\n    padding: 40px 0px;\\n  }\\n  100% {\\n    padding: 20px 0px;\\n  }\\n}\\n@keyframes shrink {\\n  0% {\\n    padding: 40px 0px;\\n  }\\n  100% {\\n    padding: 20px 0px;\\n  }\\n}\\n@-webkit-keyframes shrinkElement {\\n  0% {\\n    font-size: 20px;\\n  }\\n  100% {\\n    font-size: 16px;\\n  }\\n}\\n@keyframes shrinkElement {\\n  0% {\\n    font-size: 20px;\\n  }\\n  100% {\\n    font-size: 16px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./css/main.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./js/main.js */ \"./js/main.js?db67\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/container_video.mp4 */ \"./assets/container_video.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/samsung.png */ \"./assets/samsung.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/uiuclogo.png */ \"./assets/uiuclogo.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/sibel.png */ \"./assets/sibel.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/tradebot.png */ \"./assets/tradebot.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/hi2021.PNG */ \"./assets/hi2021.PNG\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/vrdk.jpg */ \"./assets/vrdk.jpg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar code = \"<!-- References\\n- https://stackoverflow.com/questions/20818881/use-video-as-background-for-div\\n- https://www.w3schools.com/howto/howto_js_sticky_header.asp\\n- https://stackoverflow.com/questions/3569329/javascript-to-make-the-page-jump-to-a-specific-location\\n- https://www.w3schools.com/howto/howto_js_slideshow.asp\\n- https://www.w3schools.com/howto/howto_css_modals.asp\\n-->\\n\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n    <meta charset=\\\"utf-8\\\" />\\n    <meta http-equiv=\\\"x-ua-compatible\\\" content=\\\"ie=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>Jihoon Kang's Personal Webside</title>\\n    <style>\\n        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@200&display=swap');\\n    </style>\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\\\">\\n    <script src=\\\"https://kit.fontawesome.com/37c2285728.js\\\" crossorigin=\\\"anonymous\\\"></script>\\n    <script type=\\\"text/javascript\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" defer></script>\\n</head>\\n\\n<body>\\n    <div class=\\\"container\\\" , id=\\\"home\\\">\\n        <video autoplay muted loop>\\n            <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" type=\\\"video/mp4\\\"/>\\n        </video>\\n        <div class=\\\"caption\\\">\\n            <h1>Hello, my name is Jihoon Kang</h1>\\n            <p>Software Developer, Data Scientist</p>\\n        </div>\\n        <div class=\\\"navbar\\\" id=\\\"sticky-navbar\\\">\\n            <div class=\\\"navbar-element\\\" id=\\\"click-home\\\">Home</div>\\n            <div class=\\\"navbar-element\\\" id=\\\"click-academics\\\">Academics</div>\\n            <div class=\\\"navbar-element\\\" id=\\\"click-experiences\\\">Experiences</div>\\n            <div class=\\\"navbar-element\\\" id=\\\"click-projects\\\">Projects</div>\\n            <div class=\\\"navbar-element\\\" id=\\\"click-interests\\\">Interests</div>\\n            <div class=\\\"navbar-element\\\" id=\\\"click-contacts\\\">Contacts</div>\\n        </div>\\n    </div>\\n\\n    <div class=\\\"section academics\\\" id=\\\"academics\\\">\\n        <h2>Academics</h2>\\n        <div class=\\\"academics-container\\\">\\n            <i class=\\\"fas academic fa-graduation-cap\\\"></i>\\n            <div class=\\\"text-large\\\">\\n                As the Class of 2022 at the University of Illinois at Urbana-Champaign,\\n                <br> I studied computer science and economics, minoring statistics.\\n                <br> Some of the major courses that I have taken include:\\n                <br> - Statistical Reinforcement Learning\\n                <br> - Applied Machine Learning\\n                <br> - Software Engineering I\\n                <br> - Algorithms & Models of Computation\\n            </div>\\n        </div>\\n    </div>\\n    <div class=\\\"section\\\" id=\\\"experiences\\\">\\n        <h2>Experiences</h2>\\n        <div class=\\\"experiences-container\\\">\\n            <div class=\\\"experience-left\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" class=\\\"experience-logo\\\"></img>\\n                <h3 class=\\\"align-center\\\">Samsung Electronics</h3>\\n                <h4 class=\\\"align-center\\\">June 2021 ~ August 2021</h4>\\n                <div class=\\\"text-content experience\\\">\\n                    As a software developer intern at Samsung Electronics, I developed and simulated robot simulation environment for reinforcement learning, implementing\\n                    <a href=\\\"http://www.mujoco.org/\\\" class=\\\"link\\\">MuJoCo</a> engine and\\n                    <a href=\\\"https://gym.openai.com/\\\" class=\\\"link\\\">OpenAI Gym</a>. With the developed custom environment, a 6-DoF robot agent was trained implemeting Proximal Policy Optimization algorithm and explored the feasibility of reinforcement\\n                    learning adaptation in factory manufacturing environment.\\n\\n                </div>\\n\\n            </div>\\n            <div class=\\\"experience-center\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" class=\\\"experience-logo\\\"></img>\\n                <h3 class=\\\"align-center\\\">University of Illinois College of Engineering</h3>\\n                <h4 class=\\\"align-center\\\">August 2020 ~ May 2021</h4>\\n                <div class=\\\"text-content experience\\\">\\n                    For two consecutive semesters, I have worked as a course assistant for\\n                    <a href=\\\"https://courses.engr.illinois.edu/cs225/fa2021/\\\" class=\\\"link\\\">CS 225: Data Structures</a> at the University of Illinois at Urbana-Champaign. As a course assistant, I have enhanced better understanding of data structures for\\n                    students using C++ during daily office hours and weekly discussing sessions. Some of the data structures covered in the class include stack & queue, heap, hash table, various tree structures, such as AVL tree, B-tree and K-d tree,\\n                    and more.\\n                </div>\\n            </div>\\n            <div class=\\\"experience-right\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" class=\\\"experience-logo\\\"></img>\\n                <h3 class=\\\"align-center\\\">Sibel Health</h3>\\n                <h4 class=\\\"align-center\\\">May 2020 ~ May 2021</h4>\\n                <div class=\\\"text-content experience\\\">\\n                    As a data analyst intern at\\n                    <a href=\\\"https://www.sibelhealth.com/\\\" class=\\\"link\\\">Sibel Health</a>, I conducted and assisted digital signal processing and data analysis based on the vital signals collecte from the integrated sensors system. I participated in multiple\\n                    projects, such as creating a Convolutional Neural Network model for digit recognition to decrease gold data extraction time, and developing a web-based interactive dashboard implementing Flask, providing interdepartmental assistance\\n                    by visualization of patients' vital signals and sensors' metadata.\\n                </div>\\n            </div>\\n\\n\\n        </div>\\n    </div>\\n\\n    <div class=\\\"section\\\" id=\\\"projects\\\">\\n        <h2>Projects</h2>\\n        <div class=\\\"projects-container\\\">\\n            <div class=\\\"slideshow-container\\\">\\n                <div class=\\\"mySlides fade\\\">\\n                    <div class=\\\"numbertext\\\">1 / 3</div>\\n                    <a href=\\\"https://github.com/jihoonkang0829/tradebot\\\">\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" style=\\\"width:100%\\\">\\n                    </a>\\n                    <div class=\\\"text\\\">\\n                        Tradebot\\n                    </div>\\n                </div>\\n\\n                <div class=\\\"mySlides fade\\\">\\n                    <div class=\\\"numbertext\\\">2 / 3</div>\\n                    <a href=\\\"https://github.com/jihoonkang0829/Discrimination_Prediction\\\">\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" style=\\\"width:100%\\\">\\n                    </a>\\n                    <div class=\\\"text\\\">\\n                        HackIllinois 2021\\n                    </div>\\n                </div>\\n\\n                <div class=\\\"mySlides fade\\\">\\n                    <div class=\\\"numbertext\\\">3 / 3</div>\\n                    <a href=\\\"https://devpost.com/software/data-mining-toolkit-for-vr-experiences\\\">\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" style=\\\"width:100%\\\">\\n                    </a>\\n                    <div class=\\\"text\\\">\\n                        HackIllinois 2020\\n                    </div>\\n                </div>\\n                <div class=\\\"transition\\\" id=\\\"transitionButtons\\\">\\n                    <div class=\\\"prev\\\" id=\\\"prev\\\">&#10094;</div>\\n                    <div class=\\\"next\\\" id=\\\"next\\\">&#10095;</div>\\n                </div>\\n                <br>\\n                <div style=\\\"text-align:center\\\">\\n                    <span class=\\\"dot\\\" onclick=\\\"currentSlide(1)\\\"></span>\\n                    <span class=\\\"dot\\\" onclick=\\\"currentSlide(2)\\\"></span>\\n                    <span class=\\\"dot\\\" onclick=\\\"currentSlide(3)\\\"></span>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n    <div class=\\\"section\\\" id=\\\"interests\\\">\\n        <h2>Interests</h2>\\n        <div class=\\\"interests-container\\\">\\n            <div class=\\\"interest-left\\\" id=\\\"left-col\\\">\\n                <i class=\\\"fas fa-project-diagram\\\"></i>\\n                <h3 class=\\\"align-center\\\">Machine Learning</h3>\\n                <div class=\\\"text-content\\\">\\n                    I am passionate and interested in machine learning, and possess various multiple academic, project, and industry experience in machine learning. I have taken basic machine learning courses, including applied machine learning, and machine learning in economics.\\n                    To further challenge myself, I am currently taking a graduate level course, titled <a href=\\\"https://nanjiang.cs.illinois.edu/cs542/\\\" class=\\\"link\\\">statistical reinforcement learning</a>. I have participated in multiple\\n                    hackathons and datathons, deriving critical and creative application of machine learning to real life problems. The projects include\\n                    <a id=\\\"modalOne\\\" class=\\\"link\\\">identifying the native language by English accent</a> and\\n                    <a id=\\\"modalTwo\\\" class=\\\"link\\\">predicting occurences of hate crimes based on deep learning</a>.\\n                    <div id=\\\"modalContentOne\\\" class=\\\"modal\\\">\\n                        <div class=\\\"modal-content\\\">\\n                            <span class=\\\"close\\\" id=\\\"close-one\\\">&times;</span>\\n                            <p>Minor language speakers are often underrepresented in the era of technology, where the voice assistant services enrich our lives.\\n                                <br>In this project, our team constructed a deep learning model to identify the native language of the speakers based on their English accent, so their voice can be better heard.\\n                                <br>\\n                                <br> To take a glance of this project, please watch this summary video:\\n                                <a href=\\\"https://youtu.be/s_NgP9BFSSg\\\" class=\\\"link\\\">YouTube</a>\\n                            </p>\\n                        </div>\\n                    </div>\\n\\n                    <div id=\\\"modalContentTwo\\\" class=\\\"modal\\\">\\n                        <div class=\\\"modal-content\\\">\\n                            <span class=\\\"close\\\" id=\\\"close-two\\\">&times;</span>\\n                            <p> With the emergence of the novel coronavirus, our society has witnessed soar in racial discrimination and hate crime since last year. We propose a model to predict occurences of hate crimes to contribute to the efficient prevention\\n                                of the hate crimes.\\n                                <br>We first collect racial discrimination-related event instances with New York Times API, especially the date, location and the respective occurences of the crimes.\\n                                <br>Based on the data collected, we train a deep learning model to predict occurences and locations of future possible discrimanation-related events.\\n                                <br>We create a recurrent model that predicts the following week's hate crime occurences in state level, based on the previous 4 weeks' occurences by states.\\n                                <br>\\n                                <br> To take a glance of this project, please watch this summary video:\\n                                <a href=\\\"https://youtu.be/vVCEHkP2WUQ\\\" class=\\\"link\\\">YouTube</a>\\n                            </p>\\n                        </div>\\n                    </div>\\n                </div>\\n            </div>\\n            <div class=\\\"interest-right\\\" id=\\\"right-col\\\">\\n                <i class=\\\"fas fa-laptop-code\\\"></i>\\n                <h3 class=\\\"align-center\\\">Coding</h3>\\n                <div class=\\\"text-content\\\">\\n                    As a computer science major, coding in general is my interest. Apart from academic works, I spend time on personal and team projects, such as the ones described in the Projects section, and participate in competitive coding challenges as well. I am always\\n                    intersted in sharing my knowledge in coding and programming as well, and have spent years as a team leader and a president of\\n                    <a href=\\\"https://illinois.campuslabs.com/engage/organization/codable\\\" class=\\\"link\\\">Codable</a> , a registered student organization at the University of Illinois.\\n                </div>\\n\\n            </div>\\n        </div>\\n    </div>\\n\\n    <div class=\\\"section\\\" id=\\\"contacts\\\">\\n        <h2>Contacts</h2>\\n        <div class=\\\"contacts-container\\\">\\n            <h3>\\n                If you are interested in connecting with or learning more about me, please contact me via:\\n            </h3>\\n            <div class=\\\"sns-links\\\">\\n                <div class=\\\"sns\\\">\\n                    <a href=\\\"https://github.com/jihoonkang0829\\\">\\n                        <i class=\\\"fa fa-github\\\" aria-hidden=\\\"true\\\"></i>\\n                    </a>\\n                </div>\\n                <div class=\\\"sns\\\">\\n                    <a href=\\\"https://github.com/jihoonkang0829\\\">\\n                        <i class=\\\"fa fa-linkedin\\\" aria-hidden=\\\"true\\\"></i>\\n                    </a>\\n                </div>\\n                <div class=\\\"sns\\\">\\n                    <a href=\\\"https://www.facebook.com/jihoon.kang.5686/\\\">\\n                        <i class=\\\"fa fa-facebook\\\" aria-hidden=\\\"true\\\"></i>\\n                    </a>\\n                </div>\\n                <div class=\\\"sns\\\">\\n                    <a href=\\\"mailto:jihoonk2@illinois.edu\\\">\\n                        <i class=\\\"fa fa-google\\\" aria-hidden=\\\"true\\\"></i>\\n                    </a>\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"text-content footer\\\">\\n            This webpage was created as part of a project for\\n            <a href=\\\"https://uiuc-web-programming.gitlab.io/fa21/\\\" class=\\\"link\\\">\\n            CS 498: The Art of Web Programming\\n            </a> at the University of Illinois at Urbana-Champaign,\\n            <br>implementing HTML, CSS and vanilla JavaScript, without any usage of additional frameworks.\\n        </div>\\n    </div>\\n</body>\\n\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./css/main.scss?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./js/main.js?db67":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e996ac13c4c39331e964.js\";\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./assets/container_video.mp4":
/*!************************************!*\
  !*** ./assets/container_video.mp4 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"eaccbe430a7516603369.mp4\";\n\n//# sourceURL=webpack:///./assets/container_video.mp4?");

/***/ }),

/***/ "./assets/hi2021.PNG":
/*!***************************!*\
  !*** ./assets/hi2021.PNG ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8cf016782b8b3d2c58c8.PNG\";\n\n//# sourceURL=webpack:///./assets/hi2021.PNG?");

/***/ }),

/***/ "./assets/samsung.png":
/*!****************************!*\
  !*** ./assets/samsung.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f8fda84dae3bb79d52dc.png\";\n\n//# sourceURL=webpack:///./assets/samsung.png?");

/***/ }),

/***/ "./assets/sibel.png":
/*!**************************!*\
  !*** ./assets/sibel.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fc054d858cbe71f7f09f.png\";\n\n//# sourceURL=webpack:///./assets/sibel.png?");

/***/ }),

/***/ "./assets/tradebot.png":
/*!*****************************!*\
  !*** ./assets/tradebot.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0d56698ad8b8b2d04ece.png\";\n\n//# sourceURL=webpack:///./assets/tradebot.png?");

/***/ }),

/***/ "./assets/uiuc.png":
/*!*************************!*\
  !*** ./assets/uiuc.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"efc5e6550d9609ec98c0.png\";\n\n//# sourceURL=webpack:///./assets/uiuc.png?");

/***/ }),

/***/ "./assets/uiuclogo.png":
/*!*****************************!*\
  !*** ./assets/uiuclogo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"743742b92212da491154.png\";\n\n//# sourceURL=webpack:///./assets/uiuclogo.png?");

/***/ }),

/***/ "./assets/vrdk.jpg":
/*!*************************!*\
  !*** ./assets/vrdk.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"88afc61da860ed2403f3.jpg\";\n\n//# sourceURL=webpack:///./assets/vrdk.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;