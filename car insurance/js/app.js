//Cotizador constructor
function Seguro(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}


//Interfaz constructor

//Event listeners
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const marca = document.getElementById('marca');
});

//Create select with years (Actual < 20)
const max = new Date().getFullYear(),
      min = max -20;

const selectYears = document.getElementById('anio');

for(let i = max; i > min; i--){
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectYears.appendChild(option);
}