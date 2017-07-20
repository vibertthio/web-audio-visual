function setup() {
  createCanvas(800, 500);
}

function draw() {
  // do nothing
}

function touchMoved() {
  // stroke(255);
  noStroke();

  fill(
    random(255),   // R : 0 - 255
    random(255),   // G : 0 - 255
    random(255),   // B : 0 - 255
    50,            // opacity : try to adjust this number
  );

  ellipse(mouseX, mouseY, 50, 50);
}
