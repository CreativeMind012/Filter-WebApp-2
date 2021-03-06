
function preload(){
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 30, 30);
}
function save_filtered_image(){
    save('myFilteredImage.png')
}
function modelLoaded(){
    console.log('Done');
}
function gotPoses(results){
    if(results.length > 0){
        console.log('results');
    }
}