const sketchHeight = 400;
const sketchWidth = 400;
let off = 1

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  frameRate(1)
}

function draw(){
  background(255);
  // fill(0, 0, 255)
  strokeWeight(3)
  beginShape();
  for(let angle = 0; angle < 360; angle += 50) {
    off += 1
    const radius = map(noise(off), 0, 1, 0, width/2)
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    vertex(x + sketchWidth / 2, y + sketchHeight / 2);
  }
  endShape(CLOSE);
  noLoop();
}