function setup() {
  createCanvas(800, 500);
  background(30);
}

function draw() {
  // stroke(0);
  // fill(255);
  // ellipse(100, 100, 50, 50);
}


// Event
function touchMoved() {
  stroke(255);
  fill(0); // 0 - 255
  ellipse(mouseX, mouseY, 50, 50);
}
