//VARIABLES
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');

//EVENT LISTENERS

cargarEventListeners();

function  cargarEventListeners(){
    //Trigger when press 'Add to car button'
    cursos.addEventListener('click', comprarCurso);

    listaCursos.addEventListener('click', eliminarCurso);

}

//FUNCTIONS

//Function to add course to cart
function comprarCurso(e){
    e.preventDefault();
    //Delegation for 'agregar-carrito'
    if( e.target.classList.contains('agregar-carrito') ){
        const curso = e.target.parentElement.parentElement;
        //Take data course selected
        leerDatosCurso(curso);
    }
}

//Function to read data course
function leerDatosCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoCurso);
}

//Show course selected in the cart
function insertarCarrito(curso){
    //Create the card for selected course
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width=100>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id=""${curso.id}>X</a>
        </td>
    `;
    listaCursos.appendChild(row);
}

//Delete the course from the DOM
function eliminarCurso(e){
    e.preventDefault();
    let curso;
    
    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
    }
}
