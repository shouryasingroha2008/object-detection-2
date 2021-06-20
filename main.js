img="";
status="";
function preload(){
    img=loadImage('dog_cat.jpg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded(){
  console.log("Model Loaded!");
  status=true;
  objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else if(results){
        console.log(results);
    }
}

function draw(){
    image(img,0,0,640,420);
    fill("#ff0000");
    noFill();
    rect(30,60,450,350);
    stroke("#ff0000");
    text("dog",40,70);

    fill("#ff0000");
    text("cat",305,95)
    noFill();
    rect(290,80,300,310);
}
