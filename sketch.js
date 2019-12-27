let mrNoise;
let playButton;
let stopButton;

function setup() {
    //createCanvas(640, 480);
    mrNoise= new p5.Noise();
    mrNoise.setType('brown');
    mrNoise.amp(0.1);

    playButton=createButton('Play');
    playButton.position(10,10);
    playButton.mousePressed(startTheNoise);

    stopButton=createButton('Stop');
    stopButton.position(10,30);
    stopButton.mousePressed(stopTheNoise);
    //mrNoise.start();
}

// function draw() {
//     background(200);
// }

function startTheNoise(){
    mrNoise.start();
}

function stopTheNoise(){
    mrNoise.stop();
}
