// map and text files
// JS split and spread syntax
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let textFile, img, rows, cols, grid, colorMap;

function preload(){
  textFile = loadStrings("assets/info.txt");
  img = loadStrings("assets/colorImage.txt");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  //processText();

  //determine # of rows/cols
  rows = img.length; cols = img[0].length;

  //create and populate the 2D Array (GRID)
  grid = [];
  for(let i = 0; i  < rows; i++){
    grid.push(...img[1]);
  }

  //create a map of colors
  colorMap = new Map([
    ["b", "black"],
    ["w", "white"],
    ["r", "sienna"],
    ["l", "peru"],
    ["p", color(150,150,255)]
  ]);

  renderGrid();

}

function renderGrid(){
  //calculate rectangle sizes
  let cellWidth = width/cols;
  let cellHeight = height/rows;

  //visit each spot in 2D array, and vizual
  for(let x = 0; x < cols; x++){
    for(let y = 0; y < rows; y++){
      let currentKey = grid[y][x];
      fill(colorMap.get(currentKey));
      rect(x*cellWidth,y*cellHeight,cellHeight,cellHeight);
    }
  }
}

function draw() {
  //background(220);
}


function processText(){ // split() spread syntax
  print("SPLIT INTO WORDS");
  let splitWords = textFile[0].split(" ");
  print(splitWords);

  print("SPLIT INTO CHARACTERS");
  let splitChars = textFile[1].split("");
  print(splitChars);

  print("SPREAD INTO CHARACTERS");
  let spreadChars = [...textFile[2]];
  print(spreadChars);
}