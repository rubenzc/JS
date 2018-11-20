//Insurance constructor
function Seguro(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function(info){
     /*
          1 = american 1.15
          2 = asiatic 1.05
          3 = european 1.35
     */

     let cantidad;
     const base = 2000;

     switch(this.marca){
         case '1':
            cantidad = base *1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
    }
    //Read the year
    const diferencia = new Date().getFullYear( - this.anio);
    //Each year of difference we have to decrease 3% the value of insurance
    cantidad -= ((diferencia + 3) + cantidad) / 100;

    /*
        If insurance is basic * 30%
        if insurance is full * 50%
    */
    if(this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }

    return cantidad;

}

//Interface constructor
function Interfaz(){}

//Message to print in the HTML

Interfaz.prototype.mostrarMensaje = function(mensaje, tipo) {
    const div = document.createElement('div');

    if(tipo === 'error') {
         div.classList.add('mensaje','error');
    } else {
         div.classList.add('mensaje','correcto');
    }
    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));

    setTimeout(function() {
         document.querySelector('.mensaje').remove();
    }, 3000);
}

//Print the final result
Interfaz.prototype.mostrarResultado = function(seguro, total) {
    const resultado = document.getElementById('resultado');
    let marca;
    switch(seguro.marca) {
         case '1':
              marca = 'Americano';
              break;
         case '2':
              marca = 'Asiatico';
              break;
         case '3':
              marca = 'Europeo';
              break;
    }
    // Create a div
    const div = document.createElement('div');
    // Insert the info
    div.innerHTML = `
         <p class='header'>Tu Resumen: </p>
         <p>Marca: ${marca} </p>
         <p>Año: ${seguro.anio} </p>
         <p>Tipo: ${seguro.tipo} </p>
         <p> Total: $ ${total} </p>
    `;

    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';
    setTimeout(function() {
         spinner.style.display = 'none';
         resultado.appendChild(div);
    }, 3000);
    

}


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
    if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
        // Interface printing an error
        interfaz.mostrarMensaje('Faltan datos, revisar el formulario y prueba de nuevo', 'error');
   } else {
        // Clean before results
        const resultados = document.querySelector('#resultado div');
        if(resultados != null) {
             resultados.remove();
        }

        // Instance insurance & show interface
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
        // Cotizar seguro
        const cantidad = seguro.cotizarSeguro();
        // Show result
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje('Cotizando...', 'exito');
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