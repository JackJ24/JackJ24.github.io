// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid =
  [[0, 60, 120, 180, 240],
  [240, 180, 120, 60, 0],
  [0, 200, 0, 200, 0]
  ];

let sqaureSize = 60;
const NUM_ROWS = 3; const NUM_COLS = 5;

function setup() {
  createCanvas(NUM_COLS * sqaureSize, NUM_ROWS * sqaureSize);
}

function renderGrid(){
  //interpret the info in the 2D array, and draw
  // a grid of colours on the screen to reflect it
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x * sqaureSize, y * sqaureSize, sqaureSize);
    }
  }
}

function getCurrentY(){
  //determine current row of the mouse position
  let constrainedY = constrain(mouseY, 0, height - 1);
  return floor(constrainedY / sqaureSize);

}

function getCurrentX(){
  //determine current col of the mouse position
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX / sqaureSize);
}

function checkForMouse(){
  //flip current tile to a random greyscale value
  if(mouseIsPressed){
    let x = getCurrentX();
    let y = getCurrentY();
    grid[y][x] = floor(random(255));
  }
}

function draw() {
  background(220);
  renderGrid();
  checkForMouse();

}
