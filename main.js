//https://teachablemachine.withgoogle.com/models/1i7iqWhv0/
Prediction1 = ""
Prediction2 = ""

Webcam.set({
    height : 300,
    width : 350,
    image_format :"png",
    png_quality : 100
})
camera = document.getElementById("camera")
Webcam.attach("camera");
 
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img src = '"+data_uri+"' id = 'captured_image'>"
    })
    
    
}
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1i7iqWhv0/modl.json" , modelLoaded)
function modelLoaded(){
    console.log("model_is_loaded")

}
function check(){
    img = document.getElementById("captured_image")
    classifier.classify(img , gotResult)

}
function gotResult(error , result){
if(error){
console.error(error)
}
else{
    console.log(result)
    Prediction1 = result[0].label;
    Prediction2 = result[1].label;
    document.getElementById("hand_gestures_name_1").innerHTML = Prediction
    

    speak()
    if(Prediction1 == "Best"){
        document.getElementById("hand_gestures_name_1").innerHTML = "&#128077;"
    }
    else if(Prediction1 == "Victory"){
        document.getElementById("hand_gestures_name_1").innerHTML = "&#9996;"
    }
    else if(Prediction1 == "Amazing"){
        document.getElementById("hand_gestures_name_1").innerHTML = "&#128076;"
    }
    
}

}
function speak(){
    data = " The Prediction is " + Prediction
    var synth = window.speechSynthesis;
    var utterThis = window.SpeechSynthesisUtterance(data1 + data2)
    synth.speak(utterThis) 
}

    
    


