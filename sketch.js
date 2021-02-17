/*jshint esversion: 6 */

let paddle;
let ball;
let score;

function setup() {
  frameRate(144);
  createCanvas(400, 600);

  paddle = new Paddle(height - 48);
  ball = new Ball();
  score = new Score(width / 2);
}

function draw() {
  background(0);

  paddle.display();
  paddle.update();

  ball.update();
  ball.display();
  ball.hasHitPlayer(paddle);
  
  score.display();
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
