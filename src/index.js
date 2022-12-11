// const Tank = require('./scripts/tank');
import GameView from './scripts/gameView'
const CONSTANTS = require('./scripts/constants');

document.addEventListener("DOMContentLoaded", () => {
    let canvasEl = document.getElementById('game-canvas');
    canvasEl.width = CONSTANTS.DIM_X;
    canvasEl.height = CONSTANTS.DIM_Y;
    canvasEl = canvasEl.getContext('2d');
    
    const restart = document.getElementById('restart');
    const start = document.getElementById('start');
    const instruction = document.getElementById('instruction');

    
    let gv = new GameView(canvasEl)
    
    //Instruction
    instruction.addEventListener('click', ()=>{
        instruction.blur();
        gv.terminate = true;
        gv.game.animate();
        canvasEl.fillStyle = 'black';
        canvasEl.font = '30px serif';
        canvasEl.textAlign = 'center';
        canvasEl.fillText(`A or LeftArrow key to move left, D or RightArrow key to move right. `, CONSTANTS.DIM_X / 2, CONSTANTS.DIM_Y / 3, 1000);
        canvasEl.fillText(`Hold space to charge attack to hit further`, CONSTANTS.DIM_X / 2, CONSTANTS.DIM_Y / 3 + 40, 1000);
        canvasEl.fillText(`Click start or restart to play the game`, CONSTANTS.DIM_X / 2, CONSTANTS.DIM_Y / 3 + 80, 1000);
        canvasEl.fillText(`Number in the middle indicates wind force`, CONSTANTS.DIM_X / 2, CONSTANTS.DIM_Y / 3 + 120, 1000);
    })
    

    start.addEventListener("click", ()=> {
        start.blur();
        gv.terminate = true;
        gv = new GameView(canvasEl);
        
        gv.gamePlay();
    })

    restart.addEventListener("click", ()=>{
        restart.blur();
        gv.terminate = true;
        gv = new GameView(canvasEl);
        gv.gamePlay();
    })
})