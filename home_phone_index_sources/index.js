// JavaScript Document

// queue of pairs that are (icon_name, url)
var pairs = new Map();

// onclick for button is simply add (icon_name, url)
// add active class to button
var buttonClick = function(icon, url) {
	if (pairs.has(icon)) {
		// if the pair exists then remove
		icon.classList.remove("active");
		pairs.delete(icon);
	} else {
		// if the pair has not been added then add
		pairs.set(icon, url);
		icon.classList.add("active");
	}
}

// onclick for close:
	// pop all pairs in the queue
	// remove active class from button
function hangUp() {
	while (pairs.size > 0) {
		// get a key
		var current = pairs.keys().next().value;
		// remove the active class
		current.classList.remove("active");	
		// delete the key and value from the k/v pairs
		pairs.delete(current);
	}
}

function openWindow(value, key, map) {
	window.open(value, '_blank');
}

function call() {
	// iterate through all keys
	pairs.forEach(openWindow);
	// delete them
	hangUp();
}