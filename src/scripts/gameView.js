import Game from './game';

export default class GameView {
    constructor (ctx) {
        this.ctx = ctx;
        this.restart(ctx);
        this.terminate = false;
    }

    restart(ctx) {
        this.game = new Game(ctx);
        this.game.start();
        this.game.animate();

        this.ctx.fillStyle = 'black';
        this.ctx.font = '50px serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`Press Start Button to Play`, CONSTANTS.DIM_X / 2, CONSTANTS.DIM_Y / 2, 500);
    }

    gameover() {
        if (this.game.gameOver) {
            return true;
        } else {
            return false;
        }
    }

    gamePlay() {
        if (!this.gameover() && !this.terminate) {
            this.game.animate();
            requestAnimationFrame(this.gamePlay.bind(this));
        } else {
            if (!this.terminate) {
                this.terminate = true;
                this.displayWinner();
            }
        }
    }

    displayWinner() {
        this.ctx.fillStyle = 'black';
        this.ctx.font = '50px serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`Winner is ${this.game.winner.color}`, CONSTANTS.DIM_X / 2, CONSTANTS.DIM_Y / 2, 500);
        this.ctx.fillText(`Click Restart to Play Again`, CONSTANTS.DIM_X / 2, CONSTANTS.DIM_Y / 2 + 100, 500);
    }

}