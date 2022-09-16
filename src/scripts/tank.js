// const MoveObject = require('./moveObject');
import MoveObject from './moveObject.js';

export default class Tank extends MoveObject {
    constructor(pos) {
        super({pos: pos, vel: 2, color: 'red'});
    }

    animate(ctx, k) {
        this.move(k);
        this.drawTank(ctx)
    }

    drawTank(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.pos[0], this.pos[1], 50, -50);
    }
}

// module.exports = Tank;