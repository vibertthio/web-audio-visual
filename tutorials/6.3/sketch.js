var count = 0;
var limit = 20;

function setup() {
  createCanvas(800, 500);
  setupSound();
}

function draw() {
  count = count + 1;

  if (count > limit) {
    noStroke();

    fill(
      random(255),   // R : 0 - 255
      random(255),   // G : 0 - 255
      random(255),   // B : 0 - 255
      50,            // opacity : try to adjust this number
    );

    var x = random(width);
    var y = random(height);

    ellipse(x, y, 50, 50);
    playEnv(y);

    count = 0;
    limit = random(10, 30);
  }
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
