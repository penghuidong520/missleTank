DEFAULTS = {
    groundColor : 'lightgreen'
}

class PlatForm {
    constructor(ctx, dimension) {
        this.ctx = ctx;
        this.width = dimension.width;
        // this.height : surface of the platform
        this.height = dimension.height - (dimension.height / 5);
        this.creatPlatorm(dimension.width, dimension.height);
    }
    
    creatPlatorm(width, height) {
        this.ctx.fillStyle = DEFAULTS.groundColor;
        this.ctx.fillRect(0, height, width, -height/5);
    }

}

module.exports = PlatForm;