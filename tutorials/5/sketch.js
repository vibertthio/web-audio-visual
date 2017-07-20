function setup() {
  createCanvas(800, 500);
  setupSound();
}

function draw() {

}

function mousePressed() {
  // playEnv(180);
  playEnv(mouseY);

  // hint
  background(map(mouseY, 0, height, 255, 0));
}
