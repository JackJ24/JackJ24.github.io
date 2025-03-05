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
  background(220);
  let d = noise(0.005 * frameCount);
  generateTerrain();
  
}

  let noiseLevel = 0.1
  let rectHeight = 0;
function generateTerrain(){
  noiseLevel = noiseLevel * 
  rectHeight = noise(noiseLevel);
 
  circle(500, 500, d);
  

}