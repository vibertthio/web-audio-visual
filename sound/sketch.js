var attackLevel = 1.0;
var releaseLevel = 0;

var attackTime = 0.001;
var decayTime = 0.2;
var susPercent = 0.2;
var releaseTime = 0.5;

var env, triOsc;

function setup() {
  var cnv = createCanvas(100, 100);
  env = new p5.Env();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);

  triOsc = new p5.Oscillator('triangle');
  triOsc.amp(env);
  triOsc.start();
  triOsc.freq(220);

  cnv.mousePressed(playEnv);
}

function draw() {
  background(200);
  textAlign(CENTER);
  text('click to play', width/2, height/2);
}

function playEnv(){
  env.play();
}
