// CARS CARS CARS
// JACK JOHNSTON
// March, 28, 2025
//


//Int Variables
let westBound = [];
let eastBound = [];
let car1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  intCars();

  
}

//funciton that creates westbound, and eastbound cars.
function intCars(){

  for(let i = 0; i <= 20; i++){
    let w = new Vehicle(0);
    westBound.push(w);
    let e = new Vehicle(1);
    eastBound.push(e);
  }
}

function draw() {
  background(180);
  drawRoad();
  checkTime();
  actionCars();
  lightColour();
}

//creates the road
function drawRoad(){
  fill(20, 20, 20);
  h = 20;
  rect(0, height*0.2, width, height*0.6);
  for(let i = 0; i <= width; i += 60){
    fill(255, 255, 255);
    rect(i, height*0.5, h, 10);
  }

}


//loop that lets  the cars move, and do all the actions that are used with the cars
function actionCars(){
  for(let i = 0; i <= eastBound.length - 1; i++){
    eastBound[i].action();
  }
  for(let i = 0; i <= westBound.length - 1; i++){
    westBound[i].action();
  }
  

}

// when the mouse is clicked it creates a eastbound car
// when shift and mouse is clicked it creates a westbound car
function mouseClicked(){
  let e = new Vehicle(1);
  eastBound.push(e);
  if(keyCode === SHIFT){
    let w = new Vehicle(0);
    westBound.push(w);
  }


}

//varibles for traffic light
let light = 0;
let startCount;
//when space is clicked it causes cars to stop for 120 frames
function keyPressed(){
  if(keyCode === 32){
    light = 1;
    //stopwatch for 120 frames
    startCount = frameCount + 120;
  }

}


//checks if there has been 120 frames since the start of the light change
function checkTime(){
  if(startCount  <= frameCount){
    light = 0;
  }
}

// array used for light color
let lightColor = [0, 255, 0];
//function that makes a green or red circle
function lightColour(){
  fill(lightColor[0], lightColor[1], lightColor[2]);
  circle(width*0.1, height*0.1, 60);
  if(light === 1){
    lightColor = [255, 0, 0];
  }
  else{
    lightColor = [0, 255, 0];
  }
}

//the class that creates the cars
class Vehicle{
  
  //depending on direction it will differnt have properties
  constructor(direction){
    this.dir = direction;
    //west
    if (this.dir === 0){
      this.x = width;
      this.y = height*random(0.2, 0.45);
      this.xSpeed = -random(15);
      this.c = [random(255), random(255), random(255)];
      this.type = round(random(0,1));
      
    }
    //east
    if (this.dir === 1){
      this.x = 0;
      this.y = height*random(0.5, 0.75);
      this.xSpeed = random(15);
      this.c = [random(255), random(255), random(255)];
      this.type = round(random(0,1));
      
    }
    

  }

  //class methods

  //if light is red done move cars
  //action runs display, chance functions, and move, all in one function
  action(){
    if(light === 0){
      this.move();
    }
    this.display();
    this.chanceFunctions();
  }

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
    //truck
    if (this.type === 1){
      fill(this.c[0], this.c[1], this.c[2]);
      if(this.dir === 0){
        rect(this.x, this.y, 50, 40);
        triangle(this.x, this.y, this.x - 20, this.y + 20, this.x, this.y + 40);
      }
      //east truck
      if(this.dir === 1){
        rect(this.x, this.y, 50, 40);
        triangle(this.x + 50, this.y, this.x + 70, this.y + 20, this.x + 50, this.y + 40);
      }
    }

  }

  //moves the car in its respective direction
  move(){
    //west
    this.x += this.xSpeed;
    if(this.dir === 0){
      if(this.x <= width*0 - 50){
        this.x = width;
      }
    }
    //east
    if(this.dir === 1){
      if(this.x >= width + 100){
        this.x = width*0 - 50;
      }
    }
  }

  //function that has random chance to change the car speed, or color
  chanceFunctions(){
    for(let i = 1; i !== 4; i++){
      let chance = round(random(0, 100));
      if(i === 1 && chance === 50){
        this.speedUp();
      }
      if(i === 2 && chance === 50){
        this.speedDown();
      }
      if(i === 3 && chance === 50){
        this.changeColor();
      }

    }
  }

  //changes the cars speed faster
  speedUp(){
    //west
    if(this.dir === 0){
      this.xSpeed += -2;
      if(this.xSpeed < -15){
        this.xSpeed = -15;
      }
    }
    //east
    if(this.dir === 1){
      this.xSpeed += 2;
      if(this.xSpeed > 15){
        this.xSpeed = 15;
      }
    }

  }

  //car slower
  speedDown(){
    //west
    if(this.dir === 0){
      this.xSpeed += 2;
      if(this.xSpeed > 0){
        this.xSpeed = 0;
      }
    }
    //east
    if(this.dir === 1){
      this.xSpeed += -2;
      if(this.xSpeed < 0){
        this.xSpeed = 0;
      }
    }

  }

  //change the color
  changeColor(){
    this.c = [random(255), random(255), random(255)];
  }
  


}