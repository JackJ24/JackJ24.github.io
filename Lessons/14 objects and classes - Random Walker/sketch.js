// Project Title
// Your Name
// Date

//a first look at working with multiple objects

let singleWalker;
let walkers = [];
const NUM_WALKERS = 3000;



function setup() {
  createCanvas(windowWidth, windowHeight);
  singleWalker = new Walker(100, 150, "green");
  initWalker();
  //noStroke();
}

function initWalker(){
  //create a bunch of walker objects, put in an array
  for(let i = 0; i < NUM_WALKERS; i++){
    let c = color(random(255),random(255),random(255));
    let w = new Walker(random(width), random(height),c);
    walkers.push(w);
  }
}

function draw() {
  background(220);
  //singleWalker.move();
  //singleWalker.display();
  // for(let currentWalker of walkers){ //loop by item
  //   currentWalker.move();
  //   currentWalker.display();
  // }

  for(let i = 0; i < walkers.length; i++){
    //this allows us to delete
    let w = walkers[i];
    w.move();
    w.display();

    //ask if current object is close to mouse
    if(dist(w.x, w.y, mouseX, mouseY) < 80){
      // to delete 
      walkers.splice(i, 1);
    }
  }
}

class Walker {
  //1. constructor
  constructor(x, y, c){
    this.x = x; this.y = y; this.c = c;
    this.speed = random(2, 10);
    this.size = 5;

  }


  //2. class methods
  display(){ //render walkler
    rectMode(CENTER);
    fill(this.c);
    square(this.x, this.y, this.size);
  }

  move(){
    //equally likely chance of up, down, left, right, movement 
    let choice = floor(random(4)); // 0, 1, 2, 3
    switch(choice){
    case 0: //LEFT
      this.x -= this.speed;
      break;
    case 1: //RIGHT
      this.x += this.speed;
      break;
    case 2: //UP
      this.y -= this.speed;
      break;
    case 3: //DOWN
      this.y += this.speed;
      break;
    }

  }
  
}
