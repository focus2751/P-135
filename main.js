status = "";

 function setup()
 {
    canvas = createCanvas(480, 380);
    canvas.center();

    video = createCapture();
    video.hide();
 }

 function start()
 {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    Input = document.getElementById("input_f").innerHTML;
 }
 
 function modelLoaded()
 {
    console.log("Model Loaded!");
    status = true;
 }

 function draw()
 {
    image(video, 0, 0, 480, 380);
 }


