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
let noiseChange = 0.05;
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
  changeWidth();
  generateTerrain();
  //dontAllow();
  
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

  // loop that creates the rects for the terrain
  for(let x = 0; x < width; x += rectWidth){
    // this will create a value from 0 - 1
    let randomNum = noise(noiseStart);
    //this takes the value that was created from noise()
    //and maps from 0 - width
    let rectHeight = map(randomNum, 0, 1, 0, height);

    // these variables are used for rect corners
    let x2 = x + rectWidth;
    //location of the top of the rect
    let y2 = height - rectHeight;
    
    //rects are created 
    rect(x, height, x2, y2);

    //this allows the terrain not to be flat
    //noise speed makes noise start increase by 0.01 
    //which shows the next value in the noiseSeed 
    noiseStart += noiseSpeed;

    // addedheight gets the sum of all the rects height
    addedHeight = addedHeight + y2;
    //counts how many rects are on the screen
    avgCount = avgCount + 1;

    // if the rect height is bigger than the
    // biggest peak that was last recorded
    if (rectHeight > biggestPeak){
      // x value of the peak
      peakLoc = x2;
      //record biggest height
      biggestPeak = rectHeight;
      //set flag to top of highest rect
      flagSet = height - rectHeight;
    }
  }

  //change noisestart by the previous recorded 
  // noise start + noiseChange
  noiseStart = savedNoiseSpot + noiseChange;
  //record what the current noise start was set to
  savedNoiseSpot = noiseStart;

  //            sum        count
  avgHeight(addedHeight, avgCount,);
  
  //         x         y
  drawFlag(peakLoc, flagSet);
}


//function that changes the width of the rects
function changeWidth(){
  //cant change rectWidth below 0.3
  //due to browser not responding if it gets too low
  if (rectWidth > 0.3){
    //decrease if left arrow press
    if (keyIsDown(LEFT_ARROW)){
      rectWidth -= 0.1;
      
    }
  }
  //increase if right arrow pressed
  if (keyIsDown(RIGHT_ARROW)){
    rectWidth += 0.1;
    
  }
}


// if user tries set rect width smaller than
// 0.3 it sets it back to 0.3

// did this because browser will not respond 
// if value to low
function dontAllow(){
  if (rectWidth < 0.3){
    rectWidth = 0.3;
  }
}

// puts a flag on the highest peak
function drawFlag(x,y){
  rectMode(CORNER);

  //the base of the flag
  fill(0, 0, 255);
  rect(x - 1, y - 50, 2, 50);

  //the flag
  fill(0, 0, 255);
  triangle(x, y - 50, x + 25, y - 30, x, y - 15);

  fill(0, 0, 0);
}

//var int
let ovrAvg = 0;

//function calculates the avg of all the rects height
//that are onscreen
function avgHeight(sum, count,){
  ovrAvg = sum/count;
  //the color of the line
  fill(255, 0, 0);
  rect(0, ovrAvg, width, ovrAvg - 10); 
}