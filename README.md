<!-- ## Background:
- MiisyleTank is going to be a game where two or more players take turns to shoot projectiles based on how much force is applied by pressing space. when missle collides the platforms it would have a damage radius and damage the tanks.

- Players will also be able to move around the map to reposition themselves, may also take in a factor of wind that changes every round randomly and it would affect on missles that is in the air

## Technologies, Libraries and APIs
- Don't know what libraries or APIs I'm going to use. I will update this README when I encounter situations where I'm going to need APIs/Libraries etc.

## WireFrames
![](./images/wireframe.png)

## Functionalities:
- In MiisyleTank, users will be able to:
    * Start, Pause, and Restart
    * move current player's tank on a 2d platform
    * Shoot missle projectiles to damage other players
    * Visualize where the missle have hit and it's damage radius
- In addition, this project will include:
    * Instructions for basic controls and how to win a game
    * A production README
    
## Implementation Timeline

- Friday/Weekend: Set up the basic canvas and create class for tank and game class as well as the background platform that tanks are going to be move on

- Monday: Add movements to tanks and restrictions on how far a tank can move and time, and create missle class

- Tuesday: Implement game logic

- Wednesday: If finish game logic then make my game look cleaner and prettier using sprites

- Thursday: Refactor what is left off and if everything basic is finished will then think about remodel my tank, map, and background -->

# [CnoonBall][1]

# Background
- CnoonBall is a game where two players take turns to shoot projectiles on each other, based on how much force is applied by pressing space, the projectile would shoot further.

- Players can move with a/d or &larr;/&rarr; to move around the platform. Hold Space to charge force and release space to fire.

- There's a wind factor in the middle of the screen, + number of wind will make projectile to travel further and faster to right of screen, - number of wind would do the opposite.

# Implementation

- Has a game class to initialize everything on the canvas and animate/move each object in one main game class
```
start() {
        // Background
        this.background = new Background();
        // Platform
        this.platform = new Platform({width: CONSTANTS.DIM_X, height: CONSTANTS.DIM_Y});
        const pos = [this.platform.width / 10, this.platform.height - this.platform.height / 5];
        // ForceBar
        this.forceBar = new ForceBar();
        // Tanks
        this.tank = new Tank(pos, 'red', 'right');
        this.tank2 = new Tank([CONSTANTS.DIM_X-pos[0], pos[1]], 'blue', 'left');
        this.currentTank = this.tank2;
        // GameOver ?
        this.gameOver = false;  

        document.addEventListener("keydown", this.keyDown.bind(this));
        document.addEventListener("keyup", this.keyUp.bind(this));
    }

    animate() {
        if (this.tank.health <= 0) {
            this.gameOver = true;
            this.winner = this.tank2;
        } else if (this.tank2.health <= 0) {
            this.gameOver = true;
            this.winner = this.tank;
        }

        
        if (!this.shotsFired) {
            this.background.animate(this.ctx);
            this.platform.animate(this.ctx);
            this.forceBar.animate(this.ctx);
            this.printWind();
            this.currentMark();
            this.tank.animate(this.ctx, this.currentTank);
            this.tank2.animate(this.ctx, this.currentTank);
        }
        if (this.shoot) this.fire();
    }
```

- Has a GameView class to start / restart and handle situation for game over

```
constructor (ctx) {
        this.ctx = ctx;
        this.restart(ctx);
        this.terminate = false;
    }

    restart(ctx) {
        this.game = new Game(ctx);
        this.game.start();
        this.game.animate();

        this.ctx.fillStyle = 'black';
        this.ctx.font = '50px serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`Press Start Button to Play`, CONSTANTS.DIM_X / 2, CONSTANTS.DIM_Y / 2, 500);
    }

    gameover() {
        if (this.game.gameOver) {
            return true;
        } else {
            return false;
        }
    }
```

# Future Implementation

- Add angle for a more dynamic ways for players to shoot projectiles
- Add factors for projectile explosion on collision
- Destroys platform if explosion hits




[1]: https://penghuidong520.github.io/missleTank/