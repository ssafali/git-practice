
class clubMate {
    constructor(image) {
        this.image = image;
        this.x = WIDTH;
        this.y = arrOfLanes[(Math.floor(Math.random()*3))];

        this.width = 25;
        this.height = 55;
    }

    draw() {
        this.x -=12;
        image(this.image, this.x, this.y, this.width, this.height)
    }

    drink(playerInfo) {
        let drinkMateX = this.x + this.width / 2;
        let drinkMateY = this.y + this.height / 2;

        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;
    
        if (dist(drinkMateX, drinkMateY, playerX, playerY) > this.width / 2) {
            return false;
        } else {
            playerInfo.stamina += 100;
            document.querySelector("h2 span").innerText = playerInfo.stamina
            return true;
        }
    }
}