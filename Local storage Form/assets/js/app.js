//Variables
const tweetsList = document.getElementById('lista-tweets');


//Event listeners

eventListeners();

function eventListeners(){

    //Send the form
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //Delete tweets

    //Loaded content

}


//Functions

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