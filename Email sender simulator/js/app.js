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

    //Form fields
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);




}


//FUNCTIONS

//Init app
function inicioApp(){
    //Disable send button
    btnEnviar.disabled = true;
}

//Check fields form
function validarCampo(){

    //Check input length and not empty
    validarLongitud(this);

    //Check the field if it's an email
    if(this.type === 'email'){
        validarEmail(this);
    }

}

//Check input length in the fields
function validarLongitud(campo){

    if (campo.value.length > 0){
        campo.style.borderBottomColor = 'green'
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }

}

//