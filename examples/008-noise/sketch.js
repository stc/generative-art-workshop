let dragging = false;
let minFrequency = 0.5;
let maxFrequency = 2;
let minAmplitude = 0.05;
let maxAmplitude = 0.5;

let amplitude;
let frequency;

// Included in index.html
// This is an alternative to p5.js builtin 'noise' function,
// It provides 4D noise and returns a value between -1 and 1
let simplex = new SimplexNoise();

function setup () {
  createCanvas(windowWidth, windowHeight);
  
  mouseX = width / 2;
  mouseY = height / 2;
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function draw (){
  background(255);
  
  let frequency = lerp(minFrequency, maxFrequency, mouseX / width);
  let amplitude = lerp(minAmplitude, maxAmplitude, mouseY / height);
  
  let size = height/2;
  
  noFill();
  stroke(0);
  strokeWeight(size * 0.05);
  
  let time = millis() / 1000;
  let rows = 10;

  for (let y = 0; y < rows; y++) {
    const v = rows <= 1 ? 0.5 : y / (rows - 1);
    const py = v * height;
    drawNoiseLine({
      v,
      start: [ 0, py ],
      end: [ width, py ],
      amplitude: amplitude * height,
      frequency,
      time: time * 0.5,
      steps: 150
    });
  }
}

function drawNoiseLine (opt = {}) {
  let {
    v,
    start,
    end,
    steps = 10,
    frequency = 1,
    time = 0,
    amplitude = 1
  } = opt;
  
  let [ xStart, yStart ] = start;
  let [ xEnd, yEnd ] = end;

  beginShape();
  for (let i = 0; i < steps; i++) {
    let t = steps <= 1 ? 0.5 : i / (steps - 1);
    let x = lerp(xStart, xEnd, t);
    let y = lerp(yStart, yEnd, t);
    y += (simplex.noise3D(t * frequency + time, v * frequency, time)) * amplitude;
    vertex(x, y);
  }
  endShape();
}