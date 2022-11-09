function setup(){
    video = createCapture(VIDEO);
video.size(300,400);
video.position(650,200);

   canvas = createCanvas(250,300);
   canvas.position(300,300);

  poseNet= ml5.poseNet(video,modelLoaded) ;
  poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}

