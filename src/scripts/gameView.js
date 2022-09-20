import Game from './game';

export default class GameView {
    constructor (ctx) {
        this.restart(ctx);
    }

    restart(ctx) {
        this.game = new Game(ctx);
        this.game.start();
    }

    gameover() {
        if (this.game.gameOver) {
            // do visual instead of consolelog
            console.log('Game Over');
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
            this.game.displayWinner();
            console.log(this.game.winner.color)
        }
    }

}