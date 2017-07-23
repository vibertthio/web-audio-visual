function setup() {
  createCanvas(800, 500);
  setupSound();
}

function draw() {

}

// event
function mousePressed() {
  // playEnv(180);
  playEnv(mouseY);
  // playEnv(400);

  // hint
  background(
   map(mouseY, 0, height, 255, 0)
 );
}
