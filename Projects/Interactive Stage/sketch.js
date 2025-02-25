// Interactive Stage
// Jack
// Feb 11th 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"





//setup
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  
}

//frames
function draw() {
  background(200);
  mountians();
  theGround();
  theSun();
  playChar();
  
}

function scene(){
  theGround();
  background();

}

function theGround(){
  fill(25, 155, 0);
  rect(width / 2, height, width, height * .30);
}

//mountians
function mountians(){
  noStroke();
  //mountain 1
  fill(41, 40, 40);
  triangle(200, 400, 0, 800, 400, 800);
 
  //peak
  stroke(0);
  fill(255, 255, 255);
  triangle(200, 400, 150, 500, 250, 500);


  //mountian 2
  noStroke();
  fill(41, 40, 40);
  triangle(400, 200, 100, 800, 800, 800);
  
  //peak
  stroke(0);
  fill(255, 255, 255);
  triangle(400, 200, 300, 400, 535, 400);
}

function theSun(){
  
  //colour and border
  stroke(0);
  fill(243, 156, 18);

  circle(100, 100, height*0.30);
}


let charLoc = 100;
function playChar(){

  
  charMove();

  circle(charLoc, height * 0.85, height * 0.10)

  fill(255, 255, 255);
  circle(charLoc-20, height * 0.80, height * 0.05)
  circle(charLoc+20, height * 0.80, height * 0.05)

  fill(0, 0, 0);
  circle(charLoc-20, height * 0.80, height * 0.02)
  circle(charLoc+20, height * 0.80, height * 0.02)

  fill(255, 0, 0, )
  ellipse(charLoc, height*0.85, height * 0.08, height * 0.05)


}


function charMove(){
  if (keyIsDown(LEFT_ARROW)){
    charLoc-= 10;
  }

  if (keyIsDown(RIGHT_ARROW)){
    charLoc+= 10;
  }

}


















// unused stuff
function building(){
  buildingOne(0.0);
  buildingTwo(0.27);
  buildingThree(0.44);
}

function buildingOne(a){
  rectMode(CORNER);
  fill(200, 255, 100)
  rect(width * a, 360, 110, 300);

  let windowA = a + 0.05;
  let windowB = a + 0.12;
  let door = a + 0.09;
  
  
  circle(width * windowA, height * 0.50, 20);
  circle(width * windowB, height * 0.50, 20);
  
  circle(width * windowA, height * 0.60, 20);
  circle(width * windowB, height * 0.60, 20);
  
  circle(width * windowA, height * 0.70, 20);
  circle(width * windowB, height * 0.70, 20);

  fill(20, 5, 1110);
  ellipse(width * door, height * 0.84, 40, 70);

}

function buildingTwo(a){
  rectMode(CORNER);
  fill(200, 255, 100)
  
  rect(width * 0.27, 380, 110, 300);
  
  let windowA = a + 0.05;
  let windowB = a + 0.12;
  let door = a + 0.09;
  
  
  circle(width * windowA, height * 0.55, 20);
  circle(width * windowB, height * 0.55, 20);
  
  circle(width * windowA, height * 0.65, 20);
  circle(width * windowB, height * 0.65, 20);
  
  circle(width * windowA, height * 0.75, 20);
  circle(width * windowB, height * 0.75, 20);

  fill(20, 5, 1110);
  ellipse(width * door, height * 0.84, 40, 70);

}

function buildingThree(a){
  rectMode(CORNER);
  fill(200, 255, 100)
  
  rect(width * 0.44, 320, 110, 360);
  
  let windowA = a + 0.05;
  let windowB = a + 0.12;
  let door = a + 0.09;
  
  circle(width * windowA, height * 0.45, 20);
  circle(width * windowB, height * 0.45, 20);

  circle(width * windowA, height * 0.55, 20);
  circle(width * windowB, height * 0.55, 20);
  
  circle(width * windowA, height * 0.65, 20);
  circle(width * windowB, height * 0.65, 20);
  
  circle(width * windowA, height * 0.75, 20);
  circle(width * windowB, height * 0.75, 20);

  fill(20, 5, 1110);
  ellipse(width * door, height * 0.84, 40, 70);
}