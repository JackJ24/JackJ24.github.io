// image manipulation
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let pilot; //p5.image       .width   .height


function preload(){
  pilot = loadImage("assets/aviator.png");

}

function setup() {
  createCanvas(pilot.width, windowHeight);
}

function setPixelColor(pos, r, g, b){
  //assume ps points at a red component
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}

function draw() {
  image(pilot, 0, 0);
  loadPixels(); //fills pixel array
  background(0);

  drawCharacter();
  



  //updatePixels();
}

function drawCharacter(){
  //render a image using charater
  fill(255);

  for(let x = 0; x < width; x += 10){
    for(let y = 0; y < height; y+= 10){
      let loc = (y*pilot.width + x) * 4; 
      let avg = avgPixel(loc);
      if(avg > 200){ 
        text("&", x, y)}
      else if (avg > 150){
        text("*", x, y);
      }
      else if (avg > 100){
        text("-", x, y);

      }
      else if(avg > 50){
        text(",", x, y);
      }
    }
  }
}

function boostImage(){
  //a brightnening filter; make each pixel brighter
  let boost = 50;
  for(let i = 0; i < pixels.length; i += 4){
    let r = pixels[i] + boost;
    let g = pixels[i + 1] + boost;
    let b = pixels[i + 1] + boost;
    setPixelColor(i,r,g,b);
  }
}

function avgPixel(i){
  //i-> index of the red component
  let r = pixels[i];
  let g = pixels[i+1];
  let b = pixels[i+2];
  return (r+g+b)/3;                  
}

function greyscale(){
  // black white
  for(let i = 0; i < pixels.length; i += 4){
    let avg = avgPixel(i);
    setPixelColor(i, avg, avg, avg);




  }
}