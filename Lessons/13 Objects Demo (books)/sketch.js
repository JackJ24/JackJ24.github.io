// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myBook = 6;
let myBook2 = 2;
let myBook3 = 1;

let bookshelf = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("CS30 Text", "MR.Scott", 123456781011, "leatherbound", 515, width*0.3);
  myBook.printOut();
  myBook2 = new Book("Yay", "ME", 92742840278, "softcover", 300, (myBook.x - 10) + myBook.pages/10);

  
  //make 20 books in a row
  let x = 50;
  let covers = ["softcover", "hardcover", "leatherbound"]
  for(let i = 0; i < 20; i++){
    let choice = int(random(3)); 

    bookshelf.push(new Book("a", "Mr, Booth", 11111111111, covers[choice], 200, x));
  }


}

function draw() {
  background(220);
  myBook.display();
  myBook2.display();
}

//nice to organize class at the bottom

class Book{
  //1. constructor
  constructor(title, author, isbn, cover, pages, x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;
  }


  //2.class methods
  display(){
    //render our book object on the canvas
    rectMode(CENTER); textAlign(CENTER, CENTER);
    textSize(20);

    switch(this.cover){
    case "softcover":
      fill(250, 200, 150);
      break;
    case "hardcover":
      fill(120,255,255);
      break;
    case "leatherbound":
      fill(150,100,15);
      break;
    }
    rect(this.x, height/2, this.pages/10, 150);
    fill(255);
    text(this.title[0], this.x, height/2 - 50);
  }

  printOut(){
    //print out the data in a nice format
    print(this.title + ", by " + this.author);
    print("Length" + this.pages);
    print("ISBN: " + this.isbn);
  }
}
