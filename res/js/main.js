const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
/*const mario = new Image();
mario.src = "./res/img/mario.png";

ctx.fillStyle = "orange";
ctx.fillRect(115, 250, 80, 150);

ctx.strokeStyle = "blue";
ctx.strokeRect(225, 250, 80, 150);

ctx.fillStyle = "pink";
ctx.fillRect(115, 450, 80, 150);

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 100);
ctx.lineTo(100, 100);
ctx.lineTo(50, 50);
ctx.fill();
ctx.stroke();

ctx.strokeStyle = "black";

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(500, 55, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(480, 40, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(480, 40, 2, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(520, 40, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(520, 40, 2, 0, 2 * Math.PI);
ctx.fill();

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.arc(500, 55, 40, 0, Math.PI);
ctx.stroke();

ctx.strokeStyle = "black";
ctx.fillStyle = "orange";
ctx.fillRect(500, 250, 150, 150);
ctx.strokeRect(500, 250, 150, 150);

ctx.beginPath();
ctx.moveTo(500, 250);
ctx.lineTo(575, 200);
ctx.lineTo(650, 250);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "blue";
ctx.fillRect(515, 290, 50, 50);
ctx.strokeRect(515, 290, 50, 50);

ctx.fillStyle = "brown";
ctx.fillRect(535, 290, 10, 50);
ctx.strokeRect(535, 290, 10, 50);
ctx.fillRect(515, 310, 50, 10);
ctx.strokeRect(515, 310, 50, 10);

ctx.fillRect(585, 290, 50, 110);
ctx.strokeRect(585, 290, 50, 110);

ctx.fillStyle = "gray";
ctx.fillRect(590, 335, 20, 10);

let x = 0;

function drawMario(x, y) {
    ctx.drawImage(mario, x, y, 320, 320);
}

window.onload = () => {
    setInterval(() => {
        x += 10;
        drawMario();
    }, 500);
}*/

const DVD = new Image();
DVD.src = "./res/img/dvdTR.png";

let x = 1;
let y = 1;
let width = 200;
let height = 120;

const randomNumber = (min, max) => Math.round(Math.random() * (max - min - 1)) + min;

let red = 0;
let green = 0;
let blue = 0;

function changeNumber() {
    red = randomNumber(100, 255);
    green = randomNumber(100, 255);
    blue = randomNumber(100, 255);
} 

changeNumber();

let velocityX = 1;
let velocityY = 1;

window.addEventListener("resize", () => {
    resize();
})

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function drawBackground() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function drawDVD() {
    ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`
    ctx.fillRect(x, y, width, height);
    ctx.drawImage(DVD, x, y, width, height);
}

function checkForCollision() {
    let cWidth = canvas.width;
    let cHeight = canvas.height;
    if(x + width >= cWidth || x <= 0) {
        changeNumber();
        velocityX = -velocityX;
    }
    if(y + height >= cHeight || y <= 0) { 
        changeNumber();
        velocityY = -velocityY;
    }
}

window.onload = () => {
    resize();
    setInterval(() => {
        drawBackground();
        drawDVD();
        checkForCollision();
        x += velocityX;
        y += velocityY;
    }, 1);
}

