// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let racer1 ;
let racer2 ;
let racer3;


function setup() {
  createCanvas(windowWidth, windowHeight);
  racer1 = new RoundRacer(height*0.25, theColor = [random(0,255), random(0,255), random(0,255)]);
  racer2 = new RoundRacer(height*0.50, theColor = [random(0,255), random(0,255), random(0,255)]);
  racer3 = new RoundRacer(height*0.75, theColor = [random(0,255), random(0,255), random(0,255)]);
}

function draw() {
  background("green");
  fill(20, 20, 20);
  h = 20;
  rect(0, height*0.2, width, height*0.6);
  for(i = 0; i <= width; i += 60){
    fill(255, 250, 0);
    rect(i, height*0.5, h, 10);
  }

  racer1.display();
  racer1.move();
  racer2.display();
  racer2.move();
  racer3.display();
  racer3.move();
}


class RoundRacer{

  constructor(yPosition, theColor){
    this.yPos = yPosition;
    this.Acolor = theColor; 
    this.xPos = 0;
    this.xSpeed = random(3,15);
    this.hLaps = 0;
  }

  move(){
    this.xPos += this.xSpeed;
    if (this.xPos >= width){
      this.xPos = 0;
      this.hLaps += 1;
    }
  }

  display(){
    fill(this.Acolor[0], this.Acolor[1], this.Acolor[2]);
    circle(this.xPos, this.yPos, 30);
    fill(255, 255, 255);
    textSize(100);
    text(this.hLaps, this.xPos, this.yPos);
    
  }

}