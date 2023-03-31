document.getElementsByTagName("h1")[0].style.fontSize = "6vw";const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let brushSize = 10;
let eraserSize = 10;
let currentTool = "pencil";

// Set canvas size to match parent container
canvas.width = canvas.parentNode.clientWidth;
canvas.height = canvas.parentNode.clientHeight;

// Handle window resize to update canvas size
window.addEventListener("resize", () => {
  canvas.width = canvas.parentNode.clientWidth;
  canvas.height = canvas.parentNode.clientHeight;
});

// Set up event listeners for drawing
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

// Handle tool selection
const toolButtons = document.querySelectorAll("#toolbar button");
toolButtons.forEach((button
