/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n// const Tank = require('./scripts/tank');\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let canvasEl = document.getElementById('game-canvas');\n  canvasEl.width = \"1000\";\n  canvasEl.height = \"600\";\n  canvasEl = canvasEl.getContext('2d');\n  const gameBase = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvasEl); // console.log(gameBase.tank.move);\n\n  document.addEventListener('keydown', e => {\n    let k = '';\n\n    if (e.key === 'd') {\n      k = 'd';\n    }\n\n    if (e.key === 'a') {\n      k = 'a';\n    }\n\n    gameBase.animate.bind(gameBase)(k); // gameBase.background(canvasEl);\n    // gameBase.ground.creatPlatorm(canvasEl, {width: 1000, height: 600})\n    // gameBase.tank.drawTank(canvasEl);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBRUFDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLE1BQU07RUFDaEQsSUFBSUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZjtFQUNBRCxRQUFRLENBQUNFLEtBQVQsR0FBaUIsTUFBakI7RUFDQUYsUUFBUSxDQUFDRyxNQUFULEdBQWtCLEtBQWxCO0VBQ0FILFFBQVEsR0FBR0EsUUFBUSxDQUFDSSxVQUFULENBQW9CLElBQXBCLENBQVg7RUFFQSxNQUFNQyxRQUFRLEdBQUcsSUFBSVIscURBQUosQ0FBU0csUUFBVCxDQUFqQixDQU5nRCxDQU9oRDs7RUFDQUYsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFzQ08sQ0FBRCxJQUFPO0lBQ3hDLElBQUlDLENBQUMsR0FBRyxFQUFSOztJQUNBLElBQUlELENBQUMsQ0FBQ0UsR0FBRixLQUFVLEdBQWQsRUFBbUI7TUFDZkQsQ0FBQyxHQUFHLEdBQUo7SUFDSDs7SUFDRCxJQUFJRCxDQUFDLENBQUNFLEdBQUYsS0FBVSxHQUFkLEVBQW1CO01BQ2ZELENBQUMsR0FBRyxHQUFKO0lBQ0g7O0lBQ0RGLFFBQVEsQ0FBQ0ksT0FBVCxDQUFpQkMsSUFBakIsQ0FBc0JMLFFBQXRCLEVBQWdDRSxDQUFoQyxFQVJ3QyxDQVN4QztJQUNBO0lBQ0E7RUFDSCxDQVpEO0FBY0gsQ0F0QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc190YW5rcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IFRhbmsgPSByZXF1aXJlKCcuL3NjcmlwdHMvdGFuaycpO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBsZXQgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcbiAgICBjYW52YXNFbC53aWR0aCA9IFwiMTAwMFwiO1xuICAgIGNhbnZhc0VsLmhlaWdodCA9IFwiNjAwXCI7XG4gICAgY2FudmFzRWwgPSBjYW52YXNFbC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIFxuICAgIGNvbnN0IGdhbWVCYXNlID0gbmV3IEdhbWUoY2FudmFzRWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKGdhbWVCYXNlLnRhbmsubW92ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgIGxldCBrID0gJyc7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ2QnKSB7XG4gICAgICAgICAgICBrID0gJ2QnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ2EnKSB7XG4gICAgICAgICAgICBrID0gJ2EnO1xuICAgICAgICB9XG4gICAgICAgIGdhbWVCYXNlLmFuaW1hdGUuYmluZChnYW1lQmFzZSkoayk7XG4gICAgICAgIC8vIGdhbWVCYXNlLmJhY2tncm91bmQoY2FudmFzRWwpO1xuICAgICAgICAvLyBnYW1lQmFzZS5ncm91bmQuY3JlYXRQbGF0b3JtKGNhbnZhc0VsLCB7d2lkdGg6IDEwMDAsIGhlaWdodDogNjAwfSlcbiAgICAgICAgLy8gZ2FtZUJhc2UudGFuay5kcmF3VGFuayhjYW52YXNFbCk7XG4gICAgfSlcbiAgICBcbn0pIl0sIm5hbWVzIjpbIkdhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJnZXRDb250ZXh0IiwiZ2FtZUJhc2UiLCJlIiwiayIsImtleSIsImFuaW1hdGUiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.js */ \"./src/scripts/platform.js\");\n/* harmony import */ var _tank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tank */ \"./src/scripts/tank.js\");\n // const Platform = require('./platform');\n// const Tank = require('./tank');\n\n\nconst CONSTANTS = {\n  DIM_X: 1000,\n  DIM_Y: 600,\n  COLOR: 'lightblue'\n};\nclass Game {\n  constructor(ctx) {\n    // console.log(ctx);\n    this.ctx = ctx;\n    this.start();\n  }\n\n  start() {\n    this.background(this.ctx);\n    this.ground = new _platform_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      width: CONSTANTS.DIM_X,\n      height: CONSTANTS.DIM_Y\n    });\n    this.ground.creatPlatorm(this.ctx);\n    const pos = [this.ground.width / 2, this.ground.height - this.ground.height / 5];\n    this.tank = new _tank__WEBPACK_IMPORTED_MODULE_1__[\"default\"](pos);\n    this.tank.drawTank(this.ctx);\n  }\n\n  animate(k) {\n    this.background(this.ctx);\n    this.ground.creatPlatorm(this.ctx);\n    this.tank.animate(this.ctx, k);\n  }\n\n  background(ctx) {\n    ctx.fillStyle = CONSTANTS.COLOR;\n    ctx.fillRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n  }\n\n} // module.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztDQUNBO0FBQ0E7O0FBQ0E7QUFFQSxNQUFNRSxTQUFTLEdBQUc7RUFDZEMsS0FBSyxFQUFHLElBRE07RUFFZEMsS0FBSyxFQUFHLEdBRk07RUFHZEMsS0FBSyxFQUFHO0FBSE0sQ0FBbEI7QUFLZSxNQUFNQyxJQUFOLENBQVc7RUFFdEJDLFdBQVcsQ0FBRUMsR0FBRixFQUFPO0lBQ2Q7SUFDQSxLQUFLQSxHQUFMLEdBQVdBLEdBQVg7SUFDQSxLQUFLQyxLQUFMO0VBQ0g7O0VBRURBLEtBQUssR0FBRztJQUNKLEtBQUtDLFVBQUwsQ0FBZ0IsS0FBS0YsR0FBckI7SUFDQSxLQUFLRyxNQUFMLEdBQWMsSUFBSVgsb0RBQUosQ0FBYTtNQUFDWSxLQUFLLEVBQUVWLFNBQVMsQ0FBQ0MsS0FBbEI7TUFBeUJVLE1BQU0sRUFBRVgsU0FBUyxDQUFDRTtJQUEzQyxDQUFiLENBQWQ7SUFDQSxLQUFLTyxNQUFMLENBQVlHLFlBQVosQ0FBeUIsS0FBS04sR0FBOUI7SUFFQSxNQUFNTyxHQUFHLEdBQUcsQ0FBQyxLQUFLSixNQUFMLENBQVlDLEtBQVosR0FBa0IsQ0FBbkIsRUFBc0IsS0FBS0QsTUFBTCxDQUFZRSxNQUFaLEdBQXFCLEtBQUtGLE1BQUwsQ0FBWUUsTUFBWixHQUFxQixDQUFoRSxDQUFaO0lBQ0EsS0FBS0csSUFBTCxHQUFZLElBQUlmLDZDQUFKLENBQVNjLEdBQVQsQ0FBWjtJQUNBLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQixLQUFLVCxHQUF4QjtFQUNIOztFQUVEVSxPQUFPLENBQUNDLENBQUQsRUFBSTtJQUNQLEtBQUtULFVBQUwsQ0FBZ0IsS0FBS0YsR0FBckI7SUFDQSxLQUFLRyxNQUFMLENBQVlHLFlBQVosQ0FBeUIsS0FBS04sR0FBOUI7SUFDQSxLQUFLUSxJQUFMLENBQVVFLE9BQVYsQ0FBa0IsS0FBS1YsR0FBdkIsRUFBNEJXLENBQTVCO0VBQ0g7O0VBRURULFVBQVUsQ0FBQ0YsR0FBRCxFQUFNO0lBQ1pBLEdBQUcsQ0FBQ1ksU0FBSixHQUFnQmxCLFNBQVMsQ0FBQ0csS0FBMUI7SUFDQUcsR0FBRyxDQUFDYSxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQm5CLFNBQVMsQ0FBQ0MsS0FBN0IsRUFBb0NELFNBQVMsQ0FBQ0UsS0FBOUM7RUFDSDs7QUEzQnFCLEVBK0IxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3RhbmtzLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF0Zm9ybSBmcm9tICcuL3BsYXRmb3JtLmpzJ1xuLy8gY29uc3QgUGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG4vLyBjb25zdCBUYW5rID0gcmVxdWlyZSgnLi90YW5rJyk7XG5pbXBvcnQgVGFuayBmcm9tIFwiLi90YW5rXCJcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIERJTV9YIDogMTAwMCxcbiAgICBESU1fWSA6IDYwMCxcbiAgICBDT0xPUiA6ICdsaWdodGJsdWUnXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcblxuICAgIGNvbnN0cnVjdG9yIChjdHgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY3R4KTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG4gICAgXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCh0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMuZ3JvdW5kID0gbmV3IFBsYXRmb3JtKHt3aWR0aDogQ09OU1RBTlRTLkRJTV9YLCBoZWlnaHQ6IENPTlNUQU5UUy5ESU1fWX0pO1xuICAgICAgICB0aGlzLmdyb3VuZC5jcmVhdFBsYXRvcm0odGhpcy5jdHgpO1xuXG4gICAgICAgIGNvbnN0IHBvcyA9IFt0aGlzLmdyb3VuZC53aWR0aC8yLCB0aGlzLmdyb3VuZC5oZWlnaHQgLSB0aGlzLmdyb3VuZC5oZWlnaHQgLyA1XTtcbiAgICAgICAgdGhpcy50YW5rID0gbmV3IFRhbmsocG9zKTtcbiAgICAgICAgdGhpcy50YW5rLmRyYXdUYW5rKHRoaXMuY3R4KTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGspIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLmdyb3VuZC5jcmVhdFBsYXRvcm0odGhpcy5jdHgpXG4gICAgICAgIHRoaXMudGFuay5hbmltYXRlKHRoaXMuY3R4LCBrKVxuICAgIH1cblxuICAgIGJhY2tncm91bmQoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBDT05TVEFOVFMuQ09MT1I7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBDT05TVEFOVFMuRElNX1gsIENPTlNUQU5UUy5ESU1fWSk7XG4gICAgfVxuXG59XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gR2FtZTsiXSwibmFtZXMiOlsiUGxhdGZvcm0iLCJUYW5rIiwiQ09OU1RBTlRTIiwiRElNX1giLCJESU1fWSIsIkNPTE9SIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY3R4Iiwic3RhcnQiLCJiYWNrZ3JvdW5kIiwiZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJjcmVhdFBsYXRvcm0iLCJwb3MiLCJ0YW5rIiwiZHJhd1RhbmsiLCJhbmltYXRlIiwiayIsImZpbGxTdHlsZSIsImZpbGxSZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/moveObject.js":
/*!***********************************!*\
  !*** ./src/scripts/moveObject.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MoveObject; }\n/* harmony export */ });\nclass MoveObject {\n  constructor(obj) {\n    this.pos = obj.pos;\n    this.vel = obj.vel;\n    this.color = obj.color;\n  }\n\n  move(key) {\n    // ctx.clearRect(this.pos[0], this.pos[1], 50, -50);\n    if (key === 'a') this.pos[0] -= this.vel;\n    if (key === 'd') this.pos[0] += this.vel;\n    console.log(this.pos);\n  }\n\n} // module.exports = MoveObject;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3ZlT2JqZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxVQUFOLENBQWlCO0VBQzVCQyxXQUFXLENBQUNDLEdBQUQsRUFBTTtJQUNiLEtBQUtDLEdBQUwsR0FBV0QsR0FBRyxDQUFDQyxHQUFmO0lBQ0EsS0FBS0MsR0FBTCxHQUFXRixHQUFHLENBQUNFLEdBQWY7SUFDQSxLQUFLQyxLQUFMLEdBQWFILEdBQUcsQ0FBQ0csS0FBakI7RUFDSDs7RUFFREMsSUFBSSxDQUFDQyxHQUFELEVBQU07SUFDTjtJQUNBLElBQUlBLEdBQUcsS0FBSyxHQUFaLEVBQWlCLEtBQUtKLEdBQUwsQ0FBUyxDQUFULEtBQWUsS0FBS0MsR0FBcEI7SUFDakIsSUFBSUcsR0FBRyxLQUFLLEdBQVosRUFBaUIsS0FBS0osR0FBTCxDQUFTLENBQVQsS0FBZSxLQUFLQyxHQUFwQjtJQUNqQkksT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS04sR0FBakI7RUFDSDs7QUFaMkIsRUFlaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc190YW5rcy8uL3NyYy9zY3JpcHRzL21vdmVPYmplY3QuanM/YjcyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZlT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICAgICAgdGhpcy5wb3MgPSBvYmoucG9zO1xuICAgICAgICB0aGlzLnZlbCA9IG9iai52ZWw7XG4gICAgICAgIHRoaXMuY29sb3IgPSBvYmouY29sb3I7XG4gICAgfVxuXG4gICAgbW92ZShrZXkpIHtcbiAgICAgICAgLy8gY3R4LmNsZWFyUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDUwLCAtNTApO1xuICAgICAgICBpZiAoa2V5ID09PSAnYScpIHRoaXMucG9zWzBdIC09IHRoaXMudmVsO1xuICAgICAgICBpZiAoa2V5ID09PSAnZCcpIHRoaXMucG9zWzBdICs9IHRoaXMudmVsO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBvcyk7XG4gICAgfVxufVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IE1vdmVPYmplY3Q7Il0sIm5hbWVzIjpbIk1vdmVPYmplY3QiLCJjb25zdHJ1Y3RvciIsIm9iaiIsInBvcyIsInZlbCIsImNvbG9yIiwibW92ZSIsImtleSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/moveObject.js\n");

/***/ }),

/***/ "./src/scripts/platform.js":
/*!*********************************!*\
  !*** ./src/scripts/platform.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlatForm; }\n/* harmony export */ });\nconst DEFAULTS = {\n  groundColor: 'lightgreen'\n};\nclass PlatForm {\n  constructor(dimension) {\n    this.width = dimension.width; // this.height : surface of the platform\n\n    this.height = dimension.height; // this.creatPlatorm(dimension.width, dimension.height);\n  }\n\n  creatPlatorm(ctx) {\n    console.log(ctx);\n    ctx.fillStyle = DEFAULTS.groundColor;\n    ctx.fillRect(0, this.height, this.width, -this.height / 5);\n  }\n\n} // module.exports = PlatForm;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF0Zm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsUUFBUSxHQUFHO0VBQ2JDLFdBQVcsRUFBRztBQURELENBQWpCO0FBSWUsTUFBTUMsUUFBTixDQUFlO0VBQzFCQyxXQUFXLENBQUNDLFNBQUQsRUFBWTtJQUNuQixLQUFLQyxLQUFMLEdBQWFELFNBQVMsQ0FBQ0MsS0FBdkIsQ0FEbUIsQ0FFbkI7O0lBQ0EsS0FBS0MsTUFBTCxHQUFjRixTQUFTLENBQUNFLE1BQXhCLENBSG1CLENBSW5CO0VBQ0g7O0VBRURDLFlBQVksQ0FBQ0MsR0FBRCxFQUFNO0lBQ2RDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0lBQ0FBLEdBQUcsQ0FBQ0csU0FBSixHQUFnQlgsUUFBUSxDQUFDQyxXQUF6QjtJQUNBTyxHQUFHLENBQUNJLFFBQUosQ0FBYSxDQUFiLEVBQWdCLEtBQUtOLE1BQXJCLEVBQTZCLEtBQUtELEtBQWxDLEVBQXlDLENBQUMsS0FBS0MsTUFBTixHQUFhLENBQXREO0VBQ0g7O0FBWnlCLEVBZ0I5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3RhbmtzLy4vc3JjL3NjcmlwdHMvcGxhdGZvcm0uanM/ODZkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBERUZBVUxUUyA9IHtcbiAgICBncm91bmRDb2xvciA6ICdsaWdodGdyZWVuJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Rm9ybSB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9uKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBkaW1lbnNpb24ud2lkdGg7XG4gICAgICAgIC8vIHRoaXMuaGVpZ2h0IDogc3VyZmFjZSBvZiB0aGUgcGxhdGZvcm1cbiAgICAgICAgdGhpcy5oZWlnaHQgPSBkaW1lbnNpb24uaGVpZ2h0O1xuICAgICAgICAvLyB0aGlzLmNyZWF0UGxhdG9ybShkaW1lbnNpb24ud2lkdGgsIGRpbWVuc2lvbi5oZWlnaHQpO1xuICAgIH1cbiAgICBcbiAgICBjcmVhdFBsYXRvcm0oY3R4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGN0eCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBERUZBVUxUUy5ncm91bmRDb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCAtdGhpcy5oZWlnaHQvNSk7XG4gICAgfVxuXG59XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gUGxhdEZvcm07Il0sIm5hbWVzIjpbIkRFRkFVTFRTIiwiZ3JvdW5kQ29sb3IiLCJQbGF0Rm9ybSIsImNvbnN0cnVjdG9yIiwiZGltZW5zaW9uIiwid2lkdGgiLCJoZWlnaHQiLCJjcmVhdFBsYXRvcm0iLCJjdHgiLCJjb25zb2xlIiwibG9nIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/platform.js\n");

/***/ }),

/***/ "./src/scripts/tank.js":
/*!*****************************!*\
  !*** ./src/scripts/tank.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tank; }\n/* harmony export */ });\n/* harmony import */ var _moveObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moveObject.js */ \"./src/scripts/moveObject.js\");\n// const MoveObject = require('./moveObject');\n\nclass Tank extends _moveObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(pos) {\n    super({\n      pos: pos,\n      vel: 2,\n      color: 'red'\n    });\n  }\n\n  animate(ctx, k) {\n    this.move(k);\n    this.drawTank(ctx);\n  }\n\n  drawTank(ctx) {\n    ctx.fillStyle = 'red';\n    ctx.fillRect(this.pos[0], this.pos[1], 50, -50);\n  }\n\n} // module.exports = Tank;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90YW5rLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUVlLE1BQU1DLElBQU4sU0FBbUJELHNEQUFuQixDQUE4QjtFQUN6Q0UsV0FBVyxDQUFDQyxHQUFELEVBQU07SUFDYixNQUFNO01BQUNBLEdBQUcsRUFBRUEsR0FBTjtNQUFXQyxHQUFHLEVBQUUsQ0FBaEI7TUFBbUJDLEtBQUssRUFBRTtJQUExQixDQUFOO0VBQ0g7O0VBRURDLE9BQU8sQ0FBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVM7SUFDWixLQUFLQyxJQUFMLENBQVVELENBQVY7SUFDQSxLQUFLRSxRQUFMLENBQWNILEdBQWQ7RUFDSDs7RUFFREcsUUFBUSxDQUFDSCxHQUFELEVBQU07SUFDVkEsR0FBRyxDQUFDSSxTQUFKLEdBQWdCLEtBQWhCO0lBQ0FKLEdBQUcsQ0FBQ0ssUUFBSixDQUFhLEtBQUtULEdBQUwsQ0FBUyxDQUFULENBQWIsRUFBMEIsS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FBMUIsRUFBdUMsRUFBdkMsRUFBMkMsQ0FBQyxFQUE1QztFQUNIOztBQWJ3QyxFQWdCN0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc190YW5rcy8uL3NyYy9zY3JpcHRzL3RhbmsuanM/ZmM3NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBNb3ZlT2JqZWN0ID0gcmVxdWlyZSgnLi9tb3ZlT2JqZWN0Jyk7XG5pbXBvcnQgTW92ZU9iamVjdCBmcm9tICcuL21vdmVPYmplY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYW5rIGV4dGVuZHMgTW92ZU9iamVjdCB7XG4gICAgY29uc3RydWN0b3IocG9zKSB7XG4gICAgICAgIHN1cGVyKHtwb3M6IHBvcywgdmVsOiAyLCBjb2xvcjogJ3JlZCd9KTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCwgaykge1xuICAgICAgICB0aGlzLm1vdmUoayk7XG4gICAgICAgIHRoaXMuZHJhd1RhbmsoY3R4KVxuICAgIH1cblxuICAgIGRyYXdUYW5rKGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDUwLCAtNTApO1xuICAgIH1cbn1cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBUYW5rOyJdLCJuYW1lcyI6WyJNb3ZlT2JqZWN0IiwiVGFuayIsImNvbnN0cnVjdG9yIiwicG9zIiwidmVsIiwiY29sb3IiLCJhbmltYXRlIiwiY3R4IiwiayIsIm1vdmUiLCJkcmF3VGFuayIsImZpbGxTdHlsZSIsImZpbGxSZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/tank.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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