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
  background(220);
  triFractal(width/2, height/2, width/2 + 50, height/2 + 100, width/2 + 100, height/2, 100);
}

function triFractal(x1,y1,x2,y2,x3,y3, s){
  triangle(x1,y1,x2,y2,x3,y3);
  if(s > 1){
    triFractal(x1, y1, x2 - s*0.5, y2 - s, x3, y3,);

  }
}
