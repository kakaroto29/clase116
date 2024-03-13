function startClassification()
{
    navigator.mediaDevices.getUserMedia({  audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/aYWHo2swx/model.json',ModelReady);
}

function ModelReady(){
    classifier.classify( gotResults);
}