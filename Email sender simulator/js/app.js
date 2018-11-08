//VARIABLES
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');



//EVENT LISTERNS

eventlisteners();

function eventlisteners(){

    //Begin app & disable send button
    document.addEventListener('DOMContentLoaded', inicioApp)

}


//FUNCTIONS

function inicioApp(){

    btnEnviar.disabled = true;

}