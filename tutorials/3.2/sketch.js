function setup() {
  createCanvas(800, 500);
  //           width height
}

function draw() {
  // stroke(0);
  noStroke();

  fill(
    random(255),   // R : 0 - 255
    random(255),   // G : 0 - 255
    random(255),   // B : 0 - 255
    50,            // opacity : try to adjust this number
  );

  ellipse(
    random(800),
    random(500),
    50,
    50,
  );
}
