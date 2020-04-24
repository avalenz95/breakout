/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ball.js":
/*!*********************!*\
  !*** ./src/ball.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Ball {\n  // Creates instance of ball\n  constructor(x, y, dx = 2, dy = -1, radius = 10, color = '#ffffff') {\n    this.x = x;\n    this.y = y;\n    this.dx = dx;\n    this.dy = dy;\n    this.radius = radius;\n    this.color = color;\n  }\n\n  // Change positon of ball's x and y\n  move() {\n    this.x += this.dx;\n    this.y += this.dy;\n  }\n\n  // Renders ball with a given context\n  render(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n    ctx.fillStyle = this.color;\n    ctx.strokeStyle = this.stroke;\n    ctx.lineWidth = 2;\n    ctx.fill();\n    ctx.stroke();\n    ctx.closePath();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n\n\n//# sourceURL=webpack:///./src/ball.js?");

/***/ }),

/***/ "./src/brick.js":
/*!**********************!*\
  !*** ./src/brick.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Brick {\n  // Init brick object\n  constructor(x, y, width = 75, height = 20, color) {\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n    this.color = color;\n    this.status = 1;\n  }\n\n  // Render brick\n  render(ctx) {\n    ctx.beginPath();\n    ctx.rect(this.x, this.y, this.width, this.height);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.closePath();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Brick);\n\n\n//# sourceURL=webpack:///./src/brick.js?");

/***/ }),

/***/ "./src/bricks.js":
/*!***********************!*\
  !*** ./src/bricks.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brick */ \"./src/brick.js\");\n\n\nconst brickWidth = 75;\nconst brickHeight = 20;\nconst brickPadding = 10;\nconst brickOffsetTop = 30;\nconst brickOffsetLeft = 30;\nconst brickColor = '#0F9B8E';\n\nclass Bricks {\n  constructor(cols, rows) {\n    this.cols = cols;\n    this.rows = rows;\n    this.bricks = [];\n    this.init();\n  }\n\n  init() {\n    for (let c = 0; c < this.cols; c += 1) {\n      this.bricks[c] = [];\n      for (let r = 0; r < this.rows; r += 1) {\n        const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;\n        const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;\n        this.bricks[c][r] = new _brick__WEBPACK_IMPORTED_MODULE_0__[\"default\"](brickX, brickY, brickWidth, brickHeight, brickColor);\n      }\n    }\n  }\n\n  render(ctx) {\n    for (let c = 0; c < this.cols; c += 1) {\n      for (let r = 0; r < this.rows; r += 1) {\n        const brick = this.bricks[c][r];\n        if (brick.status === 1) {\n          brick.render(ctx);\n        }\n      }\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bricks);\n\n\n//# sourceURL=webpack:///./src/bricks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball */ \"./src/ball.js\");\n/* harmony import */ var _bricks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bricks */ \"./src/bricks.js\");\n/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paddle */ \"./src/paddle.js\");\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./score */ \"./src/score.js\");\n/* harmony import */ var _lives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lives */ \"./src/lives.js\");\n/* eslint-disable max-classes-per-file */\n\n\n\n\n\n\n// DOM REFERENCES\nconst canvas = document.getElementById('myCanvas');\nconst ctx = canvas.getContext('2d');\n\n// CONSTANTS - Do not change over the course of the program\nconst paddleHeight = 10;\nconst paddleWidth = 75;\nconst brickRowCount = 3;\nconst brickColumnCount = 5;\nconst brickWidth = 75;\nconst brickHeight = 20;\nconst paddleXStart = (canvas.width - paddleWidth) / 2;\nconst paddleYStart = (canvas.height - 12);\nconst objectColor = '#0095DD';\n\nconst canvasWidth = canvas.width;\nconst canvasHeight = canvas.height;\n\n\nconst livesPosition = canvasWidth / 2;\n\nconst ball = new _ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst paddle = new _paddle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](paddleXStart, paddleYStart, paddleWidth, paddleHeight, objectColor);\n\nconst score = new _score__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nconst lives = new _lives__WEBPACK_IMPORTED_MODULE_4__[\"default\"](0, livesPosition, 4, objectColor);\nlet rightPressed = false;\nlet leftPressed = false;\n\nconst bricks = new _bricks__WEBPACK_IMPORTED_MODULE_1__[\"default\"](brickColumnCount, brickRowCount);\n\nfunction collisionDetection() {\n  for (let c = 0; c < bricks.cols; c += 1) {\n    for (let r = 0; r < bricks.rows; r += 1) {\n      const brick = bricks[c][r];\n      if (brick.status === 1) {\n        // eslint-disable-next-line max-len\n        if (ball.x > brick.bx && ball.x < brick.bx + brickWidth && ball.y > brick.by && ball.y < brick.by + brickHeight) {\n          ball.dy = -ball.dy;\n          brick.status = 0;\n          score.increase();\n          if (score === brick.rows * bricks.cols) {\n            document.location.reload();\n          }\n        }\n      }\n    }\n  }\n}\n\nfunction movePaddle() {\n  if (rightPressed && paddle.x < paddle.width) {\n    paddle.x += 5;\n  } else if (leftPressed && paddle.x > 0) {\n    paddle.x -= 5;\n  }\n}\n\nfunction resetBallAndPaddle() {\n  ball.x = canvasWidth / 2;\n  ball.y = canvasHeight / 3;\n  ball.dx = 2;\n  ball.dy = -2;\n  paddle.x = paddleXStart;\n}\n\nfunction collisionsWithCanvasAndPaddle() {\n  if (ball.x + ball.dx > canvasWidth - ball.radius || ball.x + ball.dx < ball.radius) {\n    ball.dx = -ball.dx;\n  }\n\n  if (ball.y + ball.dy < ball.radius) {\n    ball.dy = -ball.dy;\n  } else if (ball.y + ball.dy > canvasHeight - ball.radius) {\n    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {\n      ball.dy = -ball.dy;\n    } else {\n      // Lose a life\n      lives.decrease();\n      if (!lives) {\n        ball.x = 200;\n        ball.y = 200;\n      } else {\n        resetBallAndPaddle();\n      }\n    }\n  }\n}\n\n// Game Loop\nfunction draw() {\n  // Clear the canvas\n  ctx.clearRect(0, 0, canvasWidth, canvasHeight);\n  // Call helper functions\n  ball.render(ctx);\n  paddle.render(ctx);\n  score.render(ctx);\n  lives.render(ctx);\n  bricks.render(ctx);\n  collisionDetection();\n  ball.move(ctx);\n  movePaddle();\n  collisionsWithCanvasAndPaddle();\n\n  // Draw the screen again\n  requestAnimationFrame(draw);\n}\n\nfunction keyDownHandler(e) {\n  if (e.key === 'Right' || e.key === 'ArrowRight') {\n    rightPressed = true;\n  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n    leftPressed = true;\n  }\n}\n\nfunction keyUpHandler(e) {\n  if (e.key === 'Right' || e.key === 'ArrowRight') {\n    rightPressed = false;\n  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n    leftPressed = false;\n  }\n}\n\nfunction mouseMoveHandler(e) {\n  const relativeX = e.clientX - canvas.offsetLeft;\n  if (relativeX > 0 && relativeX < canvas.width) {\n    paddle.x = relativeX - paddleWidth / 2;\n  }\n}\n\ndocument.addEventListener('keydown', keyDownHandler, false);\ndocument.addEventListener('keyup', keyUpHandler, false);\ndocument.addEventListener('mousemove', mouseMoveHandler, false);\n\ndraw();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lives.js":
/*!**********************!*\
  !*** ./src/lives.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Lives {\n  constructor(x, y, lives = 3, color = '#000000', font = '16px Arial') {\n    this.x = x;\n    this.y = y;\n    this.lives = lives;\n    this.color = color;\n    this.font = font;\n  }\n\n  decrease() {\n    this.lives -= 1;\n  }\n\n  render(ctx) {\n    ctx.font = this.font;\n    ctx.fillStyle = this.color;\n    ctx.fillText(`Lives: ${this.lives}`, this.y, 20);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lives);\n\n\n//# sourceURL=webpack:///./src/lives.js?");

/***/ }),

/***/ "./src/paddle.js":
/*!***********************!*\
  !*** ./src/paddle.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Paddle {\n  constructor(x, y, width = 75, height = 10, color) {\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n    this.color = color;\n  }\n\n  render(ctx) {\n    ctx.beginPath();\n    ctx.rect(this.x, this.y, this.width, this.height);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.stroke();\n    ctx.closePath();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Paddle);\n\n\n//# sourceURL=webpack:///./src/paddle.js?");

/***/ }),

/***/ "./src/score.js":
/*!**********************!*\
  !*** ./src/score.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Score {\n  constructor(x, y, score = 0, color = '#0000', font = '16px Arial') {\n    this.x = x;\n    this.y = y;\n    this.score = score;\n    this.color = color;\n    this.font = font;\n  }\n\n  increase() {\n    this.score += 1;\n  }\n\n  render(ctx) {\n    ctx.font = this.font;\n    ctx.fillStyle = this.color;\n    ctx.fillText(`Score: ${this.score}`, 8, 20);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Score);\n\n\n//# sourceURL=webpack:///./src/score.js?");

/***/ })

/******/ });