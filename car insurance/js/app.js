//Cotizador constructor
function Seguro(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}


//Interface constructor
function Interfaz(){}


//Event listeners
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //Read the selected value from an option
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    
    //Read selected yeear from the select
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;

    //Read the selected value from the radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    //Create interfaz instance
    const interfaz = new Interfaz();

    //No empty fields
    if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === ''){
        //Interfaz printing an error
        console.log('Faltan datos');
    } else {
        console.log('Todo correcto');
    }

});

//Create select form with years selecter (Actual < 20)
const max = new Date().getFullYear(),
      min = max -20;

const selectYears = document.getElementById('anio');

for(let i = max; i > min; i--){
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectYears.appendChild(option);
}