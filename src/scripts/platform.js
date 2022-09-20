const CONSTANTS = require('./constants')

export default class PlatForm {
    constructor(dimension) {
        this.width = dimension.width;
        this.height = dimension.height;
        this.pos = [0, this.height];
    }
    
    animate(ctx) {
        this.creatPlatorm(ctx);
    }

    creatPlatorm(ctx) {
        ctx.fillStyle = CONSTANTS.PLATFORM_COLOR;
        ctx.fillRect(this.pos[0], this.pos[1], this.width, -this.height/5);
    }
}

