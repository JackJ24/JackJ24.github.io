// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let eastBound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  intCars();
  
}

function intCars(){

  for(let i = 0; i <= 20; i++){
    let e = new Vehicle(0);
    eastBound.push(e);
  }
}

function draw() {
  background(180);
  
  
  fill(20, 20, 20);
  h = 20;
  rect(0, height*0.2, width, height*0.6);
  for(i = 0; i <= width; i += 60){
    fill(255, 255, 255);
    rect(i, height*0.5, h, 10);
  }

  fill(123, 1, 123);
  rect(width*0.5, height/2, 50, 20);
  fill(255, 255, 255);
  rect(width*0.5 + 40, height/2 + 20, 10, 5);
  rect(width*0.5 + 40, height/2 - 5, 10, 5);
  rect(width*0.5 , height/2 - 5, 10, 5);
  rect(width*0.5 , height/2 + 20, 10, 5);

  
  for(let i = 0; i <= eastBound.length; i++){
    let e = eastBound[i];
    e.action();
  }

}


class Vehicle{

  constructor(direction){
    this.type = direction;
    if (direction === 0){
      this.x = width;
      this.y = height*random(0.2, 0.6);
      this.xSpeed = -random(15);
      this.color = fill(random(255), random(255), random(255));
      this.whatType = random(0,1);
      this.direction = 0;
    }
    

  }

  action(){
    this.move();
    this.display();
  }

  //class methods
  display(){
    if (this.type === 0){
      fill(123, 1, 123);
      rect(this.x, this.y, 50, 20);
      fill(255, 255, 255);
      rect(this.x + 40, this.y + 20, 10, 5);
      rect(this.x + 40, this.y - 5, 10, 5);
      rect(this.x , this.y - 5, 10, 5);
      rect(this.x , this.y + 20, 10, 5);
    }
  }

  move(){
    this.x += this.xSpeed;
    if(this.type === 0){
      if(this.x <= width/0){
        this.x = width;
      }
    }
  }


}