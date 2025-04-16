// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x,y;
let xSpeed, ySpeed;
let totalBounces = 0;

function setup() {
  createCanvas(300, 200);
  x = width/2; y = height/2;
  xSpeed = 5; ySpeed = 3;
  if(localStorage.getItem("numBounces") === null){
    localStorage.setItem("numBounces", 0);
  }
  else{
    totalBounces = int(localStorage.getItem("numBounces"));
  }
  textSize(30); textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  updateBall();
  text(totalBounces, width/2, height/2);
  
}

function updateBall(){
  //calc new pos
  x += xSpeed; y += ySpeed;

  //check for bounce
  if(x >= width || x <= 0){
    xSpeed*= -1;
    totalBounces++;
    localStorage.setItem("numBounces", totalBounces);
  }
  if(y >= height || y <= 0){
    ySpeed*= -1;
    totalBounces++;
    localStorage.setItem("numBounces", totalBounces);
  }




  circle(x,y,20);
}
