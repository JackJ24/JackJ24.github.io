// Fractal
// Jack
// 25/04/29
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  ellipseFractal(width/2, height/2, 100, 300);
}

//fractal
function ellipseFractal(x, y, d, d2){
  if(d > 5){
    noFill();
    ellipse(x,y,d, d2);
    //recursive calls
    ellipseFractal(x-d/2, y, d/2, d2/2);
    ellipseFractal(x+d/2, y, d/2, d2/2);
    ellipseFractal(x, y-d/2, d/2, d2/2);
    ellipseFractal(x, y+d/2, d/2, d2/2);
  }

}
