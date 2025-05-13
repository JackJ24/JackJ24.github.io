// Inheritance and Code across may files
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let x = 0; x < 10; x++){
    objects.push(new AnimatedObject(random(width), random(height)));
    objects.push(new CircleObj(random(width), random(height)));
    objects.push(new LineObj());
  }
}

function draw() {
  background(220);
  for(let o of objects){
    o.move();
    o.display();
  }
}




