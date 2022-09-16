// const MoveObject = require('./moveObject');
import MoveObject from './moveObject.js';
const CONSTANTS = require('./constants');

export default class Tank extends MoveObject {
    constructor(pos) {
        super({pos: pos, vel: CONSTANTS.SPEED, color: CONSTANTS.TANK_COLOR});
    }

    animate(ctx, k) {
        this.move(k);
        this.drawTank(ctx)
    }

    drawTank(ctx) {
        ctx.fillStyle = CONSTANTS.TANK_COLOR;
        const size = CONSTANTS.TANK_SIZE;
        ctx.fillRect(this.pos[0], this.pos[1], size, -size);
    }
}

// module.exports = Tank;