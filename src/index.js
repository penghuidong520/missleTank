// const Tank = require('./scripts/tank');
import Game from './scripts/game'

document.addEventListener("DOMContentLoaded", () => {
    let canvasEl = document.getElementById('game-canvas');
    canvasEl.width = "1000";
    canvasEl.height = "600";
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
        // gameBase.background(canvasEl);
        // gameBase.ground.creatPlatorm(canvasEl, {width: 1000, height: 600})
        // gameBase.tank.drawTank(canvasEl);
    })
    
})