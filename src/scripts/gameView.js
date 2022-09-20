import Game from './game';

export default class GameView {
    constructor (ctx) {
        this.ctx = ctx;
        this.restart(ctx);
    }

    restart(ctx) {
        this.game = new Game(ctx);
        this.game.start();
        this.game.animate();
    }

    gameover() {
        if (this.game.gameOver) {
            return true;
        } else {
            return false;
        }
    }

    gamePlay() {
        if (!this.gameover()) {
            this.game.animate();
            requestAnimationFrame(this.gamePlay.bind(this));
        } else {
            this.displayWinner();
        }
    }

    displayWinner() {
        this.ctx.fillStyle = 'black';
        this.ctx.font = '50px serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`Winner is ${this.game.winner.color}`, CONSTANTS.DIM_X / 2, CONSTANTS.DIM_Y / 2, 500);
    }

}