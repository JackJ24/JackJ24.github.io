// Drawing with shapes practice
// Your Name
// feb 10, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// global variable declarations
//let boxX = 200;
//let boxY = 100;
let headSize = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(220);
  drawCharacter();
  //drawBox();
}

function drawCharacter(){
  fill(255, 0, 255)
  circle(width * .50, height * .50, headSize);
  rect(width  * .50, height * .55, headSize, headSize * 0.65);


  
  rect(width  * .425, height * .55, headSize * .05, headSize* 0.80 );
  rect(width  * .575, height * .55, headSize * .05, headSize * 0.80);
  
  rectMode(CENTER);
  fill(0, 0, 0);
  circle(width * .45, height * .50, headSize * 0.10);
  circle(width * .55, height * .50, headSize * 0.15);
  rect(width * .50, height * .55, headSize * .65, headSize * .05);


  

  
  

}




function drawBox(){
  //draw a box
  fill(255, 155, 55);
  rect(boxX, boxY, 50, 30, 5, 5, 0, 0);
  rect(boxX, boxY -50, 30);
}

function keyPressed(){
  if(key === "a"){
    boxX = 0;
  } 
  if(key === "b"){
    boxY = 400;
  }
  if(keyCode === ESCAPE){
    boxX = width * 0.85; //85% across the screen
    boxY = height * 0.6; //60% down the screena
  }
}
