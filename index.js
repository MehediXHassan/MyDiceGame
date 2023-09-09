var randomNUmber1 = Math.floor(Math.random() * 6) + 1 ; // 1-6

var randomDiceImage = "dice" +randomNUmber1 +".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png -images/dice6.png

var images1 =  document.querySelectorAll("img")[0];

images1.setAttribute("src" , randomImageSource);



var randomNUmber2 = Math.floor(Math.random() * 6) + 1 ; // 1-6


var randomImageSource2 = "images/dice" + randomNUmber2 + ".png"; //images/dice1.png -images/dice6.png

var images2 =  document.querySelectorAll("img")[1];

images2.setAttribute("src" , randomImageSource2);


if (randomNUmber1 > randomNUmber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else if(randomNUmber1 === randomNUmber2){
    document.querySelector("h1").innerHTML = "Draw!";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";

}