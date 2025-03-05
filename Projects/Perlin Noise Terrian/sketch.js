// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// INT VARIABLES THAT WILL BE USED LATER
let rectWidth = 2;
let savedNoiseSpot = 0;
let noiseStart = 2;
let noiseSpeed = 0.01;
let biggestPeak = 0;
let peakLoc = 0;
let flagSet = 0;
savedNoiseSpot = noiseStart;
let avgCount = 0;
let addedHeight = 0;

function setup() {
  frameRate(60);
  
  
  createCanvas(windowWidth, windowHeight);
  
  
 
}

function draw() {
  background(220);
  changeHeight();
  generateTerrain();
  dontAllow();
  
}

// this function is the function that creates the terrain
function generateTerrain(){

  // variables that will be used
  biggestPeak = 0;
  peakLoc = 0;
  flagSet = 0;
  addedHeight = 0;
  avgCount = 0;

  // used corners so that the rects will come from bottom up
  rectMode(CORNERS);

  // for loop that creates the rects for the terrain
  for(let x = 0; x < width; x += rectWidth){
    // this will create a value from 0 - 1
    let randomNum = noise(noiseStart);
    //this takes the value that was created from noise
    //and maps from 0 - width
    let rectHeight = map(randomNum, 0, 1, 0, height);
    // these variables are used for rect corners
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;
    
    //rects are created 
    rect(x, height, x2, y2);

    //this allows the terrain not to be flat
    //noise speed makes noise start increase by 0.01 
    //which shows the next value in the noiseSeed 
    noiseStart += noiseSpeed;

    
    addedHeight = addedHeight + y2;
    avgCount = avgCount + 1;

    if (rectHeight > biggestPeak){
      peakLoc = x2;
      biggestPeak = rectHeight;
      flagSet = height - rectHeight;
    }
  }
  noiseStart = savedNoiseSpot + 0.01;
  savedNoiseSpot = noiseStart;
  avgHeight(addedHeight, avgCount,);
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
  rectMode(CORNER);
  //circle(x, y, 40);
  fill(0, 0, 255);
  rect(x - 1, y - 50, 2, 50);
  fill(0, 0, 255);
  triangle(x, y - 50, x + 25, y - 30, x, y - 15);
  fill(0, 0, 0);
}

let ovrAvg = 0;
function avgHeight(sum, count,){
  ovrAvg = sum/count;
  fill(255, 0, 0);
  rect(0, ovrAvg, width, ovrAvg - 10); 
  console.log(ovrAvg);
}