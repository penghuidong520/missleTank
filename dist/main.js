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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n// const Tank = require('./scripts/tank');\n\n\nconst CONSTANTS = __webpack_require__(/*! ./scripts/constants */ \"./src/scripts/constants.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let canvasEl = document.getElementById('game-canvas');\n  canvasEl.width = CONSTANTS.DIM_X;\n  canvasEl.height = CONSTANTS.DIM_Y;\n  canvasEl = canvasEl.getContext('2d');\n  const gameBase = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvasEl); // console.log(gameBase.tank.move);\n\n  document.addEventListener('keydown', e => {\n    let k = '';\n\n    switch (e.key) {\n      case 'a':\n        k = 'a';\n        break;\n\n      case 'd':\n        k = 'd';\n        break;\n\n      case 'Space':\n        console.log('space');\n        break;\n    } // if (e.key === 'd') {\n    //     k = 'd';\n    // }\n    // if (e.key === 'a') {\n    //     k = 'a';\n    // }\n\n\n    gameBase.animate.bind(gameBase)(k);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUNBLE1BQU1DLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyx1REFBRCxDQUF6Qjs7QUFHQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsTUFBTTtFQUNoRCxJQUFJQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixhQUF4QixDQUFmO0VBQ0FELFFBQVEsQ0FBQ0UsS0FBVCxHQUFpQk4sU0FBUyxDQUFDTyxLQUEzQjtFQUNBSCxRQUFRLENBQUNJLE1BQVQsR0FBa0JSLFNBQVMsQ0FBQ1MsS0FBNUI7RUFDQUwsUUFBUSxHQUFHQSxRQUFRLENBQUNNLFVBQVQsQ0FBb0IsSUFBcEIsQ0FBWDtFQUVBLE1BQU1DLFFBQVEsR0FBRyxJQUFJWixxREFBSixDQUFTSyxRQUFULENBQWpCLENBTmdELENBT2hEOztFQUNBRixRQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXNDUyxDQUFELElBQU87SUFDeEMsSUFBSUMsQ0FBQyxHQUFHLEVBQVI7O0lBRUEsUUFBT0QsQ0FBQyxDQUFDRSxHQUFUO01BQ0ksS0FBSyxHQUFMO1FBQ0lELENBQUMsR0FBRyxHQUFKO1FBQ0E7O01BQ0osS0FBSyxHQUFMO1FBQ0lBLENBQUMsR0FBRyxHQUFKO1FBQ0E7O01BQ0osS0FBSyxPQUFMO1FBQ0lFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7UUFDQTtJQVRSLENBSHdDLENBZXhDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7O0lBR0FMLFFBQVEsQ0FBQ00sT0FBVCxDQUFpQkMsSUFBakIsQ0FBc0JQLFFBQXRCLEVBQWdDRSxDQUFoQztFQUNILENBeEJEO0FBMEJILENBbENEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfdGFua3MvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBUYW5rID0gcmVxdWlyZSgnLi9zY3JpcHRzL3RhbmsnKTtcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJ1xuY29uc3QgQ09OU1RBTlRTID0gcmVxdWlyZSgnLi9zY3JpcHRzL2NvbnN0YW50cycpO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBsZXQgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcbiAgICBjYW52YXNFbC53aWR0aCA9IENPTlNUQU5UUy5ESU1fWDtcbiAgICBjYW52YXNFbC5oZWlnaHQgPSBDT05TVEFOVFMuRElNX1k7XG4gICAgY2FudmFzRWwgPSBjYW52YXNFbC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIFxuICAgIGNvbnN0IGdhbWVCYXNlID0gbmV3IEdhbWUoY2FudmFzRWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKGdhbWVCYXNlLnRhbmsubW92ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgIGxldCBrID0gJyc7XG5cbiAgICAgICAgc3dpdGNoKGUua2V5KSB7XG4gICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgICAgICBrID0gJ2EnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICAgICAgayA9ICdkJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3BhY2UnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIChlLmtleSA9PT0gJ2QnKSB7XG4gICAgICAgIC8vICAgICBrID0gJ2QnO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChlLmtleSA9PT0gJ2EnKSB7XG4gICAgICAgIC8vICAgICBrID0gJ2EnO1xuICAgICAgICAvLyB9XG5cblxuICAgICAgICBnYW1lQmFzZS5hbmltYXRlLmJpbmQoZ2FtZUJhc2UpKGspO1xuICAgIH0pXG4gICAgXG59KSJdLCJuYW1lcyI6WyJHYW1lIiwiQ09OU1RBTlRTIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsIkRJTV9YIiwiaGVpZ2h0IiwiRElNX1kiLCJnZXRDb250ZXh0IiwiZ2FtZUJhc2UiLCJlIiwiayIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJhbmltYXRlIiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/constants.js":
/*!**********************************!*\
  !*** ./src/scripts/constants.js ***!
  \**********************************/
/***/ (function(module) {

eval("module.exports = CONSTANTS = {\n  DIM_X: 1000,\n  DIM_Y: 600,\n  BACKGROUND_COLOR: 'lightblue',\n  PLATFORM_COLOR: 'lightgreen',\n  //tank movement speed\n  SPEED: 3,\n  TANK_COLOR: 'violet',\n  TANK_SIZE: 30,\n  FORCE_BAR_HEIGHT: 50,\n  EMPTY_FORCE: 'gray',\n  FORCE_COLOR: 'red'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jb25zdGFudHMuanMuanMiLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiQ09OU1RBTlRTIiwiRElNX1giLCJESU1fWSIsIkJBQ0tHUk9VTkRfQ09MT1IiLCJQTEFURk9STV9DT0xPUiIsIlNQRUVEIiwiVEFOS19DT0xPUiIsIlRBTktfU0laRSIsIkZPUkNFX0JBUl9IRUlHSFQiLCJFTVBUWV9GT1JDRSIsIkZPUkNFX0NPTE9SIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc190YW5rcy8uL3NyYy9zY3JpcHRzL2NvbnN0YW50cy5qcz83NzhiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gQ09OU1RBTlRTID0ge1xuICAgIERJTV9YIDogMTAwMCxcbiAgICBESU1fWSA6IDYwMCxcbiAgICBCQUNLR1JPVU5EX0NPTE9SIDogJ2xpZ2h0Ymx1ZScsXG4gICAgUExBVEZPUk1fQ09MT1IgOiAnbGlnaHRncmVlbicsXG4gICAgLy90YW5rIG1vdmVtZW50IHNwZWVkXG4gICAgU1BFRUQgOiAzLFxuICAgIFRBTktfQ09MT1IgOiAndmlvbGV0JyxcbiAgICBUQU5LX1NJWkUgOiAzMCxcbiAgICBGT1JDRV9CQVJfSEVJR0hUIDogNTAsXG4gICAgRU1QVFlfRk9SQ0UgOiAnZ3JheScsXG4gICAgRk9SQ0VfQ09MT1IgOiAncmVkJ1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxTQUFTLEdBQUc7RUFDekJDLEtBQUssRUFBRyxJQURpQjtFQUV6QkMsS0FBSyxFQUFHLEdBRmlCO0VBR3pCQyxnQkFBZ0IsRUFBRyxXQUhNO0VBSXpCQyxjQUFjLEVBQUcsWUFKUTtFQUt6QjtFQUNBQyxLQUFLLEVBQUcsQ0FOaUI7RUFPekJDLFVBQVUsRUFBRyxRQVBZO0VBUXpCQyxTQUFTLEVBQUcsRUFSYTtFQVN6QkMsZ0JBQWdCLEVBQUcsRUFUTTtFQVV6QkMsV0FBVyxFQUFHLE1BVlc7RUFXekJDLFdBQVcsRUFBRztBQVhXLENBQTdCIn0=\n//# sourceURL=webpack-internal:///./src/scripts/constants.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform */ \"./src/scripts/platform.js\");\n/* harmony import */ var _tank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tank */ \"./src/scripts/tank.js\");\n\n\n\nconst CONSTANTS = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\");\n\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.start();\n  }\n\n  start() {\n    this.background(this.ctx);\n    this.ground = new _platform__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      width: CONSTANTS.DIM_X,\n      height: CONSTANTS.DIM_Y\n    });\n    this.ground.creatPlatorm(this.ctx, CONSTANTS.PLATFORM_COLOR);\n    const pos = [this.ground.width / 10, this.ground.height - this.ground.height / 5];\n    this.tank = new _tank__WEBPACK_IMPORTED_MODULE_1__[\"default\"](pos);\n    this.tank.drawTank(this.ctx);\n    this.tank.drawForceBar(this.ctx);\n  }\n\n  animate(k) {\n    this.background(this.ctx);\n    this.ground.creatPlatorm(this.ctx, CONSTANTS.PLATFORM_COLOR);\n    this.tank.animate(this.ctx, k);\n  }\n\n  background(ctx) {\n    ctx.fillStyle = CONSTANTS.BACKGROUND_COLOR;\n    ctx.fillRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsTUFBTUUsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLCtDQUFELENBQXpCOztBQUVlLE1BQU1DLElBQU4sQ0FBVztFQUN0QkMsV0FBVyxDQUFFQyxHQUFGLEVBQU87SUFDZCxLQUFLQSxHQUFMLEdBQVdBLEdBQVg7SUFDQSxLQUFLQyxLQUFMO0VBQ0g7O0VBRURBLEtBQUssR0FBRztJQUNKLEtBQUtDLFVBQUwsQ0FBZ0IsS0FBS0YsR0FBckI7SUFDQSxLQUFLRyxNQUFMLEdBQWMsSUFBSVQsaURBQUosQ0FBYTtNQUFDVSxLQUFLLEVBQUVSLFNBQVMsQ0FBQ1MsS0FBbEI7TUFBeUJDLE1BQU0sRUFBRVYsU0FBUyxDQUFDVztJQUEzQyxDQUFiLENBQWQ7SUFDQSxLQUFLSixNQUFMLENBQVlLLFlBQVosQ0FBeUIsS0FBS1IsR0FBOUIsRUFBbUNKLFNBQVMsQ0FBQ2EsY0FBN0M7SUFFQSxNQUFNQyxHQUFHLEdBQUcsQ0FBQyxLQUFLUCxNQUFMLENBQVlDLEtBQVosR0FBb0IsRUFBckIsRUFBeUIsS0FBS0QsTUFBTCxDQUFZRyxNQUFaLEdBQXFCLEtBQUtILE1BQUwsQ0FBWUcsTUFBWixHQUFxQixDQUFuRSxDQUFaO0lBQ0EsS0FBS0ssSUFBTCxHQUFZLElBQUloQiw2Q0FBSixDQUFTZSxHQUFULENBQVo7SUFDQSxLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUIsS0FBS1osR0FBeEI7SUFDQSxLQUFLVyxJQUFMLENBQVVFLFlBQVYsQ0FBdUIsS0FBS2IsR0FBNUI7RUFDSDs7RUFFRGMsT0FBTyxDQUFDQyxDQUFELEVBQUk7SUFDUCxLQUFLYixVQUFMLENBQWdCLEtBQUtGLEdBQXJCO0lBQ0EsS0FBS0csTUFBTCxDQUFZSyxZQUFaLENBQXlCLEtBQUtSLEdBQTlCLEVBQW1DSixTQUFTLENBQUNhLGNBQTdDO0lBQ0EsS0FBS0UsSUFBTCxDQUFVRyxPQUFWLENBQWtCLEtBQUtkLEdBQXZCLEVBQTRCZSxDQUE1QjtFQUNIOztFQUVEYixVQUFVLENBQUNGLEdBQUQsRUFBTTtJQUNaQSxHQUFHLENBQUNnQixTQUFKLEdBQWdCcEIsU0FBUyxDQUFDcUIsZ0JBQTFCO0lBQ0FqQixHQUFHLENBQUNrQixRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQnRCLFNBQVMsQ0FBQ1MsS0FBN0IsRUFBb0NULFNBQVMsQ0FBQ1csS0FBOUM7RUFDSDs7QUExQnFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfdGFua3MvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXRmb3JtIGZyb20gJy4vcGxhdGZvcm0nXG5pbXBvcnQgVGFuayBmcm9tIFwiLi90YW5rXCJcbmNvbnN0IENPTlNUQU5UUyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yIChjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG4gICAgXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCh0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMuZ3JvdW5kID0gbmV3IFBsYXRmb3JtKHt3aWR0aDogQ09OU1RBTlRTLkRJTV9YLCBoZWlnaHQ6IENPTlNUQU5UUy5ESU1fWX0pO1xuICAgICAgICB0aGlzLmdyb3VuZC5jcmVhdFBsYXRvcm0odGhpcy5jdHgsIENPTlNUQU5UUy5QTEFURk9STV9DT0xPUik7XG5cbiAgICAgICAgY29uc3QgcG9zID0gW3RoaXMuZ3JvdW5kLndpZHRoIC8gMTAsIHRoaXMuZ3JvdW5kLmhlaWdodCAtIHRoaXMuZ3JvdW5kLmhlaWdodCAvIDVdO1xuICAgICAgICB0aGlzLnRhbmsgPSBuZXcgVGFuayhwb3MpO1xuICAgICAgICB0aGlzLnRhbmsuZHJhd1RhbmsodGhpcy5jdHgpO1xuICAgICAgICB0aGlzLnRhbmsuZHJhd0ZvcmNlQmFyKHRoaXMuY3R4KTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGspIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kKHRoaXMuY3R4KVxuICAgICAgICB0aGlzLmdyb3VuZC5jcmVhdFBsYXRvcm0odGhpcy5jdHgsIENPTlNUQU5UUy5QTEFURk9STV9DT0xPUilcbiAgICAgICAgdGhpcy50YW5rLmFuaW1hdGUodGhpcy5jdHgsIGspXG4gICAgfVxuXG4gICAgYmFja2dyb3VuZChjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IENPTlNUQU5UUy5CQUNLR1JPVU5EX0NPTE9SO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgQ09OU1RBTlRTLkRJTV9YLCBDT05TVEFOVFMuRElNX1kpO1xuICAgIH1cblxufSJdLCJuYW1lcyI6WyJQbGF0Zm9ybSIsIlRhbmsiLCJDT05TVEFOVFMiLCJyZXF1aXJlIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY3R4Iiwic3RhcnQiLCJiYWNrZ3JvdW5kIiwiZ3JvdW5kIiwid2lkdGgiLCJESU1fWCIsImhlaWdodCIsIkRJTV9ZIiwiY3JlYXRQbGF0b3JtIiwiUExBVEZPUk1fQ09MT1IiLCJwb3MiLCJ0YW5rIiwiZHJhd1RhbmsiLCJkcmF3Rm9yY2VCYXIiLCJhbmltYXRlIiwiayIsImZpbGxTdHlsZSIsIkJBQ0tHUk9VTkRfQ09MT1IiLCJmaWxsUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/moveObject.js":
/*!***********************************!*\
  !*** ./src/scripts/moveObject.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MoveObject; }\n/* harmony export */ });\nconst CONSTANTS = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\");\n\nclass MoveObject {\n  constructor(obj) {\n    this.pos = obj.pos;\n    this.vel = obj.vel;\n    this.color = obj.color;\n  }\n\n  move(key) {\n    // ctx.clearRect(this.pos[0], this.pos[1], 50, -50);\n    if (key === 'a') this.pos[0] -= this.vel;\n    if (key === 'd') this.pos[0] += this.vel;\n    if (this.pos[0] > CONSTANTS.DIM_X - CONSTANTS.TANK_SIZE) this.move('a');\n    if (this.pos[0] < 0) this.move('d');\n  }\n\n} // module.exports = MoveObject;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3ZlT2JqZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUdDLG1CQUFPLENBQUMsK0NBQUQsQ0FBekI7O0FBRWUsTUFBTUMsVUFBTixDQUFpQjtFQUM1QkMsV0FBVyxDQUFDQyxHQUFELEVBQU07SUFDYixLQUFLQyxHQUFMLEdBQVdELEdBQUcsQ0FBQ0MsR0FBZjtJQUNBLEtBQUtDLEdBQUwsR0FBV0YsR0FBRyxDQUFDRSxHQUFmO0lBQ0EsS0FBS0MsS0FBTCxHQUFhSCxHQUFHLENBQUNHLEtBQWpCO0VBQ0g7O0VBRURDLElBQUksQ0FBQ0MsR0FBRCxFQUFNO0lBQ047SUFDQSxJQUFJQSxHQUFHLEtBQUssR0FBWixFQUFpQixLQUFLSixHQUFMLENBQVMsQ0FBVCxLQUFlLEtBQUtDLEdBQXBCO0lBQ2pCLElBQUlHLEdBQUcsS0FBSyxHQUFaLEVBQWlCLEtBQUtKLEdBQUwsQ0FBUyxDQUFULEtBQWUsS0FBS0MsR0FBcEI7SUFDakIsSUFBSSxLQUFLRCxHQUFMLENBQVMsQ0FBVCxJQUFjTCxTQUFTLENBQUNVLEtBQVYsR0FBa0JWLFNBQVMsQ0FBQ1csU0FBOUMsRUFBeUQsS0FBS0gsSUFBTCxDQUFVLEdBQVY7SUFDekQsSUFBSSxLQUFLSCxHQUFMLENBQVMsQ0FBVCxJQUFjLENBQWxCLEVBQXFCLEtBQUtHLElBQUwsQ0FBVSxHQUFWO0VBQ3hCOztBQWIyQixFQWdCaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc190YW5rcy8uL3NyYy9zY3JpcHRzL21vdmVPYmplY3QuanM/YjcyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDT05TVEFOVFMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZlT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICAgICAgdGhpcy5wb3MgPSBvYmoucG9zO1xuICAgICAgICB0aGlzLnZlbCA9IG9iai52ZWw7XG4gICAgICAgIHRoaXMuY29sb3IgPSBvYmouY29sb3I7XG4gICAgfVxuXG4gICAgbW92ZShrZXkpIHtcbiAgICAgICAgLy8gY3R4LmNsZWFyUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDUwLCAtNTApO1xuICAgICAgICBpZiAoa2V5ID09PSAnYScpIHRoaXMucG9zWzBdIC09IHRoaXMudmVsO1xuICAgICAgICBpZiAoa2V5ID09PSAnZCcpIHRoaXMucG9zWzBdICs9IHRoaXMudmVsO1xuICAgICAgICBpZiAodGhpcy5wb3NbMF0gPiBDT05TVEFOVFMuRElNX1ggLSBDT05TVEFOVFMuVEFOS19TSVpFKSB0aGlzLm1vdmUoJ2EnKTtcbiAgICAgICAgaWYgKHRoaXMucG9zWzBdIDwgMCkgdGhpcy5tb3ZlKCdkJyk7XG4gICAgfVxufVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IE1vdmVPYmplY3Q7Il0sIm5hbWVzIjpbIkNPTlNUQU5UUyIsInJlcXVpcmUiLCJNb3ZlT2JqZWN0IiwiY29uc3RydWN0b3IiLCJvYmoiLCJwb3MiLCJ2ZWwiLCJjb2xvciIsIm1vdmUiLCJrZXkiLCJESU1fWCIsIlRBTktfU0laRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/moveObject.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tank; }\n/* harmony export */ });\n/* harmony import */ var _moveObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moveObject.js */ \"./src/scripts/moveObject.js\");\n// const MoveObject = require('./moveObject');\n\n\nconst CONSTANTS = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\");\n\nclass Tank extends _moveObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(pos) {\n    super({\n      pos: pos,\n      vel: CONSTANTS.SPEED,\n      color: CONSTANTS.TANK_COLOR\n    });\n  }\n\n  animate(ctx, k) {\n    this.drawForceBar(ctx);\n    this.move(k);\n    this.drawTank(ctx);\n  }\n\n  drawTank(ctx) {\n    ctx.fillStyle = CONSTANTS.TANK_COLOR;\n    const size = CONSTANTS.TANK_SIZE;\n    ctx.fillRect(this.pos[0], this.pos[1], size, -size);\n  }\n\n  drawForceBar(ctx) {\n    ctx.fillStyle = CONSTANTS.EMPTY_FORCE;\n    const length = CONSTANTS.DIM_X - CONSTANTS.DIM_X / 10 * 2;\n    ctx.fillRect(CONSTANTS.DIM_X / 10, CONSTANTS.DIM_Y / 10, length, CONSTANTS.FORCE_BAR_HEIGHT); // charges the forceBar when space is pressed\n\n    this.charge(ctx, 1);\n  } // When spaced is pressed fills up the force bar\n\n\n  charge(ctx, power) {\n    ctx.fillStyle = CONSTANTS.FORCE_COLOR;\n    const force = CONSTANTS.DIM_X / 100;\n    ctx.fillRect(CONSTANTS.DIM_X / 10, CONSTANTS.DIM_Y / 10, force * power, CONSTANTS.FORCE_BAR_HEIGHT);\n  }\n\n} // module.exports = Tank;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90YW5rLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLG1CQUFPLENBQUMsK0NBQUQsQ0FBekI7O0FBRWUsTUFBTUMsSUFBTixTQUFtQkgsc0RBQW5CLENBQThCO0VBQ3pDSSxXQUFXLENBQUNDLEdBQUQsRUFBTTtJQUNiLE1BQU07TUFBQ0EsR0FBRyxFQUFFQSxHQUFOO01BQVdDLEdBQUcsRUFBRUwsU0FBUyxDQUFDTSxLQUExQjtNQUFpQ0MsS0FBSyxFQUFFUCxTQUFTLENBQUNRO0lBQWxELENBQU47RUFDSDs7RUFFREMsT0FBTyxDQUFDQyxHQUFELEVBQU1DLENBQU4sRUFBUztJQUNaLEtBQUtDLFlBQUwsQ0FBa0JGLEdBQWxCO0lBQ0EsS0FBS0csSUFBTCxDQUFVRixDQUFWO0lBQ0EsS0FBS0csUUFBTCxDQUFjSixHQUFkO0VBQ0g7O0VBRURJLFFBQVEsQ0FBQ0osR0FBRCxFQUFNO0lBQ1ZBLEdBQUcsQ0FBQ0ssU0FBSixHQUFnQmYsU0FBUyxDQUFDUSxVQUExQjtJQUNBLE1BQU1RLElBQUksR0FBR2hCLFNBQVMsQ0FBQ2lCLFNBQXZCO0lBQ0FQLEdBQUcsQ0FBQ1EsUUFBSixDQUFhLEtBQUtkLEdBQUwsQ0FBUyxDQUFULENBQWIsRUFBMEIsS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FBMUIsRUFBdUNZLElBQXZDLEVBQTZDLENBQUNBLElBQTlDO0VBQ0g7O0VBRURKLFlBQVksQ0FBQ0YsR0FBRCxFQUFNO0lBQ2RBLEdBQUcsQ0FBQ0ssU0FBSixHQUFnQmYsU0FBUyxDQUFDbUIsV0FBMUI7SUFDQSxNQUFNQyxNQUFNLEdBQUdwQixTQUFTLENBQUNxQixLQUFWLEdBQW1CckIsU0FBUyxDQUFDcUIsS0FBVixHQUFrQixFQUFuQixHQUF5QixDQUExRDtJQUNBWCxHQUFHLENBQUNRLFFBQUosQ0FBYWxCLFNBQVMsQ0FBQ3FCLEtBQVYsR0FBa0IsRUFBL0IsRUFBbUNyQixTQUFTLENBQUNzQixLQUFWLEdBQWtCLEVBQXJELEVBQXlERixNQUF6RCxFQUFpRXBCLFNBQVMsQ0FBQ3VCLGdCQUEzRSxFQUhjLENBS2Q7O0lBQ0EsS0FBS0MsTUFBTCxDQUFZZCxHQUFaLEVBQWlCLENBQWpCO0VBRUgsQ0F6QndDLENBMkJ6Qzs7O0VBQ0FjLE1BQU0sQ0FBQ2QsR0FBRCxFQUFNZSxLQUFOLEVBQWE7SUFDZmYsR0FBRyxDQUFDSyxTQUFKLEdBQWdCZixTQUFTLENBQUMwQixXQUExQjtJQUNBLE1BQU1DLEtBQUssR0FBRzNCLFNBQVMsQ0FBQ3FCLEtBQVYsR0FBa0IsR0FBaEM7SUFDQVgsR0FBRyxDQUFDUSxRQUFKLENBQWFsQixTQUFTLENBQUNxQixLQUFWLEdBQWtCLEVBQS9CLEVBQW1DckIsU0FBUyxDQUFDc0IsS0FBVixHQUFrQixFQUFyRCxFQUF5REssS0FBSyxHQUFHRixLQUFqRSxFQUF3RXpCLFNBQVMsQ0FBQ3VCLGdCQUFsRjtFQUNIOztBQWhDd0MsRUFvQzdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfdGFua3MvLi9zcmMvc2NyaXB0cy90YW5rLmpzP2ZjNzYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgTW92ZU9iamVjdCA9IHJlcXVpcmUoJy4vbW92ZU9iamVjdCcpO1xuaW1wb3J0IE1vdmVPYmplY3QgZnJvbSAnLi9tb3ZlT2JqZWN0LmpzJztcbmNvbnN0IENPTlNUQU5UUyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhbmsgZXh0ZW5kcyBNb3ZlT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihwb3MpIHtcbiAgICAgICAgc3VwZXIoe3BvczogcG9zLCB2ZWw6IENPTlNUQU5UUy5TUEVFRCwgY29sb3I6IENPTlNUQU5UUy5UQU5LX0NPTE9SfSk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZShjdHgsIGspIHtcbiAgICAgICAgdGhpcy5kcmF3Rm9yY2VCYXIoY3R4KTtcbiAgICAgICAgdGhpcy5tb3ZlKGspO1xuICAgICAgICB0aGlzLmRyYXdUYW5rKGN0eClcbiAgICB9XG5cbiAgICBkcmF3VGFuayhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IENPTlNUQU5UUy5UQU5LX0NPTE9SO1xuICAgICAgICBjb25zdCBzaXplID0gQ09OU1RBTlRTLlRBTktfU0laRTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgc2l6ZSwgLXNpemUpO1xuICAgIH1cblxuICAgIGRyYXdGb3JjZUJhcihjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IENPTlNUQU5UUy5FTVBUWV9GT1JDRTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gQ09OU1RBTlRTLkRJTV9YIC0gKENPTlNUQU5UUy5ESU1fWCAvIDEwKSAqIDI7XG4gICAgICAgIGN0eC5maWxsUmVjdChDT05TVEFOVFMuRElNX1ggLyAxMCwgQ09OU1RBTlRTLkRJTV9ZIC8gMTAsIGxlbmd0aCwgQ09OU1RBTlRTLkZPUkNFX0JBUl9IRUlHSFQpO1xuXG4gICAgICAgIC8vIGNoYXJnZXMgdGhlIGZvcmNlQmFyIHdoZW4gc3BhY2UgaXMgcHJlc3NlZFxuICAgICAgICB0aGlzLmNoYXJnZShjdHgsIDEpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLy8gV2hlbiBzcGFjZWQgaXMgcHJlc3NlZCBmaWxscyB1cCB0aGUgZm9yY2UgYmFyXG4gICAgY2hhcmdlKGN0eCwgcG93ZXIpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IENPTlNUQU5UUy5GT1JDRV9DT0xPUjtcbiAgICAgICAgY29uc3QgZm9yY2UgPSBDT05TVEFOVFMuRElNX1ggLyAxMDA7XG4gICAgICAgIGN0eC5maWxsUmVjdChDT05TVEFOVFMuRElNX1ggLyAxMCwgQ09OU1RBTlRTLkRJTV9ZIC8gMTAsIGZvcmNlICogcG93ZXIsIENPTlNUQU5UUy5GT1JDRV9CQVJfSEVJR0hUKTtcbiAgICB9XG5cbn1cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBUYW5rOyJdLCJuYW1lcyI6WyJNb3ZlT2JqZWN0IiwiQ09OU1RBTlRTIiwicmVxdWlyZSIsIlRhbmsiLCJjb25zdHJ1Y3RvciIsInBvcyIsInZlbCIsIlNQRUVEIiwiY29sb3IiLCJUQU5LX0NPTE9SIiwiYW5pbWF0ZSIsImN0eCIsImsiLCJkcmF3Rm9yY2VCYXIiLCJtb3ZlIiwiZHJhd1RhbmsiLCJmaWxsU3R5bGUiLCJzaXplIiwiVEFOS19TSVpFIiwiZmlsbFJlY3QiLCJFTVBUWV9GT1JDRSIsImxlbmd0aCIsIkRJTV9YIiwiRElNX1kiLCJGT1JDRV9CQVJfSEVJR0hUIiwiY2hhcmdlIiwicG93ZXIiLCJGT1JDRV9DT0xPUiIsImZvcmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/tank.js\n");

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