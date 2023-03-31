document.getElementsByTagName("h1")[0].style.fontSize = "6vw";const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
});

canvas.addEventListener('mousemove', (event) => {
    if (isDrawing) {
        const currentX = event.offsetX;
        const currentY = event.offsetY;

        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(currentX, currentY);
        context.stroke();

        [lastX, lastY] = [currentX, currentY];
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mouseout', () => {
    isDrawing = false;
});
