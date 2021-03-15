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

/***/ "./src/scripts/common/app.js":
/*!***********************************!*\
  !*** ./src/scripts/common/app.js ***!
  \***********************************/
/***/ (() => {

eval("const menuItem = document.querySelectorAll(\".menu_item\");\nconst modalMenu = document.querySelector(\".menu_mobile\");\nlet hash = window.location.hash;\n\n/*=======================================\n  openNav(): Open the nav on mbile view\n=========================================*/\nfunction openNav() {\n  const toggleBtn = document.querySelector(\".menu_toggle_btn\");\n\n  toggleBtn.addEventListener(\"click\", () => {\n    toggleBtn.classList.add(\"active\");\n    modalMenu.classList.add(\"opened\");\n\n    closeNav();\n  })\n};\n\n/*=======================================\n  closeMenuModal(): Close the menu modal on mbile view\n=========================================*/\nfunction closeMenuModal() {\n  const toggleBtn = document.querySelector(\".menu_toggle_btn\");\n  const toggleBtnClass = toggleBtn.getAttribute(\"class\").split(' ');\n  const lastClassName = toggleBtnClass[toggleBtnClass.length -1];\n\n  // If the modal menu is open\n  if (lastClassName === \"active\" ) {\n    toggleBtn.classList.remove(\"active\");\n    modalMenu.classList.remove(\"opened\");\n\n    openNav();\n  };\n};\n\n/*=======================================\n  closeNav(): Close the menu on mbile view\n=========================================*/\nfunction closeNav() {\n  const toggleBtn = document.querySelector(\".menu_toggle_btn.active\");\n\n  // Close the modal when the hamburger is clicked\n  toggleBtn.addEventListener(\"click\", () => {\n    closeMenuModal();\n  });\n}\n\n/*=======================================\n  scroll(): Scroll to the id section when a menu is clicked\n=========================================*/\nfunction scroll(hash) {\n  // If the url contains a hashtag\n  if(hash){\n    const HashOffset = $(hash).offset().top - 50;\n    jQuery(\"html,body\").animate({\n      scrollTop: HashOffset\n    }, 500);\n  };\n};\n\n/*=======================================\n  Initialize the settings\n=========================================*/\nopenNav();\nscroll(hash);\n\n//  Scroll to the section when a menu link is clicked\nmenuItem.forEach(item => {\n  item.addEventListener(\"click\", event => {\n    var urlId = item.getAttribute(\"href\").split(\"#\");\n    hash = \"#\" + urlId[1];\n\n    scroll(hash);\n    closeMenuModal();\n  });\n});\n\n\n//# sourceURL=webpack://webstaffing_demo/./src/scripts/common/app.js?");

/***/ }),

/***/ "./src/scripts/common/scroll_anime.js":
/*!********************************************!*\
  !*** ./src/scripts/common/scroll_anime.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"revealText\": () => (/* binding */ revealText),\n/* harmony export */   \"revealImage\": () => (/* binding */ revealImage),\n/* harmony export */   \"animateSlogan\": () => (/* binding */ animateSlogan)\n/* harmony export */ });\n/*=======================================\n  revealText(): Show text blocks\n=========================================*/\nfunction revealText () {\n  const sectionsText = gsap.utils.toArray('.anim_text');\n\n  sectionsText.forEach((section, i) => {\n    const anim = gsap.fromTo(section, {autoAlpha: 0, y: 50}, {autoAlpha: 1, y: 0, duration: 1});\n\n      ScrollTrigger.create ({\n        trigger: section,\n        start: \"top 90%\",\n        animation: anim,\n        }\n    );\n  });\n}\n\n/*=======================================\n  revealImage(): Show images\n=========================================*/\nfunction revealImage () {\n  const sectionsImg = gsap.utils.toArray('.anim_img_mask');\n\n  sectionsImg.forEach((section, i) => {\n    const anim = gsap.fromTo(section, {x: 0}, {x: '100%', duration: 1});\n\n      ScrollTrigger.create ({\n        trigger: section,\n        start: \"top 80%\",\n        animation: anim,\n        }\n    );\n  });\n}\n\n/*=======================================\n  animateSlogan(): Change the slogan colour\n=========================================*/\nfunction animateSlogan() {\n  gsap.to(\".anim_color .st0\", {\n    fill: \"#9ad9ff\",\n    duration: 1,\n    scrollTrigger: {\n      trigger: \".block_members\",\n      start: \"bottom center\",\n      end: \"bottom center\",\n      scrub: true\n    }\n  });\n}\n\n\n//# sourceURL=webpack://webstaffing_demo/./src/scripts/common/scroll_anime.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/app */ \"./src/scripts/common/app.js\");\n/* harmony import */ var _common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_scroll_anime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/scroll_anime */ \"./src/scripts/common/scroll_anime.js\");\n\n\n\n// Scroll animations\n(0,_common_scroll_anime__WEBPACK_IMPORTED_MODULE_1__.revealText)();\n(0,_common_scroll_anime__WEBPACK_IMPORTED_MODULE_1__.revealImage)();\n(0,_common_scroll_anime__WEBPACK_IMPORTED_MODULE_1__.animateSlogan)();\n\n\n//# sourceURL=webpack://webstaffing_demo/./src/scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;