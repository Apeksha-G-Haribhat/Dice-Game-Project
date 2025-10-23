//for first dice
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1= Math.floor(randomNumber1) + 1;

console.log(randomNumber1);


var randomDiceImage = "images/dice" + randomNumber1 + ".png"; // dice1.png to dice6.png -- it builds a file path like this--images/dice1.png
/*Suppose randomNumber1 equals 4- JavaScript evaluates left-to-right:
Start with "images/dice" (string).
Add randomNumber1 → "images/dice" + 4 → "images/dice4" (number converted to string).
Add ".png" → "images/dice4" + ".png" → "images/dice4.png".*/

document.querySelector(".img1").setAttribute("src", randomDiceImage); // here itwll change the image source attribute to the random dice image


//for second dice
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

console.log(randomNumber2);

var randomDiceImage2 = "images/dice" + randomNumber2+ ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "🚩Player 1 wins!"
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML= "Player 2 wins!🚩"
}
else{
    document.querySelector("h1").innerHTML= "It's a Draw!😀🟰😎"
}