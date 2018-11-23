var colorPicker = ["red", "green", "blue", "yellow"];
var wayneArray = new Array(); 

function startGame() {
	var randoNum = Math.floor(Math.random() * 4);
	wayneArray.unshift(colorPicker[randoNum]);
	document.getElementById("simonSays").innerHTML = "Simon Says:" + colorPicker[randoNum];
	setTimeout(changeCol, 500);
	
	}
	
function changeCol() {
	document.getElementById("simonSays").innerHTML = "Simon Says:";
}

function redButt() {
	
	var red = "red";
	if (red == wayneArray[0]){
	startGame();
	}
	else {
	document.getElementById("simonSays").innerHTML = "Simon Says: " + wayneArray;
	}
}

function greenButt() {
	
	var green = "green";
	if (green == wayneArray[0]){
	startGame();
	}
	else {
	document.getElementById("simonSays").innerHTML = "Simon Says: " + wayneArray;
	}
}

function blueButt() {
	
	var blue = "blue";
	if (blue == wayneArray[0]){
	startGame();
	}
	else {
	document.getElementById("simonSays").innerHTML = "Simon Says: " + wayneArray;
	}
}

function yellowButt() {
	
	var yellow = "yellow";
	if (yellow == wayneArray[0]){
	startGame();
	}
	else {
	document.getElementById("simonSays").innerHTML = "Simon Says: " + wayneArray;
	}
}


	
	
