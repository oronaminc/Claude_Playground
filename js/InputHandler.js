export default class InputHandler {
    constructor(paddle) {
        this.paddle = paddle;
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
        document.addEventListener('keyup', (e) => this.handleKeyUp(e));
    }

    handleKeyDown(e) {
        if (e.key === 'ArrowRight' || e.key === 'Right') {
            this.paddle.moveRight();
        } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
            this.paddle.moveLeft();
        }
    }

    handleKeyUp(e) {
        if (e.key === 'ArrowRight' || e.key === 'Right' ||
            e.key === 'ArrowLeft' || e.key === 'Left') {
            this.paddle.stop();
        }
    }
}
