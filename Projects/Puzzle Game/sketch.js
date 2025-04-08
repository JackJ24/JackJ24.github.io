//Insert your Comment Header here.

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,255,0,0,0],
                [255,255,255,0,0]];



function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;
  randomStart();
}

function draw() {
  background(220);
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  drawGrid();                //render the current game board to the screen (and the overlay)
  checkWin();
  drawOverlay();

  
}

let squareMode = 0;
function keyPressed(){
  if(keyCode === 32){
    if(squareMode === 0){
      squareMode = 1;
    }
    else{
      squareMode = 0;
    }
  }
}

//if shift is held down it activates cheater cheater mode.
//also checks fi square mode is on or off
function mousePressed(){
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
  flip(currentCol, currentRow);
  //cross 
  if(keyIsDown(SHIFT) !== true && squareMode === 0){
    flip(currentCol-1, currentRow);
    flip(currentCol+1, currentRow);
    flip(currentCol, currentRow-1);
    flip(currentCol, currentRow+1);
    
  }
  if(keyIsDown(SHIFT) !== true && squareMode === 1){
    flip(currentCol+1, currentRow-1);
    flip(currentCol+1, currentRow);
    flip(currentCol, currentRow-1);
    
  }
  

}

function flip(col, row){
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (gridData[row][col] === 0) gridData[row][col] = 255;
      else gridData[row][col] = 0;
    }
  }
}


function determineActiveSquare(){
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);

  
}

function drawGrid(){
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      fill(gridData[y][x]);
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}

//int variable
let notGood = 0;

//checks to see if all the squares are black, and display the win message
function checkWin(){
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      checkValue = gridData[y][x];
      if(gridData[y][x] > 0){
        notGood = 1;
      }

    }
  }
  
  if(notGood === 0){
    fill(0, 0, 255);
    textSize(height/10);
    text("YOU WIN", width*0.3, height*0.5);

  }
  notGood = 0;
}

//randomizes the squaures at the start of the game
function randomStart(){
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      let randomNum = round(random(0, 1));
      let randomMapped = map(randomNum, 0, 1, 0, 255);
      gridData[y][x] = randomMapped;
    }
  }
}

//this creates the green overlay depending on if its a cross or square
function drawOverlay(){
  //cross
  if(squareMode === 0){
    overlay(currentCol, currentRow);
    overlay(currentCol-1, currentRow);
    overlay(currentCol+1, currentRow);
    overlay(currentCol, currentRow-1);
    overlay(currentCol, currentRow+1);
  }
  //square
  else{
    overlay(currentCol, currentRow);
    overlay(currentCol+1, currentRow-1);
    overlay(currentCol+1, currentRow);
    overlay(currentCol, currentRow-1);

  }
  

}

//creates the col, and row, put in to be green
function overlay(col, row){
  if(col >= 0 && row >= 0){
    if(row <= 4 && col <= 5){
      fill(0, 300, 0, 80);
      rect(col*rectWidth, row*rectHeight, rectWidth, rectHeight);
    }
  }
}



