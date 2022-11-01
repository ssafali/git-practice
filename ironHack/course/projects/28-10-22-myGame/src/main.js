
let game;

function preload() {
  game = new Game();
  game.preload();
}

function setup() {
  createCanvas(1118, 540);
}

function draw() {
  game.draw();
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    game.bear.moveUp();
  } else if (keyCode === DOWN_ARROW) {
    game.bear.moveDown();
  }
}

function draw() {
  background(game.backgroundImage);
  game.bear.show();
  game.draw();
}

