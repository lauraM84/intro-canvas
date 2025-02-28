//1) data una variabile che chiamata gridSize, disegnare una scacchiera di  dimensioni gridSize * gridSize

/* let canvas;
let ctx;
const gridSize = 8

function setUp() {
    canvas = document.getElementById('my-canvas');
    ctx = canvas.getContext('2d');

}

function update() {

}

function draw() {
    const cellSize = Math.min(canvas.height, canvas.width) / gridSize;

    for (let row = 0; row < gridSize; row++) {
        for (let column = 0; column < gridSize; column++) {
            if ((column + row) % 2 === 0) {
                ctx.fillStyle = 'white'
            } else {
                ctx.fillStyle = 'black'
            }
            ctx.fillRect(column * cellSize, row * cellSize, cellSize, cellSize);
        }

    }
}

function gameLoop(elapsedTime) {

    update()

    draw()

    requestAnimationFrame(gameLoop);
}

function start() {
    setUp()
    requestAnimationFrame(gameLoop);
}

start() */

//2) far nevicare tipo https://aijs.io/

//3) a) dei rettangoli uguali, di altezza uguale (lunghezza diversa) ad altezze diverse che si muovano verso destra a velocità diversa
//   b) righe pari verso destra, righe dispari verso sinistra
//   c) più rettangoli per riga


let canvas;
let ctx;
const rowAmount = 10

function setUp() {
    const rect = {}
    row.width = Math.random() * 10;
    rect.height = canvas.height / rowAmount;
}

function update() {

}

function draw() {
    for (let row = 0; row < rowAmount; row++) {

    }
}

function gameLoop(elapsedTime) {

    update()

    draw()

    requestAnimationFrame(gameLoop);
}

function start() {
    setUp()
    requestAnimationFrame(gameLoop);
}

start()