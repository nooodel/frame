function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(180,170);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 85, 120, 230, 180);
    circle(30,30,35);
    stroke(96, 150, 125);
    fill(96, 150, 125)
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