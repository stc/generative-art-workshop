function setup () {
  createCanvas(windowWidth, windowHeight);
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(255);
  
  noFill();
  strokeJoin(ROUND);
  stroke(0);
  
  let size = height/2;
  strokeWeight(size * 0.015);
  
  let x = width / 2;
  let y = height / 2;
  
  
  rectMode(CENTER);
  rect(x, y, size, size);
  triangle(
    x, y - size / 2,
    x + size / 2, y + size / 2,
    x - size / 2, y + size / 2
  );
}
