// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 2;
let savedNoiseSpot = 0;
let noiseStart = 2;
let noiseSpeed = 0.01;
let biggestPeak = 0;
let peakLoc = 0;
let flagSet = 0;
savedNoiseSpot = noiseStart

function setup() {
  frameRate(60);
  rectMode(CORNERS);
  createCanvas(windowWidth, windowHeight);
  
  
 
}

function draw() {
  background(220);
  changeHeight();
  generateTerrain();
  dontAllow();
  
}


function generateTerrain(){

  biggestPeak = 0;
  peakLoc = 0;
  flagSet = 0;

  for(let x = 0; x < width; x += rectWidth){
    let randomNum = noise(noiseStart);
    let rectHeight = map(randomNum, 0, 1, 0, height);
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;
    

    rect(x, height, x2, y2);
    noiseStart += noiseSpeed;

    if (rectHeight > biggestPeak){
      peakLoc = x2;
      biggestPeak = rectHeight;
      flagSet = height - rectHeight;
    }
  }
  noiseStart = savedNoiseSpot + 0.1;
  savedNoiseSpot = noiseStart;
  
  drawFlag(peakLoc, flagSet);
}



function changeHeight(){
  if (rectWidth > 0.3){
    if (keyIsDown(LEFT_ARROW)){
      rectWidth -= 0.1;
      
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    rectWidth += 0.1;
    
  }
}

function dontAllow(){
  if (rectWidth < 0.3){
    rectWidth = 0.29;
  }
}

function drawFlag(x,y){
  circle(x, y, 40);
}