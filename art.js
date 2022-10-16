/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// draws a circle at the given point
function drawCircle(thisX, thisY, radius) {
    ctx.arc(thisX, thisY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fill();
}
// draws a triangle onto the canvas
function drawTriangle(a, b, posX, posY) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.moveTo(posX, posY);
    ctx.lineTo(a, posY);
    ctx.lineTo(posX, b);
    ctx.lineTo(posX, posY);
    ctx.stroke();
}

window.onload = drawTriangle(200, 200, 100, 10);
