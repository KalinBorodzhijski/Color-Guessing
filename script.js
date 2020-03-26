var allPlayground = document.getElementsByClassName("square");
var colors = ["rgb(255, 0, 0)","rgb(255, 255, 0)","rgb(0, 255, 255)","rgb(255, 0, 255)","rgb(0, 255, 0)","rgb(0, 0, 255)"]
var goalColor = document.getElementById("goal-color");
var answerText = document.getElementById("answer");
var pickedColor = colors[3];
var header = document.getElementById("head");


goalColor.textContent = pickedColor;


for(var i=0; i < colors.length ; i++){
    allPlayground[i].style.backgroundColor = colors[i];

    allPlayground[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
           correctAnswer();
        }
        else {
            answerText.textContent = "Try again!"
            this.style.backgroundColor = "#232323";
        }
    });
}

function correctAnswer() {
    answerText.textContent = "Correct!"
    for(var i=0; i < allPlayground.length ; i++){
        allPlayground[i].style.backgroundColor = pickedColor;
        header.style.backgroundColor = pickedColor;
    }
}


function wrongAnswer() {


    
}



