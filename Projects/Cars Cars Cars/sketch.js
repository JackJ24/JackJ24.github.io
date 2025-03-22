// CARS CARS CARS
// JACK
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let westBound = [];
let eastBound = [];
let car1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  intCars();
  car1 = new Vehicle(0);

  
}

function intCars(){

  for(let i = 0; i <= 20; i++){
    let e = new Vehicle(0);
    eastBound.push(e);
    let w = new Vehicle(1)
    westBound.push(w);
  }
}

function draw() {
  background(180);
  
  
  
  fill(20, 20, 20);
  h = 20;
  rect(0, height*0.2, width, height*0.6);
  for(let i = 0; i <= width; i += 60){
    fill(255, 255, 255);
    rect(i, height*0.5, h, 10);
  }





  for(let i = 0; i <= eastBound.length - 1; i++){
    westBound[i].action();
    eastBound[i].action(); 
    
  }

}






class Vehicle{

  constructor(direction){
    this.dir = direction;
    if (this.dir === 0){
      this.x = width;
      this.y = height*random(0.2, 0.45);
      this.xSpeed = -random(15);
      this.c = [random(255), random(255), random(255)];
      this.type = round(random(0,1));
      
      console.log(this.color);
    }
    if (this.dir === 1){
      this.x = 0;
      this.y = height*random(0.5, 0.75);
      this.xSpeed = random(15);
      this.c = [random(255), random(255), random(255)];
      this.type = round(random(0,1));
      
      console.log(this.color);
    }
    

  }

  action(){
    this.move();
    this.display();
    this.chanceFunctions();
  }

  //class methods

  //display the car or truck
  display(){
    //car
    if (this.type === 0){
      fill(this.c[0], this.c[1], this.c[2]);
      rect(this.x, this.y, 50, 20);
      fill(255, 255, 255);
      rect(this.x + 40, this.y + 20, 10, 5);
      rect(this.x + 40, this.y - 5, 10, 5);
      rect(this.x , this.y - 5, 10, 5);
      rect(this.x , this.y + 20, 10, 5);
    }
    if (this.type === 1){
      fill(this.c[0], this.c[1], this.c[2]);
      if(this.dir === 0){
      rect(this.x, this.y, 50, 40);
      triangle(this.x, this.y, this.x - 20, this.y + 20, this.x, this.y + 40);
      }
      if(this.dir === 1){
        rect(this.x, this.y, 50, 40);
        triangle(this.x + 50, this.y, this.x + 70, this.y + 20, this.x + 50, this.y + 40);
        }
    }

  }

  //moves the car in its respective direction
  move(){
    this.x += this.xSpeed;
    if(this.dir === 0){
      if(this.x <= width*0 - 50){
        this.x = width;
      }
    }
    if(this.dir === 1){
      if(this.x >= width){
        this.x = width*0;
      }
    }
  }

  chanceFunctions(){
    for(let i = 1; i !== 4; i++){
      let chance = round(random(0, 100));
      if(i === 1 && chance == 50){
        this.speedUp();
      }
      if(i === 2 && chance == 50){
        this.speedDown();
      }
      if(i === 3 && chance == 50){
        this.changeColor();
      }

    }
  }

  speedUp(){
    if(this.dir === 0){
      this.xSpeed += -2;
      if(this.xSpeed < -15){
        this.xSpeed = -15;
      }
    }
    if(this.dir === 1){
      this.xSpeed += 2;
      if(this.xSpeed > 15){
        this.xSpeed = 15;
      }
    }

  }

  speedDown(){
    if(this.dir === 0){
      this.xSpeed += 2;
      if(this.xSpeed > 0){
        this.xSpeed = 0;
      }
    }
    if(this.dir === 1){
      this.xSpeed += -2;
      if(this.xSpeed < 0){
        this.xSpeed = 0;
      }
    }

  }

  changeColor(){
    this.c = [random(255), random(255), random(255)];
  }
  


}