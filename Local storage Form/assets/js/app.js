//Variables
const tweetsList = document.getElementById('lista-tweets');


//Event listeners

eventListeners();

function eventListeners(){

    //Send the form
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //Delete tweets
    tweetsList.addEventListener('click', borrarTweet);
    //Loaded content

}


//Functions

//Add tweet to the form
function agregarTweet(e){
    e.preventDefault();
    //Read textarea input
    const tweet = document.getElementById('tweet').value;
    
    //Create delete button
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    
    //Create element and add the content to the list
    const li = document.createElement('li');
    li.innerText = tweet;
    //Add delete button to the tweet
    li.appendChild(botonBorrar);
    //Add the tweet to the list
    tweetsList.appendChild(li);
}

//Delete tweet from the form
function borrarTweet(e){
    e.preventDefault();

    if (e.target.className === "borrar-tweet"){
        e.target.parentElement.remove();
    }
}