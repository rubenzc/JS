//VARIABLES
const listaTweets = document.getElementById('lista-tweets');

//EVENT LISTENERS

eventListeners();

function eventListeners(){
    //Cuándo se envía el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //Borrar tweets
    listaTweets.addEventListener('click', borrarTweet);

    //Contenido cargado
    
    //Similar al document.ready de jQuery
    document.addEventListener('DOMContentLoaded', localStorageListo);

}


//FUNCTIONS

//Añadir tweet del formulario
function agregarTweet(e){
    e.preventDefault();
    //Leer el valor del textarea
    const tweet = document.getElementById('tweet').value;

    //Crear botón de eliminar elemento
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    //Crear elemento y añadir contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    //Añade el botón de borrar al tweet
    li.appendChild(botonBorrar);
    //Añade el tweet a la lista
    listaTweets.appendChild(li);

    //Añadir a local storage
    agregarTweetLocalStorage(tweet);

}
//Elimina el tweet del DOM
function borrarTweet(e){
    e.preventDefault();
    if(e.target.className === 'borrar-tweet'){
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

//Mostrar datos de LocalStorage en la lista
function localStorageListo(){
    let tweets;

    tweets = obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet){
        //Crear botón de eliminar elemento
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

        //Crear elemento y añadir contenido a la lista
        const li = document.createElement('li');
        li.innerText = tweet;
        //Añade el botón de borrar al tweet
        li.appendChild(botonBorrar);
        //Añade el tweet a la lista
        listaTweets.appendChild(li);
    });
}

//Agrega tweet a local storage
function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    //Añadir nuevo tweet
    tweets.push(tweet);
    //Convertir de string a array para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Comprobar que hay elementos en local storage, devuelve un array
function obtenerTweetsLocalStorage(){
    let tweets;
    //Revisamos valores de local storage
    if(localStorage.getItem('tweets') === null){
        //Si no hay nada lo agrega vacío
        tweets = [];
    } else {
        //Si hay algo le añade lo que ya había dentro del array
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

//Eliminar twwet de Local Storage

function borrarTweetLocalStorage(tweet){
    let tweets, tweetsBorrar;
    //ELimina la X del tweet
    tweetBorrar = tweet.substring(0, tweet.length -1);

    tweets = obtenerTweetsLocalStorage();

    //Chequea que no se repita el mismo tweet
    tweets.forEach(function(tweet, index){
        if(tweetBorrar === tweet, index){
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));
}