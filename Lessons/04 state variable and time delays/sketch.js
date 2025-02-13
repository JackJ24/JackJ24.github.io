// State variables and Timing
// Your Name
// Date
//state variables, switch, Frames/Time

//global variable declarations
let shapeState = 1; //1-circle, 2-square, 3-tri, 4-transistion
let startTime, elaspedTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis; // should roughly 0
}

function manageTimer(){
//update elapsedTime variable
//and display
  elaspedTime = millis() - startTime;
  text(elaspedTime/1000 , width*0.3, height*0.75);  

}

function drawShape(){
  switch(shapeState){
    case 1:
      circle(width/2, height/2, 150);
      break;
    case 2:
      square(width/2, height/2, 150);
      break;
    case 3:
      let x = width/2; let y = height/2;
      triangle(x-50,y+50, x+50, y-50, x, y-25);
      break;
    case 4:
      for(let i = 0; i < 20; i++){
        let x = random(width*0.4, width*0.8);
        let y = random(height*0.4, height*0.8);
        line(x, y, x+25, y);

      }
  }


}

function keyPressed(){
  //on each keypress, lets advance to the state
  //varible 1->2 2->3 3->4(for 2 seconds)->
  if(shapeState < 4){
    shapeState++;
    if(shapeState === 4){
      startTime = millis();
    }  
  }

}

function draw() {
  background(220);
  drawShape();
  manageTimer(); 
  if(shapeState===4 && elaspedTime >2000){
    shapeState = 1;
  }
}
