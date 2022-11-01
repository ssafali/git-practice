
class Game {
    constructor() {
        this.bear = new Bear();
        this.bearImage;
        this.backgroundImage;
        this.mateImage;

        this.clubMates = [];
        // this.police = [];
    }

    preload() {
        this.bearImage = loadImage('assets/bearMoving.gif');
        this.backgroundImage = loadImage('assets/ohneBaer.png');
        this.mateImage = loadImage('assets/clubMate.png');
    }

    draw() {
        clear();
        background(this.backgroundImage);
        this.bear.show();

        if (frameCount % 40 === 0) {
            this.clubMates.push(new clubMate(this.mateImage))
        }

        this.clubMates.forEach(mate => {
            mate.draw();
        })

        this.clubMates = this.clubMates.filter(mate => {
            if(mate.drink(this.bear) || mate.x < -mate.width) {
                return false;
            } else {
                return true;
            }
            
        })

        if(this.bear.stamina > 500) {
            noLoop()
        }


    }
}