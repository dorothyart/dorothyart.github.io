document.getElementsByTagName("h1")[0].style.fontSize = "6vw";const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Set canvas size to match parent container
canvas.width = canvas.parentNode.clientWidth;
canvas.height = canvas.parentNode.clientHeight;

// Handle window resize to update canvas size
window.addEventListener("resize", () => {
  canvas.width = canvas.parentNode.clientWidth;
  canvas.height = canvas.parentNode.clientHeight;
});

// Set up event listeners for drawing
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});
canvas.addEventListener('mouseout', () => {
  isDrawing = false;
});

// Handle tool selection
const toolButtons = document.querySelectorAll("#toolbar button");
toolButtons.forEach((button

