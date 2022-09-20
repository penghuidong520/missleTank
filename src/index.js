// const Tank = require('./scripts/tank');
import GameView from './scripts/gameView'
import Game from './scripts/game'
const CONSTANTS = require('./scripts/constants');

document.addEventListener("DOMContentLoaded", () => {
    let canvasEl = document.getElementById('game-canvas');
    canvasEl.width = CONSTANTS.DIM_X;
    canvasEl.height = CONSTANTS.DIM_Y;
    canvasEl = canvasEl.getContext('2d');

    const gv = new GameView(canvasEl);
    gv.gamePlay();
    // const game = new Game(canvasEl);
    // game.start();
    // if (gv.gameover) 
    
})