// warm up excercises
// 1. summin an array
// 2. Drawing with loops practice


let a = [22, 11, 5, 5, 90, 80, 70, 60];
//        0    1  2  3 4    5  6    7
// a.length is 8
let finalA = 0;


function setup() {
  createCanvas(400, 400);
  background(300);
  // TASK 1: add up all the values in our array
  //          and display the total in the consle

  for(let n = 0; n < a.length; n += 1){
    finalA = finalA + a[n];
    console.log(finalA);
  }

}

function draw() {
  background(100);
  downLine();
  //upLine();
  circle(mouseX, mouseY, 20);
  circleFun();
}

function downLine(){
  for(let l = 0; l <= height, l <= width/width; l += 0.10 ){
    circle(width * l, height * l, 20);
    circle(width * l, height * (1 - l), 20);
  }
}

function upLine(){
  for(let y = 1, x = 0; x <= width/width; y -= 0.10, x += 0.10){
    circle(width * x, height * y, 20);
  }
}

function circleFun(){
  circle(mouseX, mouseY, 20);
}