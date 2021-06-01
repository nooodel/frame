function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(180,170);
    video = createCapture(VIDEO);
    video.hide();
    image(video, 0, 0, 640, 480);
}

function draw(){
    circle(30,30,35);
    circle(30,370,35);
    circle(370,30,35);
    circle(370,370,35);
    rect(25, 70, 10, 260);
    rect(70, 365, 260, 10);
    rect(70, 25, 260, 10);
    rect(365, 70, 10, 260);
}

function take_snapshot() {
    save('frame_photo.png');
}