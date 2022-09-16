const Platform = require('./platform');
const Tank = require('./tank');

CONSTANTS = {
    DIM_X : 1000,
    DIM_Y : 600,
    COLOR : 'lightblue'
}

class Game {

    constructor (ctx) {
        this.background(ctx);
        this.ground = new Platform(ctx, {width: CONSTANTS.DIM_X, height: CONSTANTS.DIM_Y});
        this.tank = new Tank(ctx);
        this.tank.drawTank(this.ground.width/2, this.ground.height);
    }

    background(ctx) {
        ctx.fillStyle = CONSTANTS.COLOR;
        ctx.fillRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);
    }

}

module.exports = Game;