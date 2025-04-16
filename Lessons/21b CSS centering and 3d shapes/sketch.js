// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let angle = 5;

function setup() {
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(220); //WEBGL IS 0, 0 CENTER
  rotateY(frameCount);
  rotateX(20);
  angle = map(mouseX, 0, width, -120, 120)
  // box();
  for(let i = 0; i < 360; i+= 45){
    push();
    rotateY(i);
    drawBox(40);
    pop();
  }
  
}

function drawBox(size){
  if(size > 1){
    rotateZ(angle);
    translate(size*1.5, 0);
    box(size);

    drawBox(size*0.8);
  }
}
