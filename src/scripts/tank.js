// const MoveObject = require('./moveObject');
import Missle from './missles.js';
import MoveObject from './moveObject.js';
const CONSTANTS = require('./constants');

// export default class Tank extends MoveObject {
export default class Tank {
    constructor(pos, color) {
        this.pos = pos;
        this.vel = CONSTANTS.TANK_SPEED;
        this.color = color
        this.force = 1;

        this.width = CONSTANTS.TANK_SIZE
        this.height = CONSTANTS.TANK_SIZE

        // this.missle = missle;

        document.addEventListener("keydown", this.keyDown);
        document.addEventListener("keyup", this.keyUp);

    }

    animate(ctx, currentTank) {
        // console.log(currentTank === this);
        this.drawForceBar(ctx);
        this.charge(ctx);
        this.drawTank(ctx, currentTank);

        // if (this.shoot) this.missle.drawMissle(ctx);
    }

    drawTank(ctx, currentTank) {
        if (this === currentTank) {
            this.moveTank();
        }
        ctx.fillStyle = this.color;
        const size = CONSTANTS.TANK_SIZE;
        ctx.fillRect(this.pos[0], this.pos[1], size, -size);
    }

    moveTank() {
        // console.log(1);
        if (this.left) this.pos[0] -= this.vel;
        if (this.right) this.pos[0] += this.vel;
        if (this.pos[0] > CONSTANTS.DIM_X - CONSTANTS.TANK_SIZE) this.pos[0] -= this.vel;
        if (this.pos[0] < 0) this.pos[0] += this.vel;
    }

    drawForceBar(ctx) {
        ctx.fillStyle = CONSTANTS.EMPTY_FORCE;
        const length = CONSTANTS.DIM_X - (CONSTANTS.DIM_X / 10) * 2;
        ctx.fillRect(CONSTANTS.DIM_X / 10, CONSTANTS.DIM_Y / 10, length, CONSTANTS.FORCE_BAR_HEIGHT);
        // charges the forceBar when space is pressed
        
    }

    charge(ctx) {
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
    
    // source: https://github.com/CodingWith-Adam/shooting-bullets-game-dev/blob/main/Player.js
    // taking this as reference to put my moves
    keyDown = (e) => {
        switch (e.key) {
            case 'a':
                this.left = true;
                break;
            case 'd':
                this.right = true;
                break;
            case ' ':
                // this.force += 1;
                this.charging = true;
                break;
        }
    }

    keyUp = (e) => {
        if (e.key === 'a') {
            this.left = false;
        }

        switch (e.key) {
            case 'd':
                this.right = false;
                break;
            case ' ':
                this.charging = false;
                this.force = 1;
                // this.shoot = true;
                // this.missle = new Missle(this.pos);
                break;
        }
    }


}
