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
  
  push();
  translate(-size / 4, -size / 4);
  triangle(
    x, y - size / 2,
    x + size / 2, y + size / 2,
    x - size / 2, y + size / 2
  );
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}
