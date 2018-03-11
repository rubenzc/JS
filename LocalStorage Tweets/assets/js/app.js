// Variables
const tweetsList = document.getElementById('tweets-list');

// Event Listeners

eventListeners();

function eventListeners() {
     //Form sent
     document.querySelector('#formulario').addEventListener('submit', addTweet);

     // Borrar Tweets
     tweetsList.addEventListener('click', deleteTweet);

     // Contenido cargado
     document.addEventListener('DOMContentLoaded', localStorageReady);
}

// FUNCTIONS //

// Add tweet from form
function addTweet(e) {
     e.preventDefault();

     // Read value from textarea
     const tweet = document.getElementById('tweet').value;
     
     // Create delete button for each tweet
     const btnDelete = document.createElement('a');
     btnDelete.classList = 'borrar-tweet';
     btnDelete.innerText = 'X';

     // Crate element and add content to the list
     const li = document.createElement('li');
     li.innerText = tweet;
     // Add delete button to the tweet
     li.appendChild(btnDelete);
     // Add tweet to the list
     tweetsList.appendChild(li);

     // Add tweet to LocalStorage
     addTweetLocalStorage(tweet);
}
// Delete tweet from the DOM
function deleteTweet(e) {
     e.preventDefault();
     if(e.target.className === 'borrar-tweet') {
          e.target.parentElement.remove();
          // Delete tweet form LocalStorage
          deleteTweetLocalStorage(e.target.parentElement.innerText);
     } 
}
// Show local storage data in the list
function localStorageReady() {
     let tweets;

     tweets = getTweetsLocalStorage();

     // Create each tweet and charge them at DOM & local storage
     tweets.forEach(function(tweet) {
          // Create delete button for each tweet
          const btnDelete = document.createElement('a');
          btnDelete.classList = 'borrar-tweet';
          btnDelete.innerText = 'X';

          // Crate element and add content to the list
          const li = document.createElement('li');
          li.innerText = tweet;
          // Add delete button to the tweet
          li.appendChild(btnDelete);
          // Add tweet to the list
          tweetsList.appendChild(li);
     });
}

// Add tweet to local storage
function addTweetLocalStorage(tweet) {
     let tweets;
     tweets = getTweetsLocalStorage();
     // Add the new tweet
     tweets.push(tweet);
     // Convert from string to array for local storage
     localStorage.setItem('tweets', JSON.stringify(tweets) );
}

// Check tweets in the LocalStorage, return an Array
function getTweetsLocalStorage() {
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

function deleteTweetLocalStorage(tweet) {

     let tweets, tweetBorrar;
     
     // Delete the "X" from the tweet
     tweetBorrar = tweet.substring(0, tweet.length - 1);

     tweets = getTweetsLocalStorage();

     tweets.forEach(function(tweet, index) {
          if(tweetBorrar === tweet) {
               tweets.splice(index, 1);
          }
     }) ;

     localStorage.setItem('tweets', JSON.stringify(tweets) );
}