

//INT variables
let x, y, c, d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //rect starting point
  x = 200; y = 300;
  
  //sets the speed the rect moves
  c = random(3, 8); d = random(3, 8);
}

function draw() {
  rectMovement();
  background(80, 80, 80);
  //draw the rect
  rect(x, y, 250, 75);
  
}


//this function moves the rect
//and also adds collisons
//bounces the rect
function rectMovement() {

  //this moves the rect
  x += c; y += d;

  //once the rect hits the top or bottom
  //it will be bounced the otherway
  if (y >= height - 75 || y <= 0) {
    //switching d to -d will make the rect bounce off the top and
    //bottom walls
    d = d * -1;
  }
  //once the rect hits the left or right wall
  //it will be bounced the otherway
  if (x >= width - 250 || x <= 0) {
    //switchs to -c so it goes the other way
    c = c * -1;
  }
}