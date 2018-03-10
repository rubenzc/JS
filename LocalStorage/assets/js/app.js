// Variables
const listaTweets = document.getElementById('lista-tweets');

// Event Listeners

eventListeners();

function eventListeners() {
     //Form sent
     document.querySelector('#formulario').addEventListener('submit', agregarTweet);

     // Borrar Tweets
     listaTweets.addEventListener('click', borrarTweet);

     // Contenido cargado
     document.addEventListener('DOMContentLoaded', localStorageListo);
}



// Functions

// Add tweet from form
function agregarTweet(e) {
     e.preventDefault();

     // Read value from textarea
     const tweet = document.getElementById('tweet').value;
     
     // Create delete button for each tweet
     const botonBorrar = document.createElement('a');
     botonBorrar.classList = 'borrar-tweet';
     botonBorrar.innerText = 'X';

     // Crate element and add content to the list
     const li = document.createElement('li');
     li.innerText = tweet;
     // Add delete button to the tweet
     li.appendChild(botonBorrar);
     // Add tweet to the list
     listaTweets.appendChild(li);

     // Add tweet to LocalStorage
     agregarTweetLocalStorage(tweet);
}
// Delete tweet from the DOM
function borrarTweet(e) {
     e.preventDefault();
     if(e.target.className === 'borrar-tweet') {
          e.target.parentElement.remove();
          // Delete tweet form LocalStorage
          borrarTweetLocalStorage(e.target.parentElement.innerText);
     } 
}
// Show local storage data in the list
function localStorageListo() {
     let tweets;

     tweets = obtenerTweetsLocalStorage();

     // Create each tweet and charge them at DOM & local storage
     tweets.forEach(function(tweet) {
          // Create delete button for each tweet
          const botonBorrar = document.createElement('a');
          botonBorrar.classList = 'borrar-tweet';
          botonBorrar.innerText = 'X';

          // Crate element and add content to the list
          const li = document.createElement('li');
          li.innerText = tweet;
          // Add delete button to the tweet
          li.appendChild(botonBorrar);
          // Add tweet to the list
          listaTweets.appendChild(li);
     });
}

// Add tweet to local storage
function agregarTweetLocalStorage(tweet) {
     let tweets;
     tweets = obtenerTweetsLocalStorage();
     // Add the new tweet
     tweets.push(tweet);
     // Convert from string to array for local storage
     localStorage.setItem('tweets', JSON.stringify(tweets) );
}

// Check tweets in the LocalStorage, return an Array
function obtenerTweetsLocalStorage() {
     let tweets;
     // Check if LocalStorage is empty
     if(localStorage.getItem('tweets') === null) {
          tweets = []; 
     } else {
          tweets = JSON.parse(localStorage.getItem('tweets') );
     }
     return tweets;
}

// Delete tweet form local storage

function borrarTweetLocalStorage(tweet) {

     let tweets, tweetBorrar;
     
     // Delete the "X" from the tweet
     tweetBorrar = tweet.substring(0, tweet.length - 1);

     tweets = obtenerTweetsLocalStorage();

     tweets.forEach(function(tweet, index) {
          if(tweetBorrar === tweet) {
               tweets.splice(index, 1);
          }
     }) ;

     localStorage.setItem('tweets', JSON.stringify(tweets) );
}