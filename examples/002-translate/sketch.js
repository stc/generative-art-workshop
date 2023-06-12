function setup () {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  blendMode(BLEND);
  background(255);
  fill(255);
  blendMode(DIFFERENCE);
  noStroke();

  let x = width / 2;
  let y = height / 2;
  
  let size = height/2;
  
  rectMode(CENTER);
  rect(x, y, size, size);
  
  push();
  translate(size / 4, size / 4);
  rect(x, y, size, size);
  pop();
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}
