// Project Title
// Your Name
// Date
//
// diff ways to use unpredictablility

let mySeed;
let noiseStart = 5;
let noiseTime = 5;
let noiseSpeed = 0.1;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  mySeed = random(1000);
  //randomNumbers();
  
}

function draw() {
  noiseTime = noiseStart;
  randomSeed(mySeed);
  background(220);
  randomNumbers();
  noiseNumbers();
  noiseStart +- noiseSpeed;
}

function noiseNumbers(){
  //display a line of serveral numbers
  //generated with the noise() function 1 - 100
  let x = 100;
  while(x <= 500){
    let randomNum = noise(noiseTime); //0-1 (normilizzed)
    randomNum = map(randomNum, 0, 1, 1, 100); // 1-100
    randomNum = round(randomNum);

    fill(140,220,140); noStroke();
    circle(x,400,randomNum); //y === height*0.66
    fill(0);
    text(randomNum, x, 400);
    x+=10;
    noiseTime += noiseSpeed;
  }
}










function randomNumbers(){
  //display a line of several numbers generated
  //with the random() function.   1 - 100
  // - these should be uniformly distributed
  let x = 100;  //100, 150, 200, 250....500
  while(x <= 500){
    let randomNum = round(random(1,100));
    fill(200, 80, 80); noStroke();
    circle(x, 200, randomNum);
    fill(0);
    text(randomNum, x, 200) // y === width/3
    x += 50; 
  }
}


