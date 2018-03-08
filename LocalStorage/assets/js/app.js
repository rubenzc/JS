// Variables

const listaTweets = document.getElementById('lista-tweets');

// Events Listeners

eventListeners();


function eventListeners(){
	// Send form
	document.getElementById('formulario').addEventListener('submit', addTweet);

	// Delete tweets
	listaTweets.addEventListener('click', deleteTweet);

}

// Functions

// Add tweet from form
function addTweet(e){

//We use the prevent default to avoid execute the action
	e.preventDefault();
	console.log("Form enviado");

	//Read the value from text area
	const tweet = document.getElementById('tweet').value;

	//Create delete button for each tweet
	const btnDelete = document.createElement('a');
	btnDelete.classList = 'borrar-tweet';
	btnDelete.innerText = 'X';
	
	//Create element and add its content to the list
	const li = document.createElement('li');
	li.innerText = tweet;

	//add delete button to tweet
	li.appendChild(btnDelete);
	//Add twwet to the list
	listaTweets.appendChild(li);

}


function deleteTweet(e){

	e.preventDefault();
	// Delegation
	if(e.target.className === 'borrar-tweet'){
		console.log(e.target.parentElement.remove());
		alert("Your tweet will be deleted!!");
	}
	
}