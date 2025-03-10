// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  aClock();
}


function aClock(){

  push();
  rectMode(CORNERS);
  noFill();
  angleMode(DEGREES);
  translate(200,200);
  circle(0,0,300);
  let clockLine = 60;
  let clockAngle = 360/clockLine;
  let clockCount = 0;
  for(r = 0; r < clockLine; r++){
    
    
    if (clockCount === 0){
      fill(0, 0, 0);
      rect(120, 0, 150, 3);
    }
    
    else{
      line(120, 0, 150, 0);
    }
    rotate(clockAngle);
    clockCount += 1;
    if (clockCount === 5){
      clockCount = 0;
    }
  }


  
  


  pop();
}