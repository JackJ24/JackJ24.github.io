// This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
// http://www.learningprocessing.com
// Refactor the following code. Be sure the refactored version:
//  - is readable
//  - is able to work easily with any canvas size

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(255);
  stroke(0);
  //the middle lines
  line(width *0.5, 0, width * 0.5, height);
  line(0, height *0.5, width, height * 0.5);
  
  noStroke();
  fill(0);


  // IF mouse in top left make rect
  if (mouseX < width*0.5 && mouseY < height*0.5) {
    rect(0, 0, width*0.5, height*0.5);
  }
  // IF mouse in top right make rect
  else if (mouseX > width*0.5 && mouseY < height*0.5) {
    rect(width*0.5, 0, width*0.5, height*0.5);
  }
  // IF mouse in bottom left make rect
  else if (mouseX < width*0.5 && mouseY > height*0.5) {
    rect(0, height*0.5, width*0.5, height*0.5);
  }
  // IF mouse in bottom right make rect
  else if (mouseX > width*0.5 && mouseY > height*0.5) {
    rect(width*0.5, height*0.5, width*0.5, height*0.5);
  }

}
