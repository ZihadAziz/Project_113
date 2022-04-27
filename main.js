function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(120, 255);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw() {
    image(video, 175, 150, 320, 240);

    fill("red");
    stroke("red");
    circle(620, 460, 30);

    fill("red");
    stroke("red");
    circle(20, 460, 30);

    fill("red");
    stroke("red");
    circle(620, 20, 30);

    fill("red");
    stroke("red");
    circle(20, 20, 30);

    fill("green");
    stroke("green");
    rect(30, 450, 580, 15);
    
    fill("green");
    stroke("green");
    rect(30, 10, 580, 15);

    fill("green");
    stroke("green");
    rect(30, 10, 15, 440);

    fill("green");
    stroke("green");
    rect(600, 10, 15, 440);
}



function take_snapshot() {
    save("snapshot.png");
}