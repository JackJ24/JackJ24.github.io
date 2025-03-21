// Interactive Stage
// Jack
// Feb 11th 2025



//setup
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  
}

//frames
function draw() {
  scene();
  //spawn character
  playChar();
  //background
  currentState();
  //text
  artistMark();
  
}

//how the scene will look
function scene(){
  //items used in the scene
  theBackground();
  mountians();
  theGround();
  
  

}

//text in bottom right
function artistMark(){
  //color text
  fill('cornflowerblue');
  textSize(30);
  //place text bottom right of screen
  text('Jack', width*0.9, height*0.95);
}

// variables used for background
let backCol1 = 0;
let backCol2 = 255;
let backCol3 = 255;

//sky in the back
function theBackground(){
  
  rectMode(CORNER);
  fill(backCol1, backCol2, backCol3,);

  //whole screen
  rect(width * 0, height * 0, width, height);
}

//the grass
function theGround(){
  rectMode(CENTER);
  fill(25, 155, 0);
  //bottom of screen
  rect(width / 2, height, width, height * .40);
}

//mountians
function mountians(){
  noStroke();
  //mountain 1
  fill(41, 40, 40);
  triangle(200, 400, 0, 800, 400, 800);
 
  //peak
  stroke(0);
  fill(255, 255, 255);
  triangle(200, 400, 150, 500, 250, 500);


  //mountian 2
  noStroke();
  fill(41, 40, 40);
  triangle(400, 200, 100, 800, 800, 800);
  
  //peak
  stroke(0);
  fill(255, 255, 255);
  triangle(400, 200, 300, 400, 535, 400);
}

// big orange thing
function theSun(){
  
  //colour and border
  stroke(0);
  fill(243, 156, 18);
  //top left of screen
  circle(100, 100, height*0.30);
}

// pretty much the same as the sun just grey and on other side
function theMoon(){
 
  //colour and border
  stroke(0);
  fill(155, 155, 155);
  //top right of screen
  circle(width*0.8, 100, height*0.30);
}

//clouds in the sky
function theClouds(){
  fill(255, 255, 255);

  //set one of clouds
  circle(width*0.9, height*0.15, 150);
  circle(width*0.85, height*0.15, 150);
  circle(width*0.8, height*0.15, 150);

  //set two of clouds
  circle(width*0.4, height*0.30, 125);
  circle(width*0.35, height*0.30, 125);
  circle(width*0.3, height*0.30, 125);

}

// sun but red
function theBadSun(){
  
  //colour and border
  stroke(0);
  fill(138, 50, 50);
  //top left of screen
  circle(100, 100, height*0.30);
}

// lots of variables being int. lots used later
let charColOne = 100;
let charColTwo = 0;
let charColThree = 180;
let charLocX = 100;
let charSize = 0.10;
let charEyeColOne = 0;
let charEyeColTwo = 0;
let charEyeColThree = 0;

//int of character
function playChar(){
  

  //functions that change location and how the charater looks
  charMove();
  charFunk();

  //base circle
  fill(charColOne, charColTwo, charColThree);
  circle(charLocX, height * 0.85, height * charSize)

  //eyeballs
  fill(255, 255, 255);
  circle(charLocX-20, height * 0.80, height * 0.05)
  circle(charLocX+20, height * 0.80, height * 0.05)


  //eyes
  fill(charEyeColOne, charEyeColTwo, charEyeColThree);
  circle(charLocX-20, height * 0.80, height * 0.02)
  circle(charLocX+20, height * 0.80, height * 0.02)


  //mouth
  fill(255, 0, 0, )
  ellipse(charLocX, height*0.85, height * 0.08, height * 0.05)


}

//used for moving the character
function charMove(){
  //if left arrow down. charater moves left
  if (keyIsDown(LEFT_ARROW)){
    charLocX-= 10;
  }

  //if left arrow down. charater moves right
  if (keyIsDown(RIGHT_ARROW)){
    charLocX+= 10;
  }

}

// used for color changing charater
function charFunk(){

  //resets
  //color charCol? reset at 255
  if (charColOne >= 255){
    charColOne = 0;
  }
  if (charColTwo >= 255){
    charColTwo = 0;
  }
  if (charColThree >= 255){
    charColThree = 0;
  }

  //reset eye colors once charEyeCol? reaches 255
  if (charEyeColOne >= 255){
    charEyeColOne = 0;
  }
  if (charEyeColTwo >= 255){
    charEyeColTwo = 0;
  }
  if (charEyeColThree >= 255){
    charEyeColThree = 0;
  }

  //reset size of circle once too big
  if (charSize >= 0.40){
    charSize = 0.10;
  }

  // up arrow changes color on body
  if (keyIsDown(UP_ARROW)){
    charColOne+= 10;
    charColTwo+= 20;
    charColThree+= 15;
    
  }

  //down arrow changes color on eyes
  if (keyIsDown(DOWN_ARROW)){
    charEyeColOne+= 10;
    charEyeColTwo+= 20;
    charEyeColThree+= 15;
    
  }


  //mouse on char makes it change size

  //finds the distance between mouse and circle
  let charDis = dist(mouseX, mouseY, charLocX, height * 0.85)
  //if mouse is on circle it changes circle size makes it bigger
  if (charDis < height * (charSize-0.05) ){
    charSize += 0.005;
  }


}





//variable used to find out what background is current
let currentBack = 0
let mouseBPress = 0
        
//Background current and color changing
function currentState(){
  //if middle mouse button clicked next background
  if (mouseIsPressed === true) {
    if (mouseButton === CENTER) {
      //check to see if mouse is no longer clicked then clicked again
      if (mouseBPress === 0){
        currentBack = currentBack + 1;
        //this variable is used so it doesnt run through the backgrounds
        mouseBPress = 1;
        

      }
}
  }

  //reset to allow the mouse to be pressed again
  if (mouseIsPressed === false){
    mouseBPress = 0;
  }

  //reset background once its higher than 5
  if (currentBack >= 5){
    currentBack = 0;
  }

  //switch is used to find out the current background
  switch (currentBack) {
    //when current back === case.
    //the case that matches current back will be active
    case 0:
      //day time
      backCol1 = 100;
      backCol2 = 255;
      backCol3 = 255;
      theSun();
      break;
    case 1:
      //night time
      backCol1 = 128;
      backCol2 = 128;
      backCol3 = 128;
      theMoon();
      break;
    case 2:
      //change sky and make it cloudy
      backCol1 = 100;
      backCol2 = 150;
      backCol3 = 255;
      theSun();
      theClouds();
      break;
    case 3:
      //scary day
      backCol1 = 136;
      backCol2 = 8;
      backCol3 = 8;
      theBadSun();
      break;
    case 4:
      //color changing sky
      backCol1 += 1;
      backCol2 += 1;
      backCol3 += 1;
      theSun();
      theRGB();
      break;
    default:
      break;
  }
  
}

//RGB sky resets
function theRGB(){
  //when backCol? reaches 255 it will be reset to 0
  if (backCol1 >= 255){
    backCol1 = 0;
  }
  if (backCol2 >= 255){
    backCol2 = 0;
  }
  if (backCol3 >= 255){
    backCol3 = 0;
  }

}



















/////////////////////////////
// unused stuff
////////////////////////////
// function building(){
//   buildingOne(0.0);
//   buildingTwo(0.27);
//   buildingThree(0.44);
// }

// function buildingOne(a){
//   rectMode(CORNER);
//   fill(200, 255, 100)
//   rect(width * a, 360, 110, 300);

//   let windowA = a + 0.05;
//   let windowB = a + 0.12;
//   let door = a + 0.09;
  
  
//   circle(width * windowA, height * 0.50, 20);
//   circle(width * windowB, height * 0.50, 20);
  
//   circle(width * windowA, height * 0.60, 20);
//   circle(width * windowB, height * 0.60, 20);
  
//   circle(width * windowA, height * 0.70, 20);
//   circle(width * windowB, height * 0.70, 20);

//   fill(20, 5, 1110);
//   ellipse(width * door, height * 0.84, 40, 70);

// }

// function buildingTwo(a){
//   rectMode(CORNER);
//   fill(200, 255, 100)
  
//   rect(width * 0.27, 380, 110, 300);
  
//   let windowA = a + 0.05;
//   let windowB = a + 0.12;
//   let door = a + 0.09;
  
  
//   circle(width * windowA, height * 0.55, 20);
//   circle(width * windowB, height * 0.55, 20);
  
//   circle(width * windowA, height * 0.65, 20);
//   circle(width * windowB, height * 0.65, 20);
  
//   circle(width * windowA, height * 0.75, 20);
//   circle(width * windowB, height * 0.75, 20);

//   fill(20, 5, 1110);
//   ellipse(width * door, height * 0.84, 40, 70);

// }

// function buildingThree(a){
//   rectMode(CORNER);
//   fill(200, 255, 100)
  
//   rect(width * 0.44, 320, 110, 360);
  
//   let windowA = a + 0.05;
//   let windowB = a + 0.12;
//   let door = a + 0.09;
  
//   circle(width * windowA, height * 0.45, 20);
//   circle(width * windowB, height * 0.45, 20);

//   circle(width * windowA, height * 0.55, 20);
//   circle(width * windowB, height * 0.55, 20);
  
//   circle(width * windowA, height * 0.65, 20);
//   circle(width * windowB, height * 0.65, 20);
  
//   circle(width * windowA, height * 0.75, 20);
//   circle(width * windowB, height * 0.75, 20);

//   fill(20, 5, 1110);
//   ellipse(width * door, height * 0.84, 40, 70);
// }