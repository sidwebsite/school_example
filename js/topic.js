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

/***/ "./js/topic.js":
/*!*********************!*\
  !*** ./js/topic.js ***!
  \*********************/
/***/ (() => {

eval(";(function(){\r\n    // 編輯介面切換\r\n    const topicInner = document.querySelectorAll('.topic-inner');\r\n    const topicEditInner = document.querySelectorAll('.topic-edit-inner');\r\n    const topicEditBtn = document.querySelectorAll('.topic-edit-btn');\r\n    const topicEditSaveBtn = document.querySelectorAll('.topic-edit-save-btn');\r\n\r\n    topicEditBtn.forEach((item,index) => {\r\n        item.addEventListener('click', () => {\r\n            topicInner[index].classList.add('d-none');\r\n            topicEditInner[index].classList.remove('d-none');\r\n            topicEditInner[index].classList.add('topic-show');\r\n        })\r\n    })\r\n    topicEditSaveBtn.forEach((item,index) => {\r\n        item.addEventListener('click', () => {\r\n            topicInner[index].classList.remove('d-none');\r\n            topicInner[index].classList.add('topic-show');\r\n            topicEditInner[index].classList.add('d-none');\r\n        })\r\n    })\r\n    // textarea auto height\r\n    const textarea = document.querySelectorAll('.textarea');\r\n    const topicContent = document.querySelectorAll('.topic-content article');\r\n    let textareaHeight = [];\r\n    topicContent.forEach(item => {\r\n        textareaHeight.push(item.scrollHeight);\r\n    })\r\n    textarea.forEach((item, index) => {    \r\n        item.style.height = `${textareaHeight[index] + 15}px`;\r\n        item.addEventListener('input', () => {\r\n            item.style.cssText = 'overflow-y: hidden';\r\n            item.style.height = 'auto';\r\n            item.style.height = `${item.scrollHeight}px`;\r\n        })\r\n    })\r\n    // 題目類型切換\r\n    const topicEditRadio = document.querySelectorAll('.topic-edit-radio');\r\n    topicEditRadio.forEach(item => {\r\n        item.querySelectorAll('input[type=\"radio\"]').forEach(item => {\r\n            item.addEventListener('change', e => {                \r\n                const idName = e.target.dataset.id;\r\n                switch (idName.slice(0,idName.length-2)) {\r\n                    case 'topic-selection':\r\n                        document.querySelector('#' + idName).nextElementSibling.classList.add('d-none')\r\n                        document.querySelector('#' + idName).classList.remove('d-none')\r\n                        document.querySelector('#' + idName).classList.add('topic-show')\r\n                        break;\r\n                    case 'topic-true-false':\r\n                        document.querySelector('#' + idName).previousElementSibling.classList.add('d-none')\r\n                        document.querySelector('#' + idName).classList.remove('d-none')\r\n                        document.querySelector('#' + idName).classList.add('topic-show')\r\n                        break;\r\n                }\r\n            })\r\n        })\r\n    })\r\n})()\n\n//# sourceURL=webpack:///./js/topic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/topic.js"]();
/******/ 	
/******/ })()
;