import Platform from './platform'
import Tank from "./tank"
const CONSTANTS = require('./constants');

export default class Game {
    constructor (ctx) {
        this.ctx = ctx;
        this.start();
    }
    
    start() {
        this.background(this.ctx);
        this.ground = new Platform({width: CONSTANTS.DIM_X, height: CONSTANTS.DIM_Y});
        this.ground.creatPlatorm(this.ctx, CONSTANTS.PLATFORM_COLOR);

        const pos = [this.ground.width / 10, this.ground.height - this.ground.height / 5];
        this.tank = new Tank(pos);
        this.tank.drawTank(this.ctx);
        this.tank.drawForceBar(this.ctx);
    }

    animate(k) {
        this.background(this.ctx)
        this.ground.creatPlatorm(this.ctx, CONSTANTS.PLATFORM_COLOR)
        this.tank.animate(this.ctx, k)
    }

    background(ctx) {
        ctx.fillStyle = CONSTANTS.BACKGROUND_COLOR;
        ctx.fillRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);
    }

}