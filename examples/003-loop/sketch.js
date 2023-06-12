function setup () {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(255);
  
  let px = width / 2;
  let py = height / 2;
  
  let size = height/2;
  
  let time = millis() / 1000;
  let duration = 5;  
  let playhead = time / duration % 1;
  let anim = sin(playhead * PI * 2) * 0.5 + 0.5;
  
  let thickness = size * 0.1 * anim;
  
  noFill();
  stroke(0);
  strokeWeight(thickness);
  ellipse(px, py, size, size);
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}
