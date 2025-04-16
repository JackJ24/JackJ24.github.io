// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  stroke(0, 0, 0, 50);
}

function draw() {
  background(220);
  randomSeed(1);
  squareThing(width/2, height/2, 100);
}

function squareThing(x,y,d){
  fill(random(255), random(255), random(255));
  noStroke();

  
  square(x, y, d);
  if(d > 0.5){
    squareThing(x-d/2, y-d/2, d/2);
    squareThing(x+d/2, y+d/2, d/2);
    squareThing(x-d/2, y+d/2, d/2);
    squareThing(x+d/2, y-d/2, d/2);
  }
}
