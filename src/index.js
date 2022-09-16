// const Tank = require('./scripts/tank');
import Game from './scripts/game'
const CONSTANTS = require('./scripts/constants');


document.addEventListener("DOMContentLoaded", () => {
    let canvasEl = document.getElementById('game-canvas');
    canvasEl.width = CONSTANTS.DIM_X;
    canvasEl.height = CONSTANTS.DIM_Y;
    canvasEl = canvasEl.getContext('2d');
    
    const gameBase = new Game(canvasEl);
    // console.log(gameBase.tank.move);
    document.addEventListener('keydown', (e) => {
        let k = '';
        if (e.key === 'd') {
            k = 'd';
        }
        if (e.key === 'a') {
            k = 'a';
        }
        gameBase.animate.bind(gameBase)(k);
    })
    
})