/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// draws a circle at the given point
function drawCircle(thisX, thisY) {
    ctx.beginPath();
    ctx.arc(thisX, thisY, 10, 0, Math.PI * 2);
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fill();
    ctx.closePath();
}

// draws a triangle onto the canvas
function drawTriangle() {
    drawCircle(50, 50);
}

window.onload(drawTriangle());
