import Ball from './Ball.js';
import Paddle from './Paddle.js';
import BrickManager from './BrickManager.js';
import InputHandler from './InputHandler.js';

export default class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.scoreElement = document.getElementById('score');
        this.livesElement = document.getElementById('lives');
        this.messageElement = document.getElementById('message');

        this.score = 0;
        this.lives = 3;
        this.isRunning = false;
        this.animationId = null;

        this.ball = new Ball(this.canvas.width, this.canvas.height);
        this.paddle = new Paddle(this.canvas.width, this.canvas.height);
        this.brickManager = new BrickManager(this.canvas.width);
        this.inputHandler = new InputHandler(this.paddle);

        window.restartGame = () => this.restart();
    }

    start() {
        this.isRunning = true;
        this.gameLoop();
    }

    restart() {
        this.score = 0;
        this.lives = 3;
        this.updateScore();
        this.updateLives();
        this.messageElement.innerHTML = '';
        this.ball.reset();
        this.paddle.reset();
        this.brickManager.createBricks();
        this.start();
    }

    gameLoop() {
        if (!this.isRunning) return;

        this.update();
        this.draw();

        this.animationId = requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        this.ball.update();
        this.paddle.update();

        this.ball.checkWallCollision();
        this.ball.checkPaddleCollision(this.paddle);

        if (this.brickManager.checkCollision(this.ball)) {
            this.score += 10;
            this.updateScore();

            if (this.brickManager.getActiveBrickCount() === 0) {
                this.win();
            }
        }

        if (this.ball.checkBottomCollision()) {
            this.lives--;
            this.updateLives();
            if (this.lives === 0) {
                this.gameOver();
            } else {
                this.ball.reset();
            }
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.brickManager.draw(this.ctx);
        this.ball.draw(this.ctx);
        this.paddle.draw(this.ctx);
    }

    updateScore() {
        this.scoreElement.textContent = this.score;
    }

    updateLives() {
        this.livesElement.textContent = this.lives;
    }

    gameOver() {
        this.isRunning = false;
        cancelAnimationFrame(this.animationId);
        this.messageElement.innerHTML = `
            <div class="game-over">게임 오버!</div>
            <button onclick="restartGame()">다시 시작</button>
        `;
    }

    win() {
        this.isRunning = false;
        cancelAnimationFrame(this.animationId);
        this.messageElement.innerHTML = `
            <div class="game-win">축하합니다! 승리!</div>
            <button onclick="restartGame()">다시 시작</button>
        `;
    }
}
