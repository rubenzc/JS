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
    document.addEventListener('DOMContentLoaded', localStorageReady)
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

    //Add tweet to local storage
    agregarTweetLocalStorage(tweet);
}

//Delete tweet from the form
function borrarTweet(e){
    e.preventDefault();

    if (e.target.className === "borrar-tweet"){
        e.target.parentElement.remove();
    }
}

//Show local storage list
function localStorageReady(){
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet){
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
    });
}

//Add tweet to local storage
function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    
    //Add the new tweet
    tweets.push(tweet);
    //Convert from string to array for local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Check if there are some elements in local storage. It retuns an array

function obtenerTweetsLocalStorage(){
    let tweets;
    //Check local storage value
    if(localStorage.getItem('tweets') === null){
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}