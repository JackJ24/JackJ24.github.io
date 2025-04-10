// Block Pusher Starter
// Your Name
// Date

const NUM_ROWS = 5;
const NUM_COLS = 5;
let tiles = [];  //0 → grass  1 → chicken   2 → cow  3 → star
let level = [
  [0, 1, 0, 3, 0],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0]
]
const COLUMNS = 5; const ROWS = 5; let TILE_SIZE = 100;
let playerX = 3; let playerY = 4;

function preload() {
  for (let i = 0; i < 4; i++) {
    tiles.push(loadImage("assets/" + i + ".png"));
  }
}

function renderBoard() {
  // interpret data in our 2D array (level), place images
  // on canvas.
  for (let x = 0; x < COLUMNS; x++) {
    for (let y = 0; y < ROWS; y++) {
      let type = level[y][x];
      let currentImage = tiles[type];
      image(currentImage, x * TILE_SIZE, y * TILE_SIZE);
    }
  }
}

function swap(x1, y1, x2, y2){
  //modify the gameboard; switch two items
  let temp = level[y1][x1];
  level[y1][x1] = level[y2][x2];
  level[y2][x2] = temp;

}

function keyPressed(){
  //try a single action per key press

  //UP
  if(keyCode === UP_ARROW && playerY > 0){
    //before doing anthiing inspect the top thing
    if(level[playerY - 1][playerX] === 3) {
      //level[playerY - 1][playerX] = 2;
      atStar(playerX, playerY, playerX, playerY - 1);
    }

    else if(level[playerY - 1][playerX] === 0) {
      swap(playerX, playerY, playerX, playerY - 1);
      playerY--;
    }

    else if(level[playerY - 1][playerX] === 1){

      if(playerY - 2 >= 0 && level[playerY - 2][playerX] === 0){
        //grass above the chicken
        swap(playerX, playerY-1, playerX, playerY - 2);
        swap(playerX, playerY, playerX, playerY - 1);
        playerY--;
      }
    }
  }

  //DOWN
  else if(keyCode === DOWN_ARROW && playerY < 4){

    if(level[playerY + 1][playerX] === 3) {
      //level[playerY - 1][playerX] = 2;
      atStar(playerX, playerY, playerX, playerY + 1);
    }

    else if(level[playerY + 1][playerX] === 0){
      swap(playerX, playerY, playerX, playerY + 1);
      playerY++;
    }

    else if (level[playerY + 1][playerX] === 1){
      if(playerY + 2 <= 4 && level[playerY + 2][playerX] === 0){
        swap(playerX, playerY+1, playerX, playerY + 2);
        swap(playerX, playerY, playerX, playerY + 1);
        playerY++;
      }
    }
  }

  //LEFT
  else if(keyCode === LEFT_ARROW && playerX > 0){
    
    if(level[playerY][playerX - 1] === 3) {
      //level[playerY - 1][playerX] = 2;
      atStar(playerX, playerY, playerX - 1, playerY);
    }

    
    else if(level[playerY][playerX - 1] === 0){
      swap(playerX, playerY, playerX - 1, playerY);
      playerX--;
    }
    else if (level[playerY][playerX - 1] === 1){
      if(playerX - 2 >= 0 && level[playerY][playerX - 2] === 0){
        swap(playerX - 1, playerY, playerX - 2, playerY);
        swap(playerX, playerY, playerX - 1, playerY);
        playerX--;
      }
    }
  }

  //RIGHT
  else if(keyCode === RIGHT_ARROW && playerX < 4){

    if(level[playerY][playerX + 1] === 3) {
      //level[playerY - 1][playerX] = 2;
      atStar(playerX, playerY, playerX + 1, playerY);
    }

    else if(level[playerY][playerX + 1] === 0){
      swap(playerX, playerY, playerX + 1, playerY);
      playerX++;
    }
    else if (level[playerY][playerX + 1] === 1){
      if(playerX + 2 <= 4 && level[playerY][playerX + 2] === 0){
        swap(playerX + 1, playerY, playerX + 2, playerY);
        swap(playerX, playerY, playerX + 1, playerY);
        playerX++;
      }
    }
  }
}

let win = 0;
function atStar(x1, y1, x2, y2){
  level[y2][x2] = level[y1][x1];
  level[y1][x1] = 0;
  win = 1;
}
function checkWin(){
  if(win === 1){
    textSize(100);
    fill(200);
    text("YOU WIN", width*0.5, height*0.5);
  }
}

function randomStart(){
  for(let x = 0; x < NUM_ROWS; x++ ){
    for(let y = 0; y < NUM_COLS; y++){
      level[y][x] = round(random(0, 1));
    }

  }
  level
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  level[playerY][playerX] = 2;
  randomStart();
}

function draw() {
  background(220);
  renderBoard();
  checkWin();

}
