
class Tank {
    constructor(ctx) {
        this.ctx = ctx;
    }

    drawTank(x_pos, y_pos) {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(x_pos, y_pos, 50, -50);
    }
}

module.exports = Tank;