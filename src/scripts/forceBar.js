// const CONSTANTS = require('./constants');

export default class ForceBar {
    constructor() {
        // this.pos = pos;
        this.force = 1;
        addEventListener('keydown', this.keyDown.bind(this));
        addEventListener('keyup', this.keyUp.bind(this));
    }

    animate(ctx) {
        this.drawForceBar(ctx);
        this.chargeBar(ctx);
    }

    drawForceBar(ctx) {
        ctx.fillStyle = CONSTANTS.EMPTY_FORCE;
        const length = CONSTANTS.DIM_X - (CONSTANTS.DIM_X / 10) * 2;
        ctx.fillRect(CONSTANTS.DIM_X / 10, CONSTANTS.DIM_Y / 10, length, CONSTANTS.FORCE_BAR_HEIGHT);
    }

    chargeBar(ctx) {
        if (this.charging) this.force += 1;
        ctx.fillStyle = CONSTANTS.FORCE_COLOR;
        const force = CONSTANTS.DIM_X / 100;
        const max = CONSTANTS.DIM_X - (CONSTANTS.DIM_X / 10) * 2;
        if (force * this.force <= max) {
            ctx.fillRect(CONSTANTS.DIM_X / 10, CONSTANTS.DIM_Y / 10, force * this.force, CONSTANTS.FORCE_BAR_HEIGHT);
        } else {
            ctx.fillRect(CONSTANTS.DIM_X / 10, CONSTANTS.DIM_Y / 10, max, CONSTANTS.FORCE_BAR_HEIGHT);
        }
    }
    keyDown(e) {
        if (e.key === ' ') {
            if (this.force >= CONSTANTS.MAX_FORCE) {
                this.force = CONSTANTS.MAX_FORCE;
            }
            this.charging = true
        }
    }

    keyUp(e) {
        if (e.key === ' ') {
            this.charging = false;
            this.force = 1;
        }
    }
}