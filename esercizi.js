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

/* let canvas;
let ctx;
let entities = [];

function setUp() {
    canvas = document.getElementById('my-canvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 50; i++) {
        const snowFlake = {}

        snowFlake.x = Math.random() * canvas.width;
        snowFlake.y = Math.random() * canvas.height;
        snowFlake.size = Math.random() * 8 + 2.5;  //grandezza fiocco
        // velocità fiocco
        snowFlake.speedY = Math.random() * 1.5 + 0.5;
        snowFlake.speedX = Math.random() * 1 - 0.5;
        // effetto parallasse
        snowFlake.opacity = Math.random() * 0.7 + 0.3;
        // movimento rotazione
        snowFlake.angle = Math.random() * Math.PI * 2;
        //movimento sinusoidale
        snowFlake.swingAmplitude = Math.random() * 0.5 + 1;
        snowFlake.swingSpeed = Math.random() * 0.05 + 0.02;

        entities.push(snowFlake);
    }

}

function update() {
    for (let i = 0; i < entities.length; i++) {
        const snowFlake = entities[i]; //parcheggio
        snowFlake.x += Math.sin(snowFlake.angle) * snowFlake.swingAmplitude; // Oscillazione naturale (chatGPT a mani basse)
        snowFlake.angle += snowFlake.swingSpeed; //incremento oscillazione
        snowFlake.y += snowFlake.speedY;

        if (snowFlake.y > canvas.height) {
            snowFlake.y = 0;
            snowFlake.x = Math.random() * canvas.width;
        }
    }
}
/////////////////////////////////// chatGPT a mani basse/////////////////////////////////////////
function draw() {
    //ctx.fillStyle = `rgba(255, 255, 255, 0.1)
//ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.clearRect(0, 0, canvas.width, canvas.height);
// ctx.fillStyle = 'rgba(180, 220, 255, 0.7)'

for (let i = 0; i < entities.length; i++) {
    const snowFlake = entities[i];
    ctx.save();

    // Sposta il sistema di coordinate nel punto del fiocco di neve
    ctx.translate(snowFlake.x, snowFlake.y);

    // Ruota il fiocco per un effetto più realistico
    ctx.rotate(snowFlake.angle);

    // Imposta il colore e la trasparenza del bordo del fiocco
    ctx.strokeStyle = `rgba(180, 220, 255, ${snowFlake.opacity})`;
    ctx.lineWidth = 1.5;

    // Disegna il fiocco di neve con sei rami
    for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -snowFlake.size);
        ctx.stroke();

        // Aggiunge delle ramificazioni laterali su ciascun ramo!!!!!!!!!!!! O_o
        for (let j = -1; j <= 1; j += 2) {
            ctx.moveTo(0, -snowFlake.size / 2);
            ctx.lineTo(j * snowFlake.size / 4, -snowFlake.size * 0.75);
            ctx.stroke();
        }

        // Ruota di 60° per creare i sei rami !!!!!!!!!!!! O_o
        ctx.rotate(Math.PI / 3);
    }

    // Ripristina lo stato del canvas
    ctx.restore()
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
    */



//3) a) dei rettangoli uguali, di altezza uguale (lunghezza diversa) ad altezze diverse che si muovano verso destra a velocità diversa
//   b) righe pari verso destra, righe dispari verso sinistra
//   c) più rettangoli per riga


let canvas;
let ctx;
const allRows = []
function setUp() {
    canvas = document.getElementById('my-canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;
    const rowheight = 50
    const rowAmount = canvas.height / rowheight

    const pastelColors = [
        '#FFB6C1', '#FFDAB9', '#FFFACD', '#E6E6FA', '#B0E0E6', '#98FB98'
    ];


    for (let i = 0; i < rowAmount; i++) {
        const row = {}

        row.entities = []
        for (let j = 0; j < 5; j++) {
            const item = {}
            const rowHeight = canvas.height / rowAmount
            item.width = Math.random() * 100;
            item.height = rowHeight - 10;
            item.x = Math.random() * (canvas.width - item.width);
            item.y = i * rowHeight;
            item.speedX = Math.round(Math.random() * 1) + 1;

            if (i % 2 === 1) {
                item.speedX = item.speedX * -1
            }
            // Assegna un colore casuale dalla palette
            item.color = pastelColors[Math.floor(Math.random() * pastelColors.length)];

            row.entities.push(item);
        }
        allRows.push(row);
    }
}

function update() {
    for (let i = 0; i < allRows.length; i++) {
        const row = allRows[i];

        for (let j = 0; j < row.entities.length; j++) {
            const item = row.entities[j];
            item.x += item.speedX

            if (item.x > canvas.width) {
                item.x = 0
            } else if (item.x <= 0) {
                item.x = canvas.width - item.width
            }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, 600, 600);
    ctx.fillStyle = `rgba(255, 255, 255, 0.1)`
    ctx.fillRect(0, 0, 600, 600)


    for (let i = 0; i < allRows.length; i++) {
        const row = allRows[i];

        for (let j = 0; j < row.entities.length; j++) {
            const item = row.entities[j];
            ctx.fillStyle = item.color;
            ctx.fillRect(item.x, item.y, item.width, item.height)
        }
    }
    console.log(allRows)
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

start();