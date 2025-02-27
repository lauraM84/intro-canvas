

const canvas = document.getElementById("my-canvas");

const ctx = canvas.getContext('2d');

/* ctx.fillStyle = "red";
ctx.fillRect(10, 10, 100, 50);

ctx.fillStyle = "green";
ctx.fillRect(250, 275, 100, 50);

ctx.strokeStyle = 'crimson'
ctx.lineWidth = 4
ctx.strokeRect(350, 400, 10, 50);
 */

/* for (let i = 0; i < 100; i++) {

    const originX = Math.random() * 600;
    const originY = Math.random() * 600;
    const width = Math.random() * 200;
    const height = Math.random() * 200;

    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;
    const alpha = Math.random();

    ctx.fillStyle = `rgb(${red}, ${green}, ${blue}, ${alpha})`;
    ctx.fillRect(originX, originY, width, height);
} */

setInterval(() => {
    ctx.fillStyle = `rgba(255, 255, 255, 0.01)`
    ctx.fillRect(0, 0, 600, 600);


    const width = Math.random() * 200;
    const height = Math.random() * 200;

    const originX = Math.random() * (600 - width);
    const originY = Math.random() * (600 - height);


    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;
    const alpha = Math.random();

    ctx.fillStyle = `rgb(${red}, ${green}, ${blue}, ${alpha})`;
    ctx.fillRect(originX, originY, width, height);

}, 500);