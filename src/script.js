/* eslint-disable max-classes-per-file */
import Ball from './ball';
import Bricks from './bricks';
import Paddle from './paddle';
import Score from './score';
import Lives from './lives';

// DOM REFERENCES
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// CONSTANTS - Do not change over the course of the program
const paddleHeight = 10;
const paddleWidth = 75;
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const paddleXStart = (canvas.width - paddleWidth) / 2;
const paddleYStart = (canvas.height - 12);
const objectColor = '#0095DD';

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;


const livesPosition = canvasWidth / 2;

const ball = new Ball();
const paddle = new Paddle(paddleXStart, paddleYStart, paddleWidth, paddleHeight, 'black', objectColor);

const score = new Score();
const lives = new Lives(0, livesPosition, 4, objectColor);
let rightPressed = false;
let leftPressed = false;

const bricks = new Bricks(brickColumnCount, brickRowCount);

function collisionDetection() {
  for (let c = 0; c < bricks.cols; c += 1) {
    for (let r = 0; r < bricks.rows; r += 1) {
      const brick = bricks[c][r];
      if (brick.status === 1) {
        // eslint-disable-next-line max-len
        if (ball.x > brick.bx && ball.x < brick.bx + brickWidth && ball.y > brick.by && ball.y < brick.by + brickHeight) {
          ball.dy = -ball.dy;
          brick.status = 0;
          score.increase();
          if (score === brick.rows * bricks.cols) {
            document.location.reload();
          }
        }
      }
    }
  }
}

function movePaddle() {
  if (rightPressed && paddle.x < paddle.width) {
    paddle.x += 5;
  } else if (leftPressed && paddle.x > 0) {
    paddle.x -= 5;
  }
}

function resetBallAndPaddle() {
  ball.x = canvasWidth / 2;
  ball.y = canvasHeight / 3;
  ball.dx = 2;
  ball.dy = -2;
  paddle.x = paddleXStart;
}

function collisionsWithCanvasAndPaddle() {
  if (ball.x + ball.dx > canvasWidth - ball.radius || ball.x + ball.dx < ball.radius) {
    ball.dx = -ball.dx;
  }

  if (ball.y + ball.dy < ball.radius) {
    ball.dy = -ball.dy;
  } else if (ball.y + ball.dy > canvasHeight - ball.radius) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.dy = -ball.dy;
    } else {
      // Lose a life
      lives.decrease();
      if (!lives) {
        ball.x = 200;
        ball.y = 200;
      } else {
        resetBallAndPaddle();
      }
    }
  }
}

// Game Loop
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  // Call helper functions
  ball.render(ctx);
  paddle.render(ctx);
  score.render(ctx);
  lives.render(ctx);
  bricks.render(ctx);
  collisionDetection();
  ball.move(ctx);
  movePaddle();
  collisionsWithCanvasAndPaddle();

  // Draw the screen again
  requestAnimationFrame(draw);
}

function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
}

function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddle.x = relativeX - paddleWidth / 2;
  }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

draw();
