function setup () {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(255);
  
  let size = height/2;
  
  strokeJoin(ROUND);
  strokeWeight(size * 0.015);
  stroke(0);
  noFill();
  
  let time = millis() / 1000;
  let duration = 7;
  let playhead = time / duration % 1;
  let rotation = playhead * PI * 2;
  
  let x = width / 2;
  let y = height / 2;
  
  push();
  translate(x, y);
  rotate(rotation);
  
  rectMode(CENTER);
  rect(0, 0, size, size);

  pop();
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}
