// Drawin with single loops
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  gradientBackground();
  circleLine();
  
}

function gradientBackground(){
  //create a gradient to use as a background
  let h = 1;

  //use loop to draw vertical stack of rectangles
  for(let y = 0; y < height; y += h){
    
    noStroke();
    let mappedY = map(y,0,height,0,255);
    let reversedY = map(y,0,height,255, 0);
    fill(mouseY/3, 255, reversedY);
    rect(0, y, width, h);


  }


}





function circleLine(){
  //use a loop(for or while) to draw a line
  //of circles side by side
  let d = 50; // diameter of each circle
  let y = height/2;
  let xStart = 0;
  let xEnd = width + 20;

  //use a loop to draw
  //results in a single image, no animation
  for(let x = xStart; x <= xEnd; x+=d){
    //x: 0, 40, 80, 120, 160, 200
    circle(x, y, d);
  }
}