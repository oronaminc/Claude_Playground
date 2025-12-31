export default class Paddle {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.width = 100;
        this.height = 15;
        this.speed = 8;
        this.y = canvasHeight - 30;
        this.x = canvasWidth / 2 - this.width / 2;
        this.dx = 0;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.roundRect(this.x, this.y, this.width, this.height, 5);
        ctx.fillStyle = '#00D9FF';
        ctx.fill();
        ctx.strokeStyle = '#0099CC';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
    }

    update() {
        this.x += this.dx;

        if (this.x < 0) {
            this.x = 0;
        }
        if (this.x + this.width > this.canvasWidth) {
            this.x = this.canvasWidth - this.width;
        }
    }

    moveLeft() {
        this.dx = -this.speed;
    }

    moveRight() {
        this.dx = this.speed;
    }

    stop() {
        this.dx = 0;
    }

    reset() {
        this.x = this.canvasWidth / 2 - this.width / 2;
        this.dx = 0;
    }
}
