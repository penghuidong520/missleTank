const Game = require('./scripts/game');

document.addEventListener("DOMContentLoaded", () => {
    let canvasEl = document.getElementById('game-canvas');
    canvasEl.width = "1000";
    canvasEl.height = "600";
    canvasEl = canvasEl.getContext('2d');
    
    const gameBase = new Game(canvasEl);

})