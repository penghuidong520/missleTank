// const MoveObject = require('./moveObject');
import MoveObject from './moveObject.js';
const CONSTANTS = require('./constants');

export default class Tank extends MoveObject {
    constructor(pos) {
        super({pos: pos, vel: CONSTANTS.SPEED, color: CONSTANTS.TANK_COLOR});
    }

    animate(ctx, k) {
        this.drawForceBar(ctx);
        this.move(k);
        this.drawTank(ctx)
    }

    drawTank(ctx) {
        ctx.fillStyle = CONSTANTS.TANK_COLOR;
        const size = CONSTANTS.TANK_SIZE;
        ctx.fillRect(this.pos[0], this.pos[1], size, -size);
    }

    drawForceBar(ctx) {
        ctx.fillStyle = CONSTANTS.EMPTY_FORCE;
        const length = CONSTANTS.DIM_X - (CONSTANTS.DIM_X / 10) * 2;
        ctx.fillRect(CONSTANTS.DIM_X / 10, CONSTANTS.DIM_Y / 10, length, CONSTANTS.FORCE_BAR_HEIGHT);

        // charges the forceBar when space is pressed
        this.charge(ctx, 1);
        
    }
    
    // When spaced is pressed fills up the force bar
    charge(ctx, power) {
        ctx.fillStyle = CONSTANTS.FORCE_COLOR;
        const force = CONSTANTS.DIM_X / 100;
        ctx.fillRect(CONSTANTS.DIM_X / 10, CONSTANTS.DIM_Y / 10, force * power, CONSTANTS.FORCE_BAR_HEIGHT);
    }

}

// module.exports = Tank;