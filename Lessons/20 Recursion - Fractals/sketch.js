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
 
  //cantor(width*0.1, height*0.3, width*0.8, 40);
  circleFractal(width/2, height/2, 100);
}

// function reCircle(x, y, d){
//   //recursively draw circles as lon as diameter > 5

//   circle(x,y,d);
//   if (d >= 10){
//     reCircle(x,y,d*0.9);
//   }
//   //base case (if d < 10)
// }

// function cantor(x, y, len, depth){
//   if(depth > 1){
//     line(x, y, x+len, y);
//     y += 20;

//     cantor(x, y, len/3, depth-1); // left third
//     cantor(x + len*2/3, y, len/3, depth-1);
//   }
//   //otherwise BASE CASE
// }

function circleFractal(x, y, d){
  noFill();
  if(d > 1){
    circle(x,y,d);
    //recursive calls
    circleFractal(x-d/2, y, d/2);
    circleFractal(x+d/2, y, d/2);
    circleFractal(x, y-d/2, d/2);
    circleFractal(x, y+d/2, d/2);
  }
  //implicit base case - dont recurse of diameter is small
}
