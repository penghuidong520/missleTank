const CONSTANTS = require('./constants');

export default class Map {
    constructor() {

    }

    animate(ctx) {
        this.drawBackground(ctx);
    }

    drawBackground(ctx) {
        ctx.fillStyle = CONSTANTS.BACKGROUND_COLOR;
        ctx.fillRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);
    }

}