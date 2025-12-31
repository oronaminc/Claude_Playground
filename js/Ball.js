export default class Ball {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.radius = 8;
        this.speed = 4;
        this.reset();
    }

    reset() {
        this.x = this.canvasWidth / 2;
        this.y = this.canvasHeight - 100;
        this.dx = 4;
        this.dy = -4;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#FFD700';
        ctx.fill();
        ctx.strokeStyle = '#FFA500';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
    }

    checkWallCollision() {
        if (this.x + this.radius > this.canvasWidth || this.x - this.radius < 0) {
            this.dx *= -1;
        }
        if (this.y - this.radius < 0) {
            this.dy *= -1;
        }
    }

    checkPaddleCollision(paddle) {
        if (this.y + this.radius > paddle.y &&
            this.x > paddle.x &&
            this.x < paddle.x + paddle.width) {
            this.dy = -Math.abs(this.dy);
            const hitPos = (this.x - paddle.x) / paddle.width;
            this.dx = (hitPos - 0.5) * 8;
            return true;
        }
        return false;
    }

    checkBottomCollision() {
        return this.y + this.radius > this.canvasHeight;
    }

    checkBrickCollision(brick) {
        return this.x + this.radius > brick.x &&
               this.x - this.radius < brick.x + brick.width &&
               this.y + this.radius > brick.y &&
               this.y - this.radius < brick.y + brick.height;
    }

    bounceOffBrick() {
        this.dy *= -1;
    }
}
