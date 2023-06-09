let rectangles = [];

function setup () {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  
  let rectangleCount = 10;
  for (let i = 0; i < rectangleCount; i++) {
    let shrink = 0.5;
    let position = [
      random(-1, 1) * shrink,
      random(-1, 1) * shrink
    ];
    let scale = random(0.5, 1);
    let size = [
      random(0, 1) * scale,
      random(0, 1) * scale
    ];
    rectangles.push({
      position,
      size
    });
  }
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(255);
  
  strokeJoin(MITER);
  rectMode(CENTER);
  noFill();
  stroke(0);

  let size = height/2
  
  for( r of rectangles) {
    let [ x, y ] = r.position;
    let [ w, h ] = r.size;
    
    push();
    translate(width / 2, height / 2);
    scale(size, size);
    strokeWeight(0.015);
    rect(x, y, w, h);
    pop();
  }
}