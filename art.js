/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// draws a circle at the given point
function drawCircle(thisX, thisY, radius) {
    ctx.beginPath();
    ctx.arc(thisX, thisY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fill();
}
// draws a triangle onto the canvas
function drawTriangle(width, height, posX, posY) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.moveTo(posX, posY);
    ctx.lineTo(posX + width, posY);
    ctx.lineTo(posX, posY + height);
    ctx.lineTo(posX, posY);
    ctx.stroke();
    drawCircle(posX + width, posY, width / 50);
    drawCircle(posX, posY + height, width / 50);
    drawCircle(posX, posY, width / 50);
}

function tilingLoop(amountOfTriangles) {
    // if we add to the position or set a negative value for the width, or height value we can tile quite easily, going to do some testing to see if i can get it to tile randomly
    drawTriangle(150, 150, 500, 500);
    drawTriangle(150, -150, 500, 500);
}

window.onload = tilingLoop(10);
