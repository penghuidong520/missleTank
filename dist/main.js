/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let canvasEl = document.getElementById('game-canvas');\n  canvasEl.width = \"1000\";\n  canvasEl.height = \"600\";\n  canvasEl = canvasEl.getContext('2d');\n  const gameBase = new Game(canvasEl);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLDZDQUFELENBQXBCOztBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2hELElBQUlDLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQWY7RUFDQUQsUUFBUSxDQUFDRSxLQUFULEdBQWlCLE1BQWpCO0VBQ0FGLFFBQVEsQ0FBQ0csTUFBVCxHQUFrQixLQUFsQjtFQUNBSCxRQUFRLEdBQUdBLFFBQVEsQ0FBQ0ksVUFBVCxDQUFvQixJQUFwQixDQUFYO0VBRUEsTUFBTUMsUUFBUSxHQUFHLElBQUlULElBQUosQ0FBU0ksUUFBVCxDQUFqQjtBQUVILENBUkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc190YW5rcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL3NjcmlwdHMvZ2FtZScpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgbGV0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY2FudmFzJyk7XG4gICAgY2FudmFzRWwud2lkdGggPSBcIjEwMDBcIjtcbiAgICBjYW52YXNFbC5oZWlnaHQgPSBcIjYwMFwiO1xuICAgIGNhbnZhc0VsID0gY2FudmFzRWwuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBcbiAgICBjb25zdCBnYW1lQmFzZSA9IG5ldyBHYW1lKGNhbnZhc0VsKTtcblxufSkiXSwibmFtZXMiOlsiR2FtZSIsInJlcXVpcmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJnZXRDb250ZXh0IiwiZ2FtZUJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Platform = __webpack_require__(/*! ./platform */ \"./src/scripts/platform.js\");\n\nconst Tank = __webpack_require__(/*! ./tank */ \"./src/scripts/tank.js\");\n\nCONSTANTS = {\n  DIM_X: 1000,\n  DIM_Y: 600,\n  COLOR: 'lightblue'\n};\n\nclass Game {\n  constructor(ctx) {\n    this.background(ctx);\n    this.ground = new Platform(ctx, {\n      width: CONSTANTS.DIM_X,\n      height: CONSTANTS.DIM_Y\n    });\n    this.tank = new Tank(ctx);\n    this.tank.drawTank(this.ground.width / 2, this.ground.height);\n  }\n\n  background(ctx) {\n    ctx.fillStyle = CONSTANTS.COLOR;\n    ctx.fillRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n  }\n\n}\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyw2Q0FBRCxDQUF4Qjs7QUFDQSxNQUFNQyxJQUFJLEdBQUdELG1CQUFPLENBQUMscUNBQUQsQ0FBcEI7O0FBRUFFLFNBQVMsR0FBRztFQUNSQyxLQUFLLEVBQUcsSUFEQTtFQUVSQyxLQUFLLEVBQUcsR0FGQTtFQUdSQyxLQUFLLEVBQUc7QUFIQSxDQUFaOztBQU1BLE1BQU1DLElBQU4sQ0FBVztFQUVQQyxXQUFXLENBQUVDLEdBQUYsRUFBTztJQUNkLEtBQUtDLFVBQUwsQ0FBZ0JELEdBQWhCO0lBQ0EsS0FBS0UsTUFBTCxHQUFjLElBQUlYLFFBQUosQ0FBYVMsR0FBYixFQUFrQjtNQUFDRyxLQUFLLEVBQUVULFNBQVMsQ0FBQ0MsS0FBbEI7TUFBeUJTLE1BQU0sRUFBRVYsU0FBUyxDQUFDRTtJQUEzQyxDQUFsQixDQUFkO0lBQ0EsS0FBS1MsSUFBTCxHQUFZLElBQUlaLElBQUosQ0FBU08sR0FBVCxDQUFaO0lBQ0EsS0FBS0ssSUFBTCxDQUFVQyxRQUFWLENBQW1CLEtBQUtKLE1BQUwsQ0FBWUMsS0FBWixHQUFrQixDQUFyQyxFQUF3QyxLQUFLRCxNQUFMLENBQVlFLE1BQXBEO0VBQ0g7O0VBRURILFVBQVUsQ0FBQ0QsR0FBRCxFQUFNO0lBQ1pBLEdBQUcsQ0FBQ08sU0FBSixHQUFnQmIsU0FBUyxDQUFDRyxLQUExQjtJQUNBRyxHQUFHLENBQUNRLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CZCxTQUFTLENBQUNDLEtBQTdCLEVBQW9DRCxTQUFTLENBQUNFLEtBQTlDO0VBQ0g7O0FBWk07O0FBZ0JYYSxNQUFNLENBQUNDLE9BQVAsR0FBaUJaLElBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfdGFua3MvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5jb25zdCBUYW5rID0gcmVxdWlyZSgnLi90YW5rJyk7XG5cbkNPTlNUQU5UUyA9IHtcbiAgICBESU1fWCA6IDEwMDAsXG4gICAgRElNX1kgOiA2MDAsXG4gICAgQ09MT1IgOiAnbGlnaHRibHVlJ1xufVxuXG5jbGFzcyBHYW1lIHtcblxuICAgIGNvbnN0cnVjdG9yIChjdHgpIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kKGN0eCk7XG4gICAgICAgIHRoaXMuZ3JvdW5kID0gbmV3IFBsYXRmb3JtKGN0eCwge3dpZHRoOiBDT05TVEFOVFMuRElNX1gsIGhlaWdodDogQ09OU1RBTlRTLkRJTV9ZfSk7XG4gICAgICAgIHRoaXMudGFuayA9IG5ldyBUYW5rKGN0eCk7XG4gICAgICAgIHRoaXMudGFuay5kcmF3VGFuayh0aGlzLmdyb3VuZC53aWR0aC8yLCB0aGlzLmdyb3VuZC5oZWlnaHQpO1xuICAgIH1cblxuICAgIGJhY2tncm91bmQoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBDT05TVEFOVFMuQ09MT1I7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBDT05TVEFOVFMuRElNX1gsIENPTlNUQU5UUy5ESU1fWSk7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiXSwibmFtZXMiOlsiUGxhdGZvcm0iLCJyZXF1aXJlIiwiVGFuayIsIkNPTlNUQU5UUyIsIkRJTV9YIiwiRElNX1kiLCJDT0xPUiIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImN0eCIsImJhY2tncm91bmQiLCJncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsInRhbmsiLCJkcmF3VGFuayIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/platform.js":
/*!*********************************!*\
  !*** ./src/scripts/platform.js ***!
  \*********************************/
/***/ (function(module) {

eval("DEFAULTS = {\n  groundColor: 'lightgreen'\n};\n\nclass PlatForm {\n  constructor(ctx, dimension) {\n    this.ctx = ctx;\n    this.width = dimension.width; // this.height : surface of the platform\n\n    this.height = dimension.height - dimension.height / 5;\n    this.creatPlatorm(dimension.width, dimension.height);\n  }\n\n  creatPlatorm(width, height) {\n    this.ctx.fillStyle = DEFAULTS.groundColor;\n    this.ctx.fillRect(0, height, width, -height / 5);\n  }\n\n}\n\nmodule.exports = PlatForm;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF0Zm9ybS5qcy5qcyIsIm5hbWVzIjpbIkRFRkFVTFRTIiwiZ3JvdW5kQ29sb3IiLCJQbGF0Rm9ybSIsImNvbnN0cnVjdG9yIiwiY3R4IiwiZGltZW5zaW9uIiwid2lkdGgiLCJoZWlnaHQiLCJjcmVhdFBsYXRvcm0iLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3RhbmtzLy4vc3JjL3NjcmlwdHMvcGxhdGZvcm0uanM/ODZkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJERUZBVUxUUyA9IHtcbiAgICBncm91bmRDb2xvciA6ICdsaWdodGdyZWVuJ1xufVxuXG5jbGFzcyBQbGF0Rm9ybSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBkaW1lbnNpb24pIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMud2lkdGggPSBkaW1lbnNpb24ud2lkdGg7XG4gICAgICAgIC8vIHRoaXMuaGVpZ2h0IDogc3VyZmFjZSBvZiB0aGUgcGxhdGZvcm1cbiAgICAgICAgdGhpcy5oZWlnaHQgPSBkaW1lbnNpb24uaGVpZ2h0IC0gKGRpbWVuc2lvbi5oZWlnaHQgLyA1KTtcbiAgICAgICAgdGhpcy5jcmVhdFBsYXRvcm0oZGltZW5zaW9uLndpZHRoLCBkaW1lbnNpb24uaGVpZ2h0KTtcbiAgICB9XG4gICAgXG4gICAgY3JlYXRQbGF0b3JtKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gREVGQVVMVFMuZ3JvdW5kQ29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIGhlaWdodCwgd2lkdGgsIC1oZWlnaHQvNSk7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxhdEZvcm07Il0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxHQUFHO0VBQ1BDLFdBQVcsRUFBRztBQURQLENBQVg7O0FBSUEsTUFBTUMsUUFBTixDQUFlO0VBQ1hDLFdBQVcsQ0FBQ0MsR0FBRCxFQUFNQyxTQUFOLEVBQWlCO0lBQ3hCLEtBQUtELEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtFLEtBQUwsR0FBYUQsU0FBUyxDQUFDQyxLQUF2QixDQUZ3QixDQUd4Qjs7SUFDQSxLQUFLQyxNQUFMLEdBQWNGLFNBQVMsQ0FBQ0UsTUFBVixHQUFvQkYsU0FBUyxDQUFDRSxNQUFWLEdBQW1CLENBQXJEO0lBQ0EsS0FBS0MsWUFBTCxDQUFrQkgsU0FBUyxDQUFDQyxLQUE1QixFQUFtQ0QsU0FBUyxDQUFDRSxNQUE3QztFQUNIOztFQUVEQyxZQUFZLENBQUNGLEtBQUQsRUFBUUMsTUFBUixFQUFnQjtJQUN4QixLQUFLSCxHQUFMLENBQVNLLFNBQVQsR0FBcUJULFFBQVEsQ0FBQ0MsV0FBOUI7SUFDQSxLQUFLRyxHQUFMLENBQVNNLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUJILE1BQXJCLEVBQTZCRCxLQUE3QixFQUFvQyxDQUFDQyxNQUFELEdBQVEsQ0FBNUM7RUFDSDs7QUFaVTs7QUFnQmZJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlYsUUFBakIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/platform.js\n");

/***/ }),

/***/ "./src/scripts/tank.js":
/*!*****************************!*\
  !*** ./src/scripts/tank.js ***!
  \*****************************/
/***/ (function(module) {

eval("class Tank {\n  constructor(ctx) {\n    this.ctx = ctx;\n  }\n\n  drawTank(x_pos, y_pos) {\n    this.ctx.fillStyle = 'red';\n    this.ctx.fillRect(x_pos, y_pos, 50, -50);\n  }\n\n}\n\nmodule.exports = Tank;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90YW5rLmpzLmpzIiwibmFtZXMiOlsiVGFuayIsImNvbnN0cnVjdG9yIiwiY3R4IiwiZHJhd1RhbmsiLCJ4X3BvcyIsInlfcG9zIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc190YW5rcy8uL3NyYy9zY3JpcHRzL3RhbmsuanM/ZmM3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIFRhbmsge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB9XG5cbiAgICBkcmF3VGFuayh4X3BvcywgeV9wb3MpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHhfcG9zLCB5X3BvcywgNTAsIC01MCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRhbms7Il0sIm1hcHBpbmdzIjoiQUFDQSxNQUFNQSxJQUFOLENBQVc7RUFDUEMsV0FBVyxDQUFDQyxHQUFELEVBQU07SUFDYixLQUFLQSxHQUFMLEdBQVdBLEdBQVg7RUFDSDs7RUFFREMsUUFBUSxDQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBZTtJQUNuQixLQUFLSCxHQUFMLENBQVNJLFNBQVQsR0FBcUIsS0FBckI7SUFDQSxLQUFLSixHQUFMLENBQVNLLFFBQVQsQ0FBa0JILEtBQWxCLEVBQXlCQyxLQUF6QixFQUFnQyxFQUFoQyxFQUFvQyxDQUFDLEVBQXJDO0VBQ0g7O0FBUk07O0FBV1hHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlQsSUFBakIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/tank.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc190YW5rcy8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;