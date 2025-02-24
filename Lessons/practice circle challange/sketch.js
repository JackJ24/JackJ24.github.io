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
  circleLine();
}


function circleLine(){
  //use a loop(for or while) to draw a line
  //of circles side by side
  let d = 40; // diameter of each circle
  let y = height/2;
  let xStart = 0;
  let yStart = 0;
  let xEnd = width ;
  let yEnd = height ;
  let l = 20;

  //use a loop to draw
  //results in a single image, no animation
  for(let x = xStart; x <= xEnd; x+=d){
    //x: 0, 40, 80, 120, 160, 200
    let y = 0;
    x = x + l;
    circle(x, y, d);
    line(x, y, mouseX, mouseY);
  }

  for(let y = xStart; y <= yEnd; y+=d){
    //x: 0, 40, 80, 120, 160, 200
    let x = 0;
    y = y + l;
    circle(x, y, d);
    line(x, y, mouseX, mouseY);
  }

  for(let x = xStart; x <= xEnd; x+=d){
    //x: 0, 40, 80, 120, 160, 200
    let y = height;
    x = x + l;
    circle(x, y, d);
    line(x, y, mouseX, mouseY);
  }

  for(let y = xStart; y <= yEnd; y+=d){
    //x: 0, 40, 80, 120, 160, 200
    let x = width;
    y = y + l;
    circle(x, y, d);
    line(x, y, mouseX, mouseY);
  }
}