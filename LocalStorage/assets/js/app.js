//Variables

const listaTweets = document.getElementById('lista-tweets');

//Events Listeners

eventListeners();


function eventListeners(){
	//Send form
	document.getElementById('formulario').addEventListener('submit', addTweet);
}

//Functions

//Add tweet from form
function addTweet(e){

//We use the prevent default to avoid execute the action
	e.preventDefault();
	console.log("Form enviado");

	//Read the value from text area
	const tweet = document.getElementById('tweet').value;
	
	//Create element and add its content to the list
	const li = document.createElement('li');
	li.innerText = tweet;

	//appendChild to charge it on the DOM
	listaTweets.appendChild(li);

	console.log(tweet);

}