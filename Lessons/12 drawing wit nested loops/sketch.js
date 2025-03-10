// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let gridSpacing = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}



function draw() {
  background(220);
  renderGrid();
}

function roundedDist(x1, y1, x2, y2){
  //take two coord points and return
  //the distance between, but rounded
  let a = abs(x1-x2);
  let b = abs(y1-y2);
  let c = sqrt(sq(a)+sq(b));
  return round(c);
}

function renderGrid(){
  //use nested loop to draw objects in a grid arrangment
  for(let x = 0; x < width; x += gridSpacing){
    for(let y = 0; y < height; y += gridSpacing){
      let d = roundedDist(x,y,mouseX,mouseY);
      //set fill value based on the proximity to mouse
      let alpha = map(d,0,150,255,0)
      if(d<150){
        fill(50,100,150,alpha);
      }
      else{
        fill(255);
      }
      circle(x,y,gridSpacing,);
      
      textAlign(CENTER,CENTER);
      //text(d,x,y);
    }
  }
}


function loopReview(){
  //quickly rescap single and nested loops
  for(let x = 0; x <= 40; x = x + 2){ // 0, 20, 40, 
    for(let y = 0; y <= 40; y+=20){

    }
  }
}