function generateWord() {
	var randoNum = Math.floor(Math.random() * 5);
	var randoNum2 = Math.floor(Math.random() * 5);
	var nounPicks = [" cliff", " shawl", " skunk", " fedora", " cat"];
	var adjPicks = ["beautiful", "smelly", "dirty", "charming", "small"];
	document.getElementById("output").innerHTML += "What a " + adjPicks[randoNum] + nounPicks[randoNum2] + "!<br/>";
}