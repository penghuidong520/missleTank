export default class MoveObject {
    constructor(obj) {
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.color = obj.color;
    }

    move(key) {
        // ctx.clearRect(this.pos[0], this.pos[1], 50, -50);
        if (key === 'a') this.pos[0] -= this.vel;
        if (key === 'd') this.pos[0] += this.vel;
    }
}

// module.exports = MoveObject;