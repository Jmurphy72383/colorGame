console.log("Connected!");
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
    })
}

function reset() {
    //Generate all new colors
    colors = generateRandomColors(numSquares);
    //Pick a new random color from array
    pickedColor = pickColor();
    //Change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //Change colors of squares
    for(var i = 0; i < squares.length; i ++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function() {
    reset();
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < colors.length; i++) {
    //Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //Add click event listeners to squares
    squares[i].addEventListener("click", function(){
        //Grab color of picked square
        var clickedColor = this.style.backgroundColor;
        //Compare to clicked color
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;

        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }

    });
}

function changeColors(color) {
    //Loop through all squares
    for(var i = 0; i < squares.length; i++){
        //Change each color to match picked color
        squares[i].style.backgroundColor = color;
    }
}

//Changes the position of the picked color to random
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //Make an array
    var arr = [];
    //Repeat num times
    for(var i = 0; i < num; i++){
        //Get random color and push into array
        arr.push(randomColor());

    }
    //Return that array
    return arr;
}

function randomColor() {
    //Pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //Pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //Pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    //Building the RGB String
    return "rgb(" + r + ", " + g + ", " + b + ")";

}