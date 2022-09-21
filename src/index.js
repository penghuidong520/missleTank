// const Tank = require('./scripts/tank');
import GameView from './scripts/gameView'
const CONSTANTS = require('./scripts/constants');

document.addEventListener("DOMContentLoaded", () => {
    let canvasEl = document.getElementById('game-canvas');
    canvasEl.width = CONSTANTS.DIM_X;
    canvasEl.height = CONSTANTS.DIM_Y;
    canvasEl = canvasEl.getContext('2d');
    
    const start = document.getElementById('restart');
    let gv = new GameView(canvasEl)
    gv.gamePlay();
    start.addEventListener("click", ()=>{
        gv.terminate = true;
        gv = new GameView(canvasEl)
        gv.gamePlay();
    })
})