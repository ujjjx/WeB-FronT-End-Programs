const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const blockSize = 20;
const canvasSize = 400;
let snake = [{ x: 10, y: 10 }];
let food = { x: 15, y: 10 };
let dx = 0;
let dy = 0;
let gameOver = false;

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  if (gameOver) return;

  switch (event.key) {
    case 'ArrowUp':
      if (dy !== 1) {
        dx = 0;
        dy = -1;
      }
      break;
    case 'ArrowDown':
      if (dy !== -1) {
        dx = 0;
        dy = 1;
      }
      break;
    case 'ArrowLeft':
      if (dx !== 1) {
        dx = -1;
        dy = 0;
      }
      break;
    case 'ArrowRight':
      if (dx !== -1) {
        dx = 1;
        dy = 0;
      }
      break;
  }
}

function draw() {
  // Clear canvas
  ctx.clearRect(0, 0, canvasSize, canvasSize);

  // Draw snake
  ctx.fillStyle = 'green';
  snake.forEach(segment => {
    ctx.fillRect(segment.x * blockSize, segment.y * blockSize, blockSize, blockSize);
  });

  // Draw food
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x * blockSize, food.y * blockSize, blockSize, blockSize);
}

function update() {
  // Move snake
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);

  // Check if snake eats food
  if (head.x === food.x && head.y === food.y) {
    generateFood();
  } else {
    snake.pop();
  }

  // Check for game over conditions
  if (head.x < 0) head.x = canvasSize / blockSize - 1;
  if (head.x >= canvasSize / blockSize) head.x = 0;
  if (head.y < 0) head.y = canvasSize / blockSize - 1;
  if (head.y >= canvasSize / blockSize) head.y = 0;

  if (checkCollision()) {
    gameOver = true;
    clearInterval(gameLoop);
    alert('Game Over!');
  }
}

function generateFood() {
  food.x = Math.floor(Math.random() * (canvasSize / blockSize));
  food.y = Math.floor(Math.random() * (canvasSize / blockSize));
}

function main() {
  if (!gameOver) {
    update();
    draw();
  }
}

function checkCollision() {
  const head = snake[0];
  return snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
}

generateFood();
const gameLoop = setInterval(main, 100);
