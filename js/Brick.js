export default class Brick {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.status = 1;
    }

    draw(ctx) {
        if (this.status === 1) {
            ctx.beginPath();
            ctx.roundRect(this.x, this.y, this.width, this.height, 5);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();
        }
    }

    destroy() {
        this.status = 0;
    }

    isActive() {
        return this.status === 1;
    }
}
