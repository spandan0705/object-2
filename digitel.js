img_1 ="";
object = [];
status="";

function back()
{
    window.location("index.html");
}

function preload()
{
    img_1 = loadImage('mobile-watch.jpg');
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    objectDetector =ml5.objectDetector('coossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!!");
    status=true;
}

function gotResult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        object = results;

    }
}