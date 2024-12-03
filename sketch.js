// p = point
let p = {x: 200, y: 400};
let psize = 20;
let speed = 5;
let theta = 5;

function setup() {
  createCanvas(innerWidth, innerHeight);
  
  // only execute draw once
  //noLoop();
  // draw rectange from center :3c
  rectMode(CENTER);
}

function draw() {
  background(220);

  p.x = cos9theta *speed;
  p.y = sin(theta) *speed;

  circle(p.x, p.y, pSize);


////////////////
  // mapping //
  // noFill()
  // let colour = map(mouseY, 0, height, 0, 255)
  // rect(50,200,100,150)
  // fill(colour,colour,colour)
  // let w = map(mouseX, 0, width, 0, 500) 
  //width becomes a variable after canvas creation
  // rect(50, 200, w, 150)

  // noStroke();

  //rgba
  // fill(180, 60, 120, 50);
  // const size = 40;
  // for(let i = 0; i <10000; i++) {
    // let x = random(width);
    // let y = random(height);
    // square(x, y, size)

  // noStroke();

 
  // const size = 10;

  //for(let i = 0; i <10000; i++) {
    //let x1 = randomGaussian(width/2, 50);
    //let y1 = randomGaussian(height/2, 50);
    
    //let x2 = randomGaussian(width/2, 90);
    //let y2 = randomGaussian(height/2, 90);

    //let x3 = randomGaussian(width/2, 120);
    //let y3 = randomGaussian(height/2, 120);

    // colours each square
    // gives coords and size
    //fill(180, 60, 120, 35);
    //square(x1, y1, size);

    //fill(80, 40, 200, 35);
    //square(x2, y2, size);
    
    //fill(20, 180, 44, 35);
    //square(x3, y3, size);

    // radians
    
    // arc(width/2, height/2, 200, 200, 0, random(TAU));

    // TAU = 2 * PI

  //}



}
