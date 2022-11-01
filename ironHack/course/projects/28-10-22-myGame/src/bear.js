
class Bear {
    constructor() {
        this.width = 100
        this.height = 140
        this.x = 50
        this.y = 200;
        this.stamina = 0;

        this.topLane = 30;
        this.middleLane = 200;
        this.bottomLane = 360;
    }

    moveUp() {
        if(this.y == this.topLane) {
            this.y == this.topLane;
        } else if(this.y == this.middleLane) {
            this.y = this.topLane;
        } else if (this.y == this.bottomLane) {
            this.y = this.middleLane;
        }
    }

    moveDown() {
        if(this.y == this.topLane) {
            this.y = this.middleLane;
        } else if(this.y == this.middleLane) {
            this.y = this.bottomLane;
        } else if (this.y == this.bottomLane) {
            this.y = this.bottomLane;
        }
    }

    draw() {
        
    }

    show() {
        image(game.bearImage, this.x,this.y,160,160);
    }
}