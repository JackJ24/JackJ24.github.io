//child class #1 - Cirlce
class CircleObj extends AnimatedObject{
    constructor(x,y){
      super(x,y); //call's parent class' constructor
      this.size = random(20,40);
  
    }
    //no mention to move().. it will be the same as parents's move()
    display(){//function override; copies overtop parent version
      if(dist(this.x, this.y, mouseX, mouseY) < this.size/2){
        fill(255,0,0);
      }
      else{
        fill(255);
  
      }
      circle(this.x, this.y, this.size);
  
    }
  }
  