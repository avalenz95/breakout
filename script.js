
// DOM REFERENCES
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// CONSTANTS - Do not change over the course of the program
const ballRadius = 10;
const paddleHeight = 10;
const paddleWidth = 75;
const brickRowCount = 5;
const brickColumnCount = 3;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
const paddleXStart = (canvas.width - paddleWidth) / 2;
const PI2 = Math.PI * 2;
const objectColor = '#0095DD';

// Variables - change over the course of the program
let x;
let y;
let dx;
let dy;
let paddleX;
let ball = {
  x : 0,
  y: 0,
  dx: 0,
  dy: 0,
  render : function(ctx) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ballRadius, 0, PI2);
    ctx.fillStyle = objectColor;
    ctx.fill();
    ctx.closePath();
  },
}

resetBallandPaddle();

let rightPressed = false;
let leftPressed = false;
let score = 0;
let lives = 3;


// Brick Setup
const bricks = [];
for (let c = 0; c < brickColumnCount; c += 1) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r += 1) {
    const brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;
    const brickY = (c * (brickHeight + brickPadding)) + brickOffsetTop;

    bricks[c][r] = {
      bx: brickX,
      by: brickY,
      status: 1,
    };
  }
}

// Functions - reusable code


// Key handlers

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
    paddleX = relativeX - paddleWidth / 2;
  }
}
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      const brick = bricks[c][r];
      if (brick.status === 1) {
        if (ball.x > brick.bx && x < brick.bx + brickWidth && ball.y > brick.by && ball.y < brick.by + brickHeight) {
          ball.dy = -ball.dy;
          brick.status = 0;
          score += 1;
          if (score === brickRowCount * brickColumnCount) {
            alert('YOU WIN, CONGRATS!');
            document.location.reload(); 
          }
        }
      }
    }
  }
}

// Register Events
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

function moveBall() {
  ball.x += dx;
  ball.y += dy;
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ballRadius, 0, PI2);
  ctx.fillStyle = objectColor;
  ctx.fill();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = objectColor;
  ctx.fill();
  ctx.closePath();
}

function drawBricks(ctx) {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      const { bx, by, status } = bricks[c][r]; // object deconstruction

      if (status === 1) {
        ctx.beginPath();
        ctx.rect(bx, by, brickWidth, brickHeight);
        ctx.fillStyle = objectColor;
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function drawScore(ctx) {
  ctx.font = '16px Arial';
  ctx.fillStyle = objectColor;
  ctx.fillText(`Score: ${score}`, 8, 20);
}

function drawLives() {
  ctx.font = '16px Arial';
  ctx.fillStyle = objectColor;
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}

function resetBallandPaddle() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height - 30;
  ball.dx = 3;
  ball.dy = -3;
  paddleX = paddleXStart;
}

// Game loop - calls all render functions

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks(ctx);
  ball.render(ctx);
  drawPaddle(ctx);
  drawScore(ctx);
  drawLives();
  collisionDetection();
  moveBall();

  if (ball.x + ball.dx > canvas.width - ballRadius || ball.x + ball.dx < ballRadius) {
    ball.dx = -ball.dx;
  }
  if (ball.y + ball.dy < ballRadius) {
    ball.dy = -ball.dy;
  } else if (ball.y + ball.dy > canvas.height - ballRadius) {
    if (ball.x > paddleX && ball.x < paddleX + paddleWidth) {
      ball.dy = -ball.dy;
    } else {
      lives -= 1;
      if (!lives) {
        alert('GAME OVER');
        document.location.reload();
      } else {
        resetBallandPaddle();
      }
    }
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  // Draws screen
  requestAnimationFrame(draw);
}

draw();
