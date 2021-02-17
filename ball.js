/*jshint esversion: 6 */

class Ball {
  
  constructor() {
    this.r = 10;
    this.reset();
  }

  update() {
    if (this.x < this.r || this.x > width - this.r) {
      this.xSpeed = -this.xSpeed;
    }

    if (this.y > height + this.r) {
      this.reset();
    } else if (this.y < this.r) {
      this.ySpeed = -this.ySpeed;
    }

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    this.xSpeed = this.xSpeed * 1.0007;
    this.ySpeed = this.ySpeed * 1.0007;
  }

  reset() {
    this.x = width/2;
    this.y = height/2;

    this.xSpeed = random(1, 2);
    this.ySpeed = random(1, 5);
  }

  display() {
    circle(this.x, this.y, this.r * 2);
  }

  hasHitPlayer(player) {
    if (this.y - this.r <= player.y + player.height && this.y > player.y) {
      if (this.isSameHeight(player)) {
        this.ySpeed = -this.ySpeed;
        score.increment();
      }
    }
  }

  isSameHeight(player) {
    return this.x >= player.x && this.x <= player.x + player.width;
  }
}