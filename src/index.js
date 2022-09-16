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
    let force = 1;
    document.addEventListener('keydown', (e) => {
        let k = '';
        switch(e.key) {
            case 'a':
                k = 'a';
                break;
            case 'd':
                k = 'd';
                // console.log('d');
                break;
            case ' ':
                force += 1;
                console.log(force)
                gameBase.animate.bind(gameBase)(k, force);
                break;
        }
        gameBase.animate.bind(gameBase)(k, force);

        //On key up, release space
        document.addEventListener('keyup', (e) => force = 1);

    })
    
})