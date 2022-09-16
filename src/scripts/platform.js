const DEFAULTS = {
    groundColor : 'lightgreen'
}

export default class PlatForm {
    constructor(dimension) {
        this.width = dimension.width;
        // this.height : surface of the platform
        this.height = dimension.height;
        // this.creatPlatorm(dimension.width, dimension.height);
    }
    
    creatPlatorm(ctx) {
        console.log(ctx);
        ctx.fillStyle = DEFAULTS.groundColor;
        ctx.fillRect(0, this.height, this.width, -this.height/5);
    }

}

// module.exports = PlatForm;