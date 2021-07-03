
img="";
object=[];
status="";

function preload(){
    img=loadImage("droom.jpg");
}

function setup(){
    canvas=createCanvas(640, 390);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelloaded)
    document.getElementById("status").innerHTML="Status - Detecting Object";
}

function draw(){
    image(img, 0, 0, 640, 420);

    if(status != ""){
        for(i=0; i<object.length; i++){
            document.getElementById("status").innerHTML="Status - Object Detected";
            fill("#ff0303");
            noFill();
            stroke("#ff0303");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
            percent=floor(object[i].confidence*100);
            text(object[i].label+" " +percent+ "%", object[i].x+15, object[i].y+15);
        }
    }
}


function modelloaded(){
    console.log("Model Loaded!!");
    status=true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
    console.error(error);
    }
    console.log(results);
    object=results;
}

function back(){
    window.location="index.html";
}