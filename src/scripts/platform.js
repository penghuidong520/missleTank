const CONSTANTS = require('./constants')

export default class PlatForm {
    constructor(dimension) {
        this.width = dimension.width;
        // this.height : surface of the platform
        this.height = dimension.height;
        this.pos = [0, this.height];
        // this.creatPlatorm(dimension.width, dimension.height);
    }
    
    animate(ctx) {
        this.creatPlatorm(ctx);
    }

    creatPlatorm(ctx) {
        ctx.fillStyle = CONSTANTS.PLATFORM_COLOR;
        ctx.fillRect(this.pos[0], this.pos[1], this.width, -this.height/5);
    }



}

// module.exports = PlatForm;