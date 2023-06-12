function setup () {
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  background(100);
  strokeCap(PROJECT);
  let size = height/2;
  strokeWeight(size * 0.01);

  for (i = 0; i<width; i+=10){
    c = color('hsl(200,100%,'+map(i,0,width,0,100)+'%)');
    stroke(c)
    line(i,0,i,height/2);
    c = color('hsl(200,'+map(i,0,width,0,100)+'%,50%)');
    stroke(c)
    line(i,height/2,i,height);
  }

  push();
  translate(width/2,height/2)
  for (i = 0; i<360; i++){
    c = color('hsl('+i+', 100%, 50%)');
    stroke(c)
    rotate(radians(1));
    line(size/5,0,size/2,0);
  }
  pop();
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

