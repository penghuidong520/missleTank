import Missle from './missles';
import Platform from './platform'
import Tank from "./tank"
import Background from "./background"
import ForceBar from './forceBar';
const CONSTANTS = require('./constants');

export default class Game {
    constructor (ctx) {
        this.ctx = ctx;
        this.direction = 'left'
        this.start();
    }
    
    start() {
        // Background
        this.background = new Background();
        // Platform
        this.platform = new Platform({width: CONSTANTS.DIM_X, height: CONSTANTS.DIM_Y});
        const pos = [this.platform.width / 10, this.platform.height - this.platform.height / 5];
        // ForceBar
        this.forceBar = new ForceBar();
        // Tanks
        this.tank = new Tank(pos, 'red');
        this.tank2 = new Tank([CONSTANTS.DIM_X-pos[0], pos[1]], 'blue');
        this.currentTank = this.tank2;
        document.addEventListener("keydown", this.keyDown.bind(this));
        document.addEventListener("keyup", this.keyUp.bind(this));

        setInterval(this.animate.bind(this), 1000/60);
    }

    animate() {
        if (!this.shotsFired) {
            this.background.animate(this.ctx);
            this.platform.animate(this.ctx);
            this.forceBar.animate(this.ctx);
            this.tank.animate(this.ctx, this.currentTank);
            this.tank2.animate(this.ctx, this.currentTank);
        }
        if (this.shoot) this.fire();
    }

    fire() {
        this.shotsFired = true;
        if (this.shoot) {
            this.missle.drawMissle(this.ctx, this.direction);
            // this.switchTurn();
        }
        if (this.missleCollision()) {
            this.switchTurn();
            this.shotsFired = false;
            this.shoot = false;
        }
    }

    missleCollision() {
        if ((this.missle.pos[0] > CONSTANTS.DIM_X ||
            this.missle.pos[0] < 0) || (this.missle.pos[1] > CONSTANTS.DIM_Y || this.missle.pos[1] < 0) ) {
                return true;
            }
        // if (this.missle.collision(this.platform)) return true;
        if (this.missle.collision(this.tank)) return true;
        if (this.missle.collision(this.tank2)) return true;
        return false
    }

    switchTurn() {
        if (this.currentTank === this.tank) {
            this.currentTank = this.tank2;
        } else if (this.currentTank === this.tank2) {
            this.currentTank = this.tank;
        }
    }

    keyDown(e) {
        if (!this.shotsFired) {
            switch (e.key) {
                case 'a':
                    this.direction = 'left';
                    break;
                case 'd':
                    this.direction = 'right';
                    break;
            }
        }
    }

    keyUp(e) {
        if (e.key === ' ') {
            this.shoot = true;
            this.missle = new Missle(this.currentTank.pos, this.forceBar.force);
        }
    }

}