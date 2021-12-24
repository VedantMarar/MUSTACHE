noseX = 0;
noseY = 0;

function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Posenet is initialized")
}

function take_snapshot(){
    save('1.png');
}

function draw(){
image(video,0,0,300,300);
}

function gotPoses(){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X is"+ noseX);
        console.log("Nose Y is", noseY);
    }
}

