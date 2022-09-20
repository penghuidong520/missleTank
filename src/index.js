// const Tank = require('./scripts/tank');
import GameView from './scripts/gameView'
import Game from './scripts/game'
const CONSTANTS = require('./scripts/constants');

document.addEventListener("DOMContentLoaded", () => {
    let canvasEl = document.getElementById('game-canvas');
    canvasEl.width = CONSTANTS.DIM_X;
    canvasEl.height = CONSTANTS.DIM_Y;
    canvasEl = canvasEl.getContext('2d');

    
    const start = document.getElementsByClassName('play-game');
    let gv = new GameView(canvasEl)
    start[0].addEventListener("click", ()=>{
        gv = new GameView(canvasEl);
        gv.gamePlay();
    })
    start[1].addEventListener("click", ()=>{
        gv = new GameView(canvasEl);
        gv.gamePlay();
    })
})