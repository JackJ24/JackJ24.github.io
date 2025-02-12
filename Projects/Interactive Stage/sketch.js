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
  background(220);
  
  building();
  ground();
  
}

function ground(){
  rectMode(CENTER);
  fill(25, 155, 0);
  rect(width / 2, height, width, height * .30);
}

function building(){
  buildingOne(0.10);
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