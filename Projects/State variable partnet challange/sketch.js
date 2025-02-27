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
  background(0);
  drawRect();
  moveRect();
  rectFunk();
}

let rectX = 0;
let rectY = 0;
let rectH = 25;
let rectW = 25;
function drawRect(){
  
  rect(rectX, rectY, rectH, rectW);

}



let rectSpeed = 10;
let currentRectState = 0;
function moveRect(){
  rectState();
  if (currentRectState === 0){
    rectX += rectSpeed;
  }
  if (currentRectState === 1){
    rectY += rectSpeed;
  }
  if (currentRectState === 2){
    rectX -= rectSpeed;
  }
  if (currentRectState === 3){
    rectY -= rectSpeed;
  }
}

function rectState(){
  if (rectX >= width - rectH && rectY <= height*0){
    currentRectState = 1;
    rectX = width - rectH;
  }
  else if (rectX >= width - rectH && rectY >= height - rectH){
    currentRectState = 2;
    rectY = height - rectH;
    

  }
  else if (rectX <= 0 && rectY >= height - rectH){
    currentRectState = 3;
    
    
  }
  else if (rectX <= 0 && rectY <= 0){
    currentRectState = 0;
    rectX = 0;
    rectY = 0;
  }


}

function rectFunk(){
  if (keyIsDown(65)){
     rectH -= 5;
     rectW -= 5;
     if (rectH <= 5 && rectW <= 5){
      rectH = 5;
      rectW = 5;
     }
  }
  if (keyIsDown(68)){
    rectH += 5;
    rectW += 5;
    if (rectH >= 50 && rectW >= 50){
     rectH = 50;
     rectW = 50;
    }
 }

 if (keyIsDown(87)){
  rectSpeed += 1;
 }

}

