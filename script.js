var allPlayground = document.getElementsByClassName("square");
var colors = generateRandomColors(6);
var goalColor = document.getElementById("goal-color");
var answerText = document.getElementById("answer");
var header = document.getElementById("head");
var newColorButton = document.getElementById("newColors");
var gameOver = false;


var pickedColor = pickColor();

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
    gameOver = true;
    answerText.textContent = "Correct!"
    newColorButton.textContent = "Try again?";
    for(var i=0; i < allPlayground.length ; i++){
        allPlayground[i].style.backgroundColor = pickedColor;
        header.style.backgroundColor = pickedColor;
    }
}


function pickColor() {
    var number = Math.floor(Math.random() * colors.length);
    return colors[number];
}

function generateRandomColors(colorCount){
    var arr = [];
    for(var i =0;i<colorCount;i++){
        arr.push("rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")");
    }
    return arr;
}


newColorButton.addEventListener("click",function(){
    if(gameOver){
        this.textContent = "New Colors"
    }
    
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    goalColor.textContent = pickedColor;
    for(var i=0;i<colors.length;i++){
        allPlayground[i].style.backgroundColor = colors[i];
    }
    header.style.backgroundColor = "#232323";
});
