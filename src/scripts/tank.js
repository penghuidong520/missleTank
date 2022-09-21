import Missle from './missles.js';
import MoveObject from './moveObject.js';
const CONSTANTS = require('./constants');

export default class Tank {
    constructor(pos, color, direction) {
        this.pos = pos;
        this.vel = CONSTANTS.TANK_SPEED;
        this.color = color;
        this.direction = direction;

        this.width = CONSTANTS.TANK_SIZE;
        this.height = CONSTANTS.TANK_SIZE;

        this.health = CONSTANTS.MAX_HEALTH;
        document.addEventListener("keydown", this.keyDown);
        document.addEventListener("keyup", this.keyUp);

    }

    animate(ctx, currentTank) {
        this.drawHealthBar(ctx);
        this.drawHealth(ctx);
        this.drawTank(ctx, currentTank);
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
        if (this.left) this.pos[0] -= this.vel;
        if (this.right) this.pos[0] += this.vel;
        if (this.pos[0] > CONSTANTS.DIM_X - CONSTANTS.TANK_SIZE) this.pos[0] -= this.vel;
        if (this.pos[0] < 0) this.pos[0] += this.vel;
    }

    drawHealthBar(ctx) {
        ctx.fillStyle = CONSTANTS.HEALTH_BAR_COLOR;
        let length = this.width * 1.5;
        const health_y_pos = this.pos[1] - CONSTANTS.TANK_SIZE - 10
        ctx.fillRect(this.pos[0] - (length - this.width) / 2, health_y_pos, length, CONSTANTS.HEALTH_HEIGHT);
    }

    drawHealth(ctx) {
        ctx.fillStyle = CONSTANTS.HEALTH;
        let length = this.width * 1.5 / CONSTANTS.MAX_HEALTH;
        const health_x = this.pos[0] - (this.width * 1.5 - this.width) / 2;
        const health_y = this.pos[1] - CONSTANTS.TANK_SIZE - 10;
        ctx.fillRect(health_x, health_y, length * this.health, CONSTANTS.HEALTH_HEIGHT);
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
            case 'ArrowLeft':
                this.left = true;
                break;
            case 'ArrowRight':
                this.right = true;
                break;
            // case ' ':
            //     this.charging = true;
            //     break;
        }
    }

    keyUp = (e) => {
        switch (e.key) {
            case 'a':
                this.left = false;
                break;
            case 'd':
                this.right = false;
                break;
            case 'ArrowLeft':
                this.left = false;
                break;
            case 'ArrowRight':
                this.right = false;
                break;
        }
    }
}
