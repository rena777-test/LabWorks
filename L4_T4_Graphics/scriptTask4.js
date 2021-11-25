/* (function() {
	var str = "";
	var imgs = document.images;
	document.getElementById("text").innerHTML = "text";

	for (var i = 0; i < imgs.length; i++) {
		str += imgs[i].src +"<br>";
	}
	document.getElementById("text").innerHTML = str;
	var k = 0;
	var id = setInterval(function() {
		var j = k % imgs.length;
			imgs[j].style.border = "3px solid red"
			k++;
		if (k == imgs.length) {
			clearInterval(id);
		}
	}, 1000);
}()); */

window.onload = init;
let imgs = document.images;

function init() {
	displayTheAddressesOfAllImages();
	addARedFrameToEachImageInTurn();
}

function displayTheAddressesOfAllImages() {
	let string = "";
	document.getElementById("text").innerHTML = "text";
	for (let i = 0; i < imgs.length; i++) {
		string += imgs[i].src + "</br>";
	}
	document.getElementById("text").innerHTML = string;
}

function addARedFrameToEachImageInTurn() {
	let number = 0;
	let id = setInterval(function () {
		let i = number % imgs.length;
		imgs[i].style.border = " 3px solid red";
		number++;
		if (number == imgs.length) {
			clearInterval(id);
		}
	}, 1000);
}
