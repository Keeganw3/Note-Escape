class Ship {

    constructor(x, spaceshipImage) {
      this.x = x;
      this.score = 0;
      this.respawn();
      this.r = 15;
      this.spaceshipImage = spaceshipImage;
    }
  
    respawn() {
      this.y = height - 20;
      this.isUp = false
      this.isDown = false;
    }
   
    update() {
      if (this.isUp && this.y > 0) {
        this.up();
      } else if (this.isDown && this.y < height - 20) {
        this.down();
      }
      
      if (this.levelPassed()) {
        stage = stage + 1;
        this.respawn();
      }
    }
    
    display() {
      ellipse(this.x, this.y, this.r * 2, this.r * 2);

      imageMode(CENTER);
      image(this.spaceshipImage, this.x, this.y, this.r*2, this.r*2);
    }
    
    
    up() {
      this.y--;
    }
    
    down() {
     this.y++;
    }
    
    levelPassed() {
      if (this.y <= 0) {
        return true;
      }
      return false;
    }
  }