const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const clearButton = document.getElementById('clear');
const sizeElement = document.getElementById('size-element');
const colorElement = document.getElementById('color');

// brush size
let size = 10;
let x = undefined;
let y = undefined;
let isPressed = false;
let color = 'black';

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
    drawCircle(x, y);
});

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

increaseButton.addEventListener('click', () => {
    if (size < 50) {
        size += 2;
    }
    updateSizeDisplayed();
});

decreaseButton.addEventListener('click', () => {
    if (size > 2) {
        size -= 2;
    }
    updateSizeDisplayed();
});

function updateSizeDisplayed() {
    sizeElement.innerText = size;
}

clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorElement.addEventListener('change', (e) => {
    color = e.target.value;
});



// function called every frame
// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawCircle(x, y);
//     requestAnimationFrame(draw);
// }

// draw();

