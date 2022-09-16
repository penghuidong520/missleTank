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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n// const Tank = require('./scripts/tank');\n\n\nconst CONSTANTS = __webpack_require__(/*! ./scripts/constants */ \"./src/scripts/constants.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let canvasEl = document.getElementById('game-canvas');\n  canvasEl.width = CONSTANTS.DIM_X;\n  canvasEl.height = CONSTANTS.DIM_Y;\n  canvasEl = canvasEl.getContext('2d');\n  const gameBase = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvasEl); // console.log(gameBase.tank.move);\n\n  document.addEventListener('keydown', e => {\n    let k = '';\n\n    if (e.key === 'd') {\n      k = 'd';\n    }\n\n    if (e.key === 'a') {\n      k = 'a';\n    }\n\n    gameBase.animate.bind(gameBase)(k);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUNBLE1BQU1DLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyx1REFBRCxDQUF6Qjs7QUFHQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsTUFBTTtFQUNoRCxJQUFJQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixhQUF4QixDQUFmO0VBQ0FELFFBQVEsQ0FBQ0UsS0FBVCxHQUFpQk4sU0FBUyxDQUFDTyxLQUEzQjtFQUNBSCxRQUFRLENBQUNJLE1BQVQsR0FBa0JSLFNBQVMsQ0FBQ1MsS0FBNUI7RUFDQUwsUUFBUSxHQUFHQSxRQUFRLENBQUNNLFVBQVQsQ0FBb0IsSUFBcEIsQ0FBWDtFQUVBLE1BQU1DLFFBQVEsR0FBRyxJQUFJWixxREFBSixDQUFTSyxRQUFULENBQWpCLENBTmdELENBT2hEOztFQUNBRixRQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXNDUyxDQUFELElBQU87SUFDeEMsSUFBSUMsQ0FBQyxHQUFHLEVBQVI7O0lBQ0EsSUFBSUQsQ0FBQyxDQUFDRSxHQUFGLEtBQVUsR0FBZCxFQUFtQjtNQUNmRCxDQUFDLEdBQUcsR0FBSjtJQUNIOztJQUNELElBQUlELENBQUMsQ0FBQ0UsR0FBRixLQUFVLEdBQWQsRUFBbUI7TUFDZkQsQ0FBQyxHQUFHLEdBQUo7SUFDSDs7SUFDREYsUUFBUSxDQUFDSSxPQUFULENBQWlCQyxJQUFqQixDQUFzQkwsUUFBdEIsRUFBZ0NFLENBQWhDO0VBQ0gsQ0FURDtBQVdILENBbkJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfdGFua3MvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBUYW5rID0gcmVxdWlyZSgnLi9zY3JpcHRzL3RhbmsnKTtcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJ1xuY29uc3QgQ09OU1RBTlRTID0gcmVxdWlyZSgnLi9zY3JpcHRzL2NvbnN0YW50cycpO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBsZXQgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcbiAgICBjYW52YXNFbC53aWR0aCA9IENPTlNUQU5UUy5ESU1fWDtcbiAgICBjYW52YXNFbC5oZWlnaHQgPSBDT05TVEFOVFMuRElNX1k7XG4gICAgY2FudmFzRWwgPSBjYW52YXNFbC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIFxuICAgIGNvbnN0IGdhbWVCYXNlID0gbmV3IEdhbWUoY2FudmFzRWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKGdhbWVCYXNlLnRhbmsubW92ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgIGxldCBrID0gJyc7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ2QnKSB7XG4gICAgICAgICAgICBrID0gJ2QnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ2EnKSB7XG4gICAgICAgICAgICBrID0gJ2EnO1xuICAgICAgICB9XG4gICAgICAgIGdhbWVCYXNlLmFuaW1hdGUuYmluZChnYW1lQmFzZSkoayk7XG4gICAgfSlcbiAgICBcbn0pIl0sIm5hbWVzIjpbIkdhbWUiLCJDT05TVEFOVFMiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWwiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiRElNX1giLCJoZWlnaHQiLCJESU1fWSIsImdldENvbnRleHQiLCJnYW1lQmFzZSIsImUiLCJrIiwia2V5IiwiYW5pbWF0ZSIsImJpbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/constants.js":
/*!**********************************!*\
  !*** ./src/scripts/constants.js ***!
  \**********************************/
/***/ (function(module) {

eval("module.exports = CONSTANTS = {\n  DIM_X: 1000,\n  DIM_Y: 600,\n  BACKGROUND_COLOR: 'lightblue',\n  PLATFORM_COLOR: 'lightgreen',\n  SPEED: 3,\n  TANK_COLOR: 'violet',\n  TANK_SIZE: 30\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jb25zdGFudHMuanMuanMiLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiQ09OU1RBTlRTIiwiRElNX1giLCJESU1fWSIsIkJBQ0tHUk9VTkRfQ09MT1IiLCJQTEFURk9STV9DT0xPUiIsIlNQRUVEIiwiVEFOS19DT0xPUiIsIlRBTktfU0laRSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfdGFua3MvLi9zcmMvc2NyaXB0cy9jb25zdGFudHMuanM/Nzc4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IENPTlNUQU5UUyA9IHtcbiAgICBESU1fWCA6IDEwMDAsXG4gICAgRElNX1kgOiA2MDAsXG4gICAgQkFDS0dST1VORF9DT0xPUiA6ICdsaWdodGJsdWUnLFxuICAgIFBMQVRGT1JNX0NPTE9SIDogJ2xpZ2h0Z3JlZW4nLFxuICAgIFNQRUVEIDogMyxcbiAgICBUQU5LX0NPTE9SIDogJ3Zpb2xldCcsXG4gICAgVEFOS19TSVpFIDogMzBcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsU0FBUyxHQUFHO0VBQ3pCQyxLQUFLLEVBQUcsSUFEaUI7RUFFekJDLEtBQUssRUFBRyxHQUZpQjtFQUd6QkMsZ0JBQWdCLEVBQUcsV0FITTtFQUl6QkMsY0FBYyxFQUFHLFlBSlE7RUFLekJDLEtBQUssRUFBRyxDQUxpQjtFQU16QkMsVUFBVSxFQUFHLFFBTlk7RUFPekJDLFNBQVMsRUFBRztBQVBhLENBQTdCIn0=\n//# sourceURL=webpack-internal:///./src/scripts/constants.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform */ \"./src/scripts/platform.js\");\n/* harmony import */ var _tank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tank */ \"./src/scripts/tank.js\");\n\n\n\nconst CONSTANTS = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\"); // const Platform = require('./platform');\n// const Tank = require('./tank');\n// const CONSTANTS = {\n//     DIM_X : 1000,\n//     DIM_Y : 600,\n//     COLOR : 'lightblue'\n// }\n\n\nclass Game {\n  constructor(ctx) {\n    // console.log(ctx);\n    this.ctx = ctx;\n    this.start();\n  }\n\n  start() {\n    this.background(this.ctx);\n    this.ground = new _platform__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      width: CONSTANTS.DIM_X,\n      height: CONSTANTS.DIM_Y\n    });\n    this.ground.creatPlatorm(this.ctx, CONSTANTS.PLATFORM_COLOR);\n    const pos = [this.ground.width / 2, this.ground.height - this.ground.height / 5];\n    this.tank = new _tank__WEBPACK_IMPORTED_MODULE_1__[\"default\"](pos);\n    this.tank.drawTank(this.ctx);\n  }\n\n  animate(k) {\n    this.background(this.ctx);\n    this.ground.creatPlatorm(this.ctx, CONSTANTS.PLATFORM_COLOR);\n    this.tank.animate(this.ctx, k);\n  }\n\n  background(ctx) {\n    ctx.fillStyle = CONSTANTS.BACKGROUND_COLOR;\n    ctx.fillRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsTUFBTUUsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLCtDQUFELENBQXpCLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNlLE1BQU1DLElBQU4sQ0FBVztFQUN0QkMsV0FBVyxDQUFFQyxHQUFGLEVBQU87SUFDZDtJQUNBLEtBQUtBLEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtDLEtBQUw7RUFDSDs7RUFFREEsS0FBSyxHQUFHO0lBQ0osS0FBS0MsVUFBTCxDQUFnQixLQUFLRixHQUFyQjtJQUNBLEtBQUtHLE1BQUwsR0FBYyxJQUFJVCxpREFBSixDQUFhO01BQUNVLEtBQUssRUFBRVIsU0FBUyxDQUFDUyxLQUFsQjtNQUF5QkMsTUFBTSxFQUFFVixTQUFTLENBQUNXO0lBQTNDLENBQWIsQ0FBZDtJQUNBLEtBQUtKLE1BQUwsQ0FBWUssWUFBWixDQUF5QixLQUFLUixHQUE5QixFQUFtQ0osU0FBUyxDQUFDYSxjQUE3QztJQUVBLE1BQU1DLEdBQUcsR0FBRyxDQUFDLEtBQUtQLE1BQUwsQ0FBWUMsS0FBWixHQUFrQixDQUFuQixFQUFzQixLQUFLRCxNQUFMLENBQVlHLE1BQVosR0FBcUIsS0FBS0gsTUFBTCxDQUFZRyxNQUFaLEdBQXFCLENBQWhFLENBQVo7SUFDQSxLQUFLSyxJQUFMLEdBQVksSUFBSWhCLDZDQUFKLENBQVNlLEdBQVQsQ0FBWjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQixLQUFLWixHQUF4QjtFQUNIOztFQUVEYSxPQUFPLENBQUNDLENBQUQsRUFBSTtJQUNQLEtBQUtaLFVBQUwsQ0FBZ0IsS0FBS0YsR0FBckI7SUFDQSxLQUFLRyxNQUFMLENBQVlLLFlBQVosQ0FBeUIsS0FBS1IsR0FBOUIsRUFBbUNKLFNBQVMsQ0FBQ2EsY0FBN0M7SUFDQSxLQUFLRSxJQUFMLENBQVVFLE9BQVYsQ0FBa0IsS0FBS2IsR0FBdkIsRUFBNEJjLENBQTVCO0VBQ0g7O0VBRURaLFVBQVUsQ0FBQ0YsR0FBRCxFQUFNO0lBQ1pBLEdBQUcsQ0FBQ2UsU0FBSixHQUFnQm5CLFNBQVMsQ0FBQ29CLGdCQUExQjtJQUNBaEIsR0FBRyxDQUFDaUIsUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJyQixTQUFTLENBQUNTLEtBQTdCLEVBQW9DVCxTQUFTLENBQUNXLEtBQTlDO0VBQ0g7O0FBMUJxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3RhbmtzLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF0Zm9ybSBmcm9tICcuL3BsYXRmb3JtJ1xuaW1wb3J0IFRhbmsgZnJvbSBcIi4vdGFua1wiXG5jb25zdCBDT05TVEFOVFMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuLy8gY29uc3QgUGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG4vLyBjb25zdCBUYW5rID0gcmVxdWlyZSgnLi90YW5rJyk7XG4vLyBjb25zdCBDT05TVEFOVFMgPSB7XG4vLyAgICAgRElNX1ggOiAxMDAwLFxuLy8gICAgIERJTV9ZIDogNjAwLFxuLy8gICAgIENPTE9SIDogJ2xpZ2h0Ymx1ZSdcbi8vIH1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yIChjdHgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY3R4KTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG4gICAgXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCh0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMuZ3JvdW5kID0gbmV3IFBsYXRmb3JtKHt3aWR0aDogQ09OU1RBTlRTLkRJTV9YLCBoZWlnaHQ6IENPTlNUQU5UUy5ESU1fWX0pO1xuICAgICAgICB0aGlzLmdyb3VuZC5jcmVhdFBsYXRvcm0odGhpcy5jdHgsIENPTlNUQU5UUy5QTEFURk9STV9DT0xPUik7XG5cbiAgICAgICAgY29uc3QgcG9zID0gW3RoaXMuZ3JvdW5kLndpZHRoLzIsIHRoaXMuZ3JvdW5kLmhlaWdodCAtIHRoaXMuZ3JvdW5kLmhlaWdodCAvIDVdO1xuICAgICAgICB0aGlzLnRhbmsgPSBuZXcgVGFuayhwb3MpO1xuICAgICAgICB0aGlzLnRhbmsuZHJhd1RhbmsodGhpcy5jdHgpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoaykge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQodGhpcy5jdHgpXG4gICAgICAgIHRoaXMuZ3JvdW5kLmNyZWF0UGxhdG9ybSh0aGlzLmN0eCwgQ09OU1RBTlRTLlBMQVRGT1JNX0NPTE9SKVxuICAgICAgICB0aGlzLnRhbmsuYW5pbWF0ZSh0aGlzLmN0eCwgaylcbiAgICB9XG5cbiAgICBiYWNrZ3JvdW5kKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gQ09OU1RBTlRTLkJBQ0tHUk9VTkRfQ09MT1I7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBDT05TVEFOVFMuRElNX1gsIENPTlNUQU5UUy5ESU1fWSk7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIlBsYXRmb3JtIiwiVGFuayIsIkNPTlNUQU5UUyIsInJlcXVpcmUiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjdHgiLCJzdGFydCIsImJhY2tncm91bmQiLCJncm91bmQiLCJ3aWR0aCIsIkRJTV9YIiwiaGVpZ2h0IiwiRElNX1kiLCJjcmVhdFBsYXRvcm0iLCJQTEFURk9STV9DT0xPUiIsInBvcyIsInRhbmsiLCJkcmF3VGFuayIsImFuaW1hdGUiLCJrIiwiZmlsbFN0eWxlIiwiQkFDS0dST1VORF9DT0xPUiIsImZpbGxSZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/moveObject.js":
/*!***********************************!*\
  !*** ./src/scripts/moveObject.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MoveObject; }\n/* harmony export */ });\nclass MoveObject {\n  constructor(obj) {\n    this.pos = obj.pos;\n    this.vel = obj.vel;\n    this.color = obj.color;\n  }\n\n  move(key) {\n    // ctx.clearRect(this.pos[0], this.pos[1], 50, -50);\n    if (key === 'a') this.pos[0] -= this.vel;\n    if (key === 'd') this.pos[0] += this.vel;\n  }\n\n} // module.exports = MoveObject;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3ZlT2JqZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxVQUFOLENBQWlCO0VBQzVCQyxXQUFXLENBQUNDLEdBQUQsRUFBTTtJQUNiLEtBQUtDLEdBQUwsR0FBV0QsR0FBRyxDQUFDQyxHQUFmO0lBQ0EsS0FBS0MsR0FBTCxHQUFXRixHQUFHLENBQUNFLEdBQWY7SUFDQSxLQUFLQyxLQUFMLEdBQWFILEdBQUcsQ0FBQ0csS0FBakI7RUFDSDs7RUFFREMsSUFBSSxDQUFDQyxHQUFELEVBQU07SUFDTjtJQUNBLElBQUlBLEdBQUcsS0FBSyxHQUFaLEVBQWlCLEtBQUtKLEdBQUwsQ0FBUyxDQUFULEtBQWUsS0FBS0MsR0FBcEI7SUFDakIsSUFBSUcsR0FBRyxLQUFLLEdBQVosRUFBaUIsS0FBS0osR0FBTCxDQUFTLENBQVQsS0FBZSxLQUFLQyxHQUFwQjtFQUNwQjs7QUFYMkIsRUFjaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc190YW5rcy8uL3NyYy9zY3JpcHRzL21vdmVPYmplY3QuanM/YjcyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZlT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICAgICAgdGhpcy5wb3MgPSBvYmoucG9zO1xuICAgICAgICB0aGlzLnZlbCA9IG9iai52ZWw7XG4gICAgICAgIHRoaXMuY29sb3IgPSBvYmouY29sb3I7XG4gICAgfVxuXG4gICAgbW92ZShrZXkpIHtcbiAgICAgICAgLy8gY3R4LmNsZWFyUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDUwLCAtNTApO1xuICAgICAgICBpZiAoa2V5ID09PSAnYScpIHRoaXMucG9zWzBdIC09IHRoaXMudmVsO1xuICAgICAgICBpZiAoa2V5ID09PSAnZCcpIHRoaXMucG9zWzBdICs9IHRoaXMudmVsO1xuICAgIH1cbn1cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBNb3ZlT2JqZWN0OyJdLCJuYW1lcyI6WyJNb3ZlT2JqZWN0IiwiY29uc3RydWN0b3IiLCJvYmoiLCJwb3MiLCJ2ZWwiLCJjb2xvciIsIm1vdmUiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/moveObject.js\n");

/***/ }),

/***/ "./src/scripts/platform.js":
/*!*********************************!*\
  !*** ./src/scripts/platform.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlatForm; }\n/* harmony export */ });\nconst DEFAULTS = {\n  groundColor: 'lightgreen'\n};\nclass PlatForm {\n  constructor(dimension) {\n    this.width = dimension.width; // this.height : surface of the platform\n\n    this.height = dimension.height; // this.creatPlatorm(dimension.width, dimension.height);\n  }\n\n  creatPlatorm(ctx, color) {\n    ctx.fillStyle = color;\n    ctx.fillRect(0, this.height, this.width, -this.height / 5);\n  }\n\n} // module.exports = PlatForm;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF0Zm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsUUFBUSxHQUFHO0VBQ2JDLFdBQVcsRUFBRztBQURELENBQWpCO0FBSWUsTUFBTUMsUUFBTixDQUFlO0VBQzFCQyxXQUFXLENBQUNDLFNBQUQsRUFBWTtJQUNuQixLQUFLQyxLQUFMLEdBQWFELFNBQVMsQ0FBQ0MsS0FBdkIsQ0FEbUIsQ0FFbkI7O0lBQ0EsS0FBS0MsTUFBTCxHQUFjRixTQUFTLENBQUNFLE1BQXhCLENBSG1CLENBSW5CO0VBQ0g7O0VBRURDLFlBQVksQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWE7SUFDckJELEdBQUcsQ0FBQ0UsU0FBSixHQUFnQkQsS0FBaEI7SUFDQUQsR0FBRyxDQUFDRyxRQUFKLENBQWEsQ0FBYixFQUFnQixLQUFLTCxNQUFyQixFQUE2QixLQUFLRCxLQUFsQyxFQUF5QyxDQUFDLEtBQUtDLE1BQU4sR0FBYSxDQUF0RDtFQUNIOztBQVh5QixFQWU5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3RhbmtzLy4vc3JjL3NjcmlwdHMvcGxhdGZvcm0uanM/ODZkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBERUZBVUxUUyA9IHtcbiAgICBncm91bmRDb2xvciA6ICdsaWdodGdyZWVuJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Rm9ybSB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9uKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBkaW1lbnNpb24ud2lkdGg7XG4gICAgICAgIC8vIHRoaXMuaGVpZ2h0IDogc3VyZmFjZSBvZiB0aGUgcGxhdGZvcm1cbiAgICAgICAgdGhpcy5oZWlnaHQgPSBkaW1lbnNpb24uaGVpZ2h0O1xuICAgICAgICAvLyB0aGlzLmNyZWF0UGxhdG9ybShkaW1lbnNpb24ud2lkdGgsIGRpbWVuc2lvbi5oZWlnaHQpO1xuICAgIH1cbiAgICBcbiAgICBjcmVhdFBsYXRvcm0oY3R4LCBjb2xvcikge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgLXRoaXMuaGVpZ2h0LzUpO1xuICAgIH1cblxufVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IFBsYXRGb3JtOyJdLCJuYW1lcyI6WyJERUZBVUxUUyIsImdyb3VuZENvbG9yIiwiUGxhdEZvcm0iLCJjb25zdHJ1Y3RvciIsImRpbWVuc2lvbiIsIndpZHRoIiwiaGVpZ2h0IiwiY3JlYXRQbGF0b3JtIiwiY3R4IiwiY29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/platform.js\n");

/***/ }),

/***/ "./src/scripts/tank.js":
/*!*****************************!*\
  !*** ./src/scripts/tank.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tank; }\n/* harmony export */ });\n/* harmony import */ var _moveObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moveObject.js */ \"./src/scripts/moveObject.js\");\n// const MoveObject = require('./moveObject');\n\n\nconst CONSTANTS = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\");\n\nclass Tank extends _moveObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(pos) {\n    super({\n      pos: pos,\n      vel: CONSTANTS.SPEED,\n      color: CONSTANTS.TANK_COLOR\n    });\n  }\n\n  animate(ctx, k) {\n    this.move(k);\n    this.drawTank(ctx);\n  }\n\n  drawTank(ctx) {\n    ctx.fillStyle = CONSTANTS.TANK_COLOR;\n    const size = CONSTANTS.TANK_SIZE;\n    ctx.fillRect(this.pos[0], this.pos[1], size, -size);\n  }\n\n} // module.exports = Tank;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90YW5rLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLG1CQUFPLENBQUMsK0NBQUQsQ0FBekI7O0FBRWUsTUFBTUMsSUFBTixTQUFtQkgsc0RBQW5CLENBQThCO0VBQ3pDSSxXQUFXLENBQUNDLEdBQUQsRUFBTTtJQUNiLE1BQU07TUFBQ0EsR0FBRyxFQUFFQSxHQUFOO01BQVdDLEdBQUcsRUFBRUwsU0FBUyxDQUFDTSxLQUExQjtNQUFpQ0MsS0FBSyxFQUFFUCxTQUFTLENBQUNRO0lBQWxELENBQU47RUFDSDs7RUFFREMsT0FBTyxDQUFDQyxHQUFELEVBQU1DLENBQU4sRUFBUztJQUNaLEtBQUtDLElBQUwsQ0FBVUQsQ0FBVjtJQUNBLEtBQUtFLFFBQUwsQ0FBY0gsR0FBZDtFQUNIOztFQUVERyxRQUFRLENBQUNILEdBQUQsRUFBTTtJQUNWQSxHQUFHLENBQUNJLFNBQUosR0FBZ0JkLFNBQVMsQ0FBQ1EsVUFBMUI7SUFDQSxNQUFNTyxJQUFJLEdBQUdmLFNBQVMsQ0FBQ2dCLFNBQXZCO0lBQ0FOLEdBQUcsQ0FBQ08sUUFBSixDQUFhLEtBQUtiLEdBQUwsQ0FBUyxDQUFULENBQWIsRUFBMEIsS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FBMUIsRUFBdUNXLElBQXZDLEVBQTZDLENBQUNBLElBQTlDO0VBQ0g7O0FBZHdDLEVBaUI3QyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3RhbmtzLy4vc3JjL3NjcmlwdHMvdGFuay5qcz9mYzc2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IE1vdmVPYmplY3QgPSByZXF1aXJlKCcuL21vdmVPYmplY3QnKTtcbmltcG9ydCBNb3ZlT2JqZWN0IGZyb20gJy4vbW92ZU9iamVjdC5qcyc7XG5jb25zdCBDT05TVEFOVFMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYW5rIGV4dGVuZHMgTW92ZU9iamVjdCB7XG4gICAgY29uc3RydWN0b3IocG9zKSB7XG4gICAgICAgIHN1cGVyKHtwb3M6IHBvcywgdmVsOiBDT05TVEFOVFMuU1BFRUQsIGNvbG9yOiBDT05TVEFOVFMuVEFOS19DT0xPUn0pO1xuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4LCBrKSB7XG4gICAgICAgIHRoaXMubW92ZShrKTtcbiAgICAgICAgdGhpcy5kcmF3VGFuayhjdHgpXG4gICAgfVxuXG4gICAgZHJhd1RhbmsoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBDT05TVEFOVFMuVEFOS19DT0xPUjtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IENPTlNUQU5UUy5UQU5LX1NJWkU7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIHNpemUsIC1zaXplKTtcbiAgICB9XG59XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gVGFuazsiXSwibmFtZXMiOlsiTW92ZU9iamVjdCIsIkNPTlNUQU5UUyIsInJlcXVpcmUiLCJUYW5rIiwiY29uc3RydWN0b3IiLCJwb3MiLCJ2ZWwiLCJTUEVFRCIsImNvbG9yIiwiVEFOS19DT0xPUiIsImFuaW1hdGUiLCJjdHgiLCJrIiwibW92ZSIsImRyYXdUYW5rIiwiZmlsbFN0eWxlIiwic2l6ZSIsIlRBTktfU0laRSIsImZpbGxSZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/tank.js\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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