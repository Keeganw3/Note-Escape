let leftShip;
let rightShip; 
let allDebris = [];

var NUM_DEBRIS = 30;

let spaceshipImage;
function setup() {
  createCanvas(400, 400);

  // get music note image from images
  spaceshipImage = loadImage('/assets/images/playerMusicNote.png');
  enemyMusicNote = loadImage('/assets/images/enemyMusicNote.png');
  
  // pass image into the player object
  leftShip = new Ship(width * 0.33, spaceshipImage);
  rightShip = new Ship(width * 0.66, spaceshipImage);
  
  // create the debris objects
  for (let i = 0; i < NUM_DEBRIS; i++) {
  	allDebris.push(new Debris(enemyMusicNote));
  }
}

var stage = 0;

function draw() {
  if (stage==0){
    splash();
  }
  if (stage==1){
    game();
  }
  if (stage==2){
    game();
  }
  if (stage==3){
    game();
  }
  if (stage==4){
    win();
  }
  if (mouseIsPressed == true && stage == 0){
    stage = 1;
  }
}

function splash() {
  background(0);

  stroke(0,255,0);
  noFill();
  strokeWeight(3);
  rect(width/2, height/2);
  noStroke();

  fill(255,255,255);
  textSize(30);
  textFont('Alfa Slab One');
  text('Note Escape', width/4, 50);

  textSize(15);
  textFont('Roboto Slab');
  text('Click to start the game!', width/3, 300);
}

function win() {
  background(0);

  stroke(0,255,0);
  noFill();
  strokeWeight(3);
  rect(width/2, height/2);
  noStroke();

  fill(255,255,255);
  textSize(30);
  textFont('Alfa Slab One');
  text('YOU WIN!!!', width/4, 50);
  
  textSize(15);
  textFont('Roboto Slab');
  text('Click to start the game!', width/3, 300);  
}

function game() {
  background(0);
  
  leftShip.update();
  rightShip.update();
  
  leftShip.display();
  rightShip.display();
  
  updateDebrisAndCheckCollisions();
  
}


function updateDebrisAndCheckCollisions() {
  for (let i = 0; i < allDebris.length; i++) {
    allDebris[i].update();
  	allDebris[i].display();
    
    if (allDebris[i].hasHitShip(leftShip)) {
    	leftShip.respawn();
    } else if (allDebris[i].hasHitShip(rightShip)) {
    	rightShip.respawn();
    }
  }
}


function keyPressed() {
	if (keyCode == UP_ARROW) {
  	rightShip.isUp = true;
    rightShip.isDown = false;
  } else if (keyCode == DOWN_ARROW) {
  	rightShip.isDown = true;
    rightShip.isUp = false;
  }
  
  
  if (keyCode == 87) {
  	// keycode is 'w'
    leftShip.isUp = true;
    leftShip.isDown = false;
  } else if (keyCode == 83) {
  	// keycode is 's'
    leftShip.isDown = true;
    leftShip.isUp = false;
  }
}


function keyReleased() {
	if (keyCode == UP_ARROW) {
  	rightShip.isUp = false;
  } else if (keyCode == DOWN_ARROW) {
  	rightShip.isDown = false;
  }
  
  if (keyCode == 87) {
    leftShip.isUp = false;
  } else if (keyCode == 83) {
    leftShip.isDown = false;
  }
}