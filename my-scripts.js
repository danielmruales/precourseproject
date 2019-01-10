//Defining html Variables

var userDisplay=document.getElementById("userDisplay")
var computerDisplay=document.getElementById("computerDisplay")
var resultDisplay=document.getElementById("resultDisplay")

//Create user and computer
var user
var computer

//create choice prototype
function Choice(x, y,) {
	this.choice= x;
	this.beats= y;
}

//create choices

var Elixir of Life = new Choice("Rum", "Amortentia");
var Rum = new Choice("Elixir of Life", "Amortentia");
var Amortentia = new Choice("Elixir of Life", "Rum");

//prepare computer choose function

var choices = [Elixir of Life, Rum, Amortentia]
function computerChoose(x){
	var index = Math.floor(Math.random() * x.length);
	computer = x[index];
}

//user choose, causing computer to choose
function userChoose(choice){
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

