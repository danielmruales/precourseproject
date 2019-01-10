//define html variables
var userDisplay = document.getElementById("userDisplay")
var computerDisplay = document.getElementById("computerDisplay")
var resultDisplay = document.getElementById("resultDisplay")

//create user and computer
var user
var computer

//create choice prototype
function Choice(x, y) {
	this.choice= x;
	this.beats = y;
}

//create choices
var Water = new Choice("Water", "Fire");
var Earth = new Choice("Earth", "Water");
var Fire = new Choice("Fire", "Earth");


//prepare computer choose function
var choices = [Water, Earth, Fire]
function computerChoose(x){
	var index = Math.floor(Math.random() * x.length);
	computer = x[index];
}

//user chooses, causing computer to choose
function userChoose(choice){
	user = choice;
	userDisplay.innerHTML = "Element Selected: <b>"+user.choice+"</b>";
	computerChoose(choices);
	computerDisplay.innerHTML = "Zuko Chose: <b>"+computer.choice+"</b>";
	if(user.choice == computer.choice){
		resultDisplay.innerHTML = "Stalemate";
	} else if (user.beats == computer.choice) {
		resultDisplay.innerHTML = "Victory!";
	} else {
		resultDisplay.innerHTML = "You were destroyed :(";
	}
}