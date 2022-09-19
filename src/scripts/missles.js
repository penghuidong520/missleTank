import { DIM_Y } from './constants';

const CONSTANTS = require('./constants');

export default class Missle{
    constructor(pos) {
        this.pos = [pos[0] + CONSTANTS.TANK_SIZE, pos[1] - CONSTANTS.TANK_SIZE + 5];
        this.size = CONSTANTS.MISSILE_SIZE;
        this.width = CONSTANTS.MISSILE_SIZE;
        this.height = CONSTANTS.MISSILE_SIZE;
        this.speed = CONSTANTS.MISSILE_SPEED;
        this.drop = 0;
    }

    drawMissle(ctx) {
        ctx.fillStyle = CONSTANTS.MISSILE_COLOR;

        this.pos[0] += this.speed;
        // add gravity to have the bullet be projecting
        this.drop += CONSTANTS.GRAVITY;
        this.pos[1] += this.drop;
        ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    } 

    collision(obj) {
        // console.log(obj);
        // console.log(this.pos[1], obj.pos[1])
        if (
            (this.pos[0] > obj.pos[0] &&
            this.pos[0] < obj.pos[0] + obj.width) && 
            (this.pos[1] < obj.pos[1] && this.pos[1] > obj.pos[1] - obj.height)
            ) 
        {
            return true;
        }
            return false;
    }

}