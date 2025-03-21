// Planets and moons
// Your Name
// Date

//storing objects in object, overwriting, and trasmorm

let myPlanet;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);
  
}

function draw() {
  background(0);
  myPlanet.display();
  if(mouseIsPressed){
    myPlanet.createMoon();
  }

}

function mousePressed(){
  //mouseClicked() -> behaves diff in certain browsers
  if(keyIsPressed && keyCode === SHIFT){
    myPlanet = new Planet(mouseX, mouseY);
  }
  else{
    myPlanet.createMoon();
  }

 
}

function keyPressed(){
  //if any key (other than SHIFT) is pressed
  if(keyCode !== SHIFT){
    myPlanet.relocate(mouseX, mouseY);
  }
}

class Planet{
  //CONSTRUCTOR
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.s = 100;
    this.moons = [];
  }

  //CLASS FUNCITONS
  display(){
    //draw the planet + all the moons
    fill(0, 200, 100)
    circle(this.x, this.y, this.s);

    for(let m of this.moons){
      m.update();
    }
  }

  relocate(x, y){
    //first the planet
    this.x = x;
    this.y = y;
    //then moons
    for(let m of this.moons){
      m.x = x;
      m.y = y;
    }
  }

  createMoon(){
    this.moons.push(new Moon(this.x, this.y));
  }


}

class Moon{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.speed = random(5);
    this.angle = 0;
    this.orbitRadius = random(70, 1000);
    this.s = 3;
    
  }

  //fucntion

  update(){
    //handles all internal class function calls
    this.move();
    this.display();

  }

  move(){
    this.angle += this.speed;
  }

  display(){
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    fill(255)
    circle(this.orbitRadius, 0, this.s);
    pop();
  }

  
}