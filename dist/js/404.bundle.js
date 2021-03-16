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

eval("const menuItem = document.querySelectorAll(\".menu_item\");\nconst modalMenu = document.querySelector(\".menu_mobile\");\nlet hash = window.location.hash;\n\n/*=======================================\n  openNav(): Open the nav on mbile view\n=========================================*/\nfunction openNav() {\n  const toggleBtn = document.querySelector(\".menu_toggle_btn\");\n\n  toggleBtn.addEventListener(\"click\", () => {\n    toggleBtn.classList.add(\"active\");\n    modalMenu.classList.add(\"opened\");\n\n    closeNav();\n  })\n};\n\n/*=======================================\n  closeMenuModal(): Close the menu modal on mbile view\n=========================================*/\nfunction closeMenuModal() {\n  const toggleBtn = document.querySelector(\".menu_toggle_btn\");\n  const toggleBtnClass = toggleBtn.getAttribute(\"class\").split(' ');\n  const lastClassName = toggleBtnClass[toggleBtnClass.length -1];\n\n  // If the modal menu is open\n  if (lastClassName === \"active\" ) {\n    toggleBtn.classList.remove(\"active\");\n    modalMenu.classList.remove(\"opened\");\n\n    openNav();\n  };\n};\n\n/*=======================================\n  closeNav(): Close the menu on mbile view\n=========================================*/\nfunction closeNav() {\n  const toggleBtn = document.querySelector(\".menu_toggle_btn.active\");\n\n  // Close the modal when the hamburger is clicked\n  toggleBtn.addEventListener(\"click\", () => {\n    closeMenuModal();\n  });\n}\n\n/*=======================================\n  scroll(): Scroll to the id section when a menu is clicked\n=========================================*/\nfunction scroll(hash) {\n  // If the url contains a hashtag\n  if(hash){\n    const HashOffset = $(hash).offset().top - 50;\n    jQuery(\"html,body\").animate({\n      scrollTop: HashOffset\n    }, 500);\n  };\n};\n\n/*=======================================\n  Initialize the settings\n=========================================*/\nopenNav();\nscroll(hash);\n\n//  Scroll to the section when a menu link is clicked\nmenuItem.forEach(item => {\n  item.addEventListener(\"click\", event => {\n    var urlId = item.getAttribute(\"href\").split(\"#\");\n    hash = \"#\" + urlId[1];\n\n    scroll(hash);\n    closeMenuModal();\n  });\n});\n\n// Change the hamburger menu colour on scroll\nScrollTrigger.create({\n  trigger: \".sec_top\",\n  start: \"bottom 10%\",\n  end: 99999,\n  toggleClass: {targets: \".menu_toggle_btn\", className: \"scrolled\"},\n});\n\n\n//# sourceURL=webpack://webstaffing_demo/./src/scripts/common/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/common/app.js"]();
/******/ 	
/******/ })()
;