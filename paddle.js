/*jshint esversion: 6 */

class Paddle {

  constructor(y) {
    this.x = length / 2;
    this.y = y;
    this.width = 80;
    this.height = 20;

    this.isLeft = false;
    this.isRight = false;
  }

  display() {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }

  left() {
    if (this.x > 0) {
      this.x -= 8;
    }
  }

  right() {
    if (this.x < width - this.width){
      this.x += 8;
    }
  }

  update() {
    if (this.isLeft) {
      this.left();
    } else if (this.isRight) {
      this.right();
    }
  }
}