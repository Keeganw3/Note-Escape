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

  createDebris();
}

  // create the debris objects
  function createDebris() {

  for (let i = 0; i < NUM_DEBRIS; i++) {
  	allDebris.push(new Debris(enemyMusicNote));
  }
}


var stage = 2;

function draw() {
  if (stage==0){
    splash();
  }
  else if (stage==1){
    round1();
  }
  else if (stage==2){
    splash2();
  }
  else if (stage==3){
    round2();
  }
  else if (stage==4){
    splash3();
  }
  else if (stage==5){
    round3();
  }
  else if (stage==6){
    win();
  }

  if (mouseIsPressed == true && stage == 0){
    stage = 1;
  }
  if (mouseIsPressed == true && stage == 2){
    stage = 3;
  }
  if (mouseIsPressed == true && stage == 4){
    stage = 5;
  }
}

function splash() {
  background(0);

  fill(255,255,255);
  textSize(30);
  textFont('Alfa Slab One');
  text('Note Escape', width/4, 50);

  textSize(15);
  textFont('Roboto Slab');
  text('Use The Up And Down Arrow Keys To Move.', width/8, 150);
  text('Avoid The Music Notes While Trying To', width/7, 200);
  text('Reach The Top Of The Screen.', width/4.35, 250);
  text('Click to start stage 1!', width/3.5, 320);
}

function splash2() {
  background(0);

  stroke(0,255,0);
  noFill();
  strokeWeight(3);
  rect(width/2, height/2);
  noStroke();

  fill(255,255,255);
  textSize(30);
  textFont('Alfa Slab One');
  text('Stage 2', width/3, 50);

  textSize(15);
  textFont('Roboto Slab');
  text('Click To Start The Next Stage!', width/4.3, 200);
}

function splash3() {
  background(0);

  stroke(0,255,0);
  noFill();
  strokeWeight(3);
  rect(width/2, height/2);
  noStroke();

  fill(255,255,255);
  textSize(30);
  textFont('Alfa Slab One');
  text('Stage 3', width/3, 50);

  textSize(15);
  textFont('Roboto Slab');
  text('Click to start the final stage!', width/4.1, 200);
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
  text('YOU WIN!!!', width/3.7, 50);
  
  textSize(15);
  textFont('Roboto Slab');
  text('Congratulations on finishing your journey!', width/7, 150);  
  text('Refresh the page to play again!', width/4.5, 250);

}

function round1() {
  background(0);

  leftShip.update();
  rightShip.update();
  
  leftShip.display();
  rightShip.display();
  
  updateDebrisAndCheckCollisions();
}

function round2() {
  background(0);
  
  leftShip.update();
  rightShip.update();
  
  leftShip.display();
  rightShip.display();
  
  updateDebrisAndCheckCollisions();
}

function round3() {
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