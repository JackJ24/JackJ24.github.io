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
  boxSet();
}

function boxSet(){
  rect(width*0.1, height*0.7, 200);
}

class Charmander{

  constructor(move1, move2,){
    this.move1 = move1;
    this.move2 = move2;
    this.hp = 39;
    this.attack = 52;
    this.def = 43;
    this.spAtk;
    this.speed = 60;
    this.atkDmg;
    
  }

  healthPoints(){
    this.hp - this.attack();
  }

  attacks(){
    if(this.move1 === 0){


    }
  }


}