function setup() {
  createCanvas(800, 500);
  setupSound();
}

function draw() {
  // stroke(255);
  noStroke();

  fill(
    random(255),   // R : 0 - 255
    random(255),   // G : 0 - 255
    random(255),   // B : 0 - 255
    50,            // opacity : try to adjust this number
  );

  ellipse(
    random(width),
    random(height),
    50,
    50,
  );
}

// Mouse Event
function mousePressed() {
  // playEnv(180);
  playEnv(mouseY);

  // hint
  background(map(mouseY, 0, height, 255, 0));
}

// Key Event
function keyPressed() {
  background(255);
}
