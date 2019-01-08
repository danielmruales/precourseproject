var userDisplay=document.getElementById("userDisplay")
var computerDisplay=document.getElementById("computerDisplay")
var resultDisplay=document.getElementById("resultDisplay")

var user
var computer

function Choice(x, y,) {
	this.choice= x;
	this.beats= y;
}

var Vodka = new Choice("Rum", "Tequila");
var Rum = new Choice("Vodka", "Tequila");
var Tequila = new Choice("Vodka", "Rum");


var choices = [Vodka, Rum, Tequila]
function computerChoose(x){
	var index = Math.floor(Math.random() * x.length);
	computer = x[index];
}

function userChoose(Choice){
	user = choice;
	userDisplay.innerHTML = "You: <b>" +user.choice+"</b>";
	computerChoose(choices);
	computerDisplay.innerHTML = "Computer: <b>"+computer.choice+"</b>";
	if(user.choice == computer.choice){
		resultDisplay.innerHTML = "Tie";
	} else if (user.beats == computer.choice) {
		resultDisplay.innerHTML = "You win!";
	} else {
		resultDisplay.innerHTML = "You lose";
	}
}

