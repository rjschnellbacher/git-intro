// Create a variable calle msg to hold a new message
var msg = 'Sign up to receive our newsletter for 10 % off'

//Create a function to update the contenet
function updateMessage() {

	var el = document.getElementById('message');

	el.textContent = msg;
}

// Call the function
updateMessage();

// Create a variable called el to hold the element where
var el = document.getElementById('info');
var randomNum = Math.floor((Math.random() * 10) +1);

// Write the number into that element
el.innerHTML = '<h2>random number</h1><h2>' + randomNum + '</h2>';