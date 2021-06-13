//First Image
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; //Select Image Randomly

var image1 = document.querySelectorAll("img") [0].setAttribute("src", randomDiceImage1); //Set Image 

//Second Image
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; //Select Image Randomly

var image2 = document.querySelectorAll("img") [1].setAttribute("src", randomDiceImage2); //Set Image 

//Change h1
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆Player One Wins";   
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player Two Wins🏆"; 
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a tie 🤝";
}
