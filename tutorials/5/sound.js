var attackLevel = 1.0;
var releaseLevel = 0;

var attackTime = 0.001;
var decayTime = 0.2;
var susPercent = 0.2;
var releaseTime = 0.5;

var env, triOsc;

function setupSound() {
  env = new p5.Env();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);

  triOsc = new p5.Oscillator('sine');
  triOsc.amp(env);
  triOsc.start();
  triOsc.freq(220);
}

function playEnv(){
  env.play();
}

function playEnv(freq){
  var f = map(freq, height, 0, 100, 1000);
  if (f > 0) {
    triOsc.freq(f);
    env.play();
  }
}
