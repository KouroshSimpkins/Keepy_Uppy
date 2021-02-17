/*jshint esversion: 6 */

let paddle;
let ball;
let score;
let gameState;

function setup() {
  frameRate(144);
  createCanvas(400, 600);

  gameState = 'play';
  paddle = new Paddle(height - 48);
  ball = new Ball();
  score = new Score(width / 2);
}

function draw() {
  if(gameState === 'play') {
    background(0);

    paddle.display();
    paddle.update();

    ball.update();
    ball.display();
    ball.hasHitPlayer(paddle);
    
    score.display();

    if (ball.belowBottom()) {
      gameState = 'lose';
    }

  } else {
    textSize(60);
    gameState === 'lose' ? fill(255, 255, 255) : fill(255);
    text('You lose!', width / 2, height / 2);
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    paddle.isLeft = true;
  } else if (keyCode == RIGHT_ARROW) {
    paddle.isRight = true;
  }
}

function keyReleased() {
  if (keyCode == LEFT_ARROW) {
    paddle.isLeft = false;
  } else if (keyCode == RIGHT_ARROW) {
    paddle.isRight = false;
  }
}
