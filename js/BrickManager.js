import Brick from './Brick.js';

export default class BrickManager {
    constructor(canvasWidth) {
        this.rows = 6;
        this.cols = 10;
        this.width = 70;
        this.height = 25;
        this.padding = 10;
        this.offsetX = 35;
        this.offsetY = 60;
        this.colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'];
        this.bricks = [];
        this.createBricks();
    }

    createBricks() {
        this.bricks = [];
        for (let row = 0; row < this.rows; row++) {
            this.bricks[row] = [];
            for (let col = 0; col < this.cols; col++) {
                const x = this.offsetX + col * (this.width + this.padding);
                const y = this.offsetY + row * (this.height + this.padding);
                this.bricks[row][col] = new Brick(x, y, this.width, this.height, this.colors[row]);
            }
        }
    }

    draw(ctx) {
        this.bricks.forEach(row => {
            row.forEach(brick => {
                brick.draw(ctx);
            });
        });
    }

    checkCollision(ball) {
        let hit = false;
        this.bricks.forEach(row => {
            row.forEach(brick => {
                if (brick.isActive() && ball.checkBrickCollision(brick)) {
                    ball.bounceOffBrick();
                    brick.destroy();
                    hit = true;
                }
            });
        });
        return hit;
    }

    getActiveBrickCount() {
        let count = 0;
        this.bricks.forEach(row => {
            row.forEach(brick => {
                if (brick.isActive()) count++;
            });
        });
        return count;
    }

    getTotalBrickCount() {
        return this.rows * this.cols;
    }
}
