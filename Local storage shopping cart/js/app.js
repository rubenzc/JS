//VARIABLES
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

//EVENT LISTENERS

cargarEventListeners();

function  cargarEventListeners(){
    //Trigger when press 'Add to car button'
    cursos.addEventListener('click', comprarCurso);

    //Remove course form list
    listaCursos.addEventListener('click', eliminarCurso);

    //Remove courses list from cart
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    ///Show local storage when document is loaded
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
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
    guardarCursosLocalStorage(curso);
}

//Delete the course from the DOM
function eliminarCurso(e){
    e.preventDefault();
    let curso;

    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
    }
    eliminarCursoLocalStorage(cursoId);
}

//Function to remove all courses from the cart
function vaciarCarrito(){
    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }
    //Empty Local Storage
    vaciarLocalStorage();

    return false;
}

//Add courses to local storage
function guardarCursosLocalStorage(curso){
    let cursos;
    //Take the array value with LS data or empty. It depends of return value obtenerCursosLocalStorage
    cursos = obtenerCursosLocalStorage();

    //Selected course is added to array
    cursos.push(curso);

    localStorage.setItem('cursos', JSON.stringify(cursos));
}

//Check the elements in local storage
function obtenerCursosLocalStorage(){
    let cursosLS;
    //Check if there is something in LS
    if(localStorage.getItem('cursos') === null){
        cursosLS = [];
    } else {
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursosLS;
}

//Show local storage courses in cart
function leerLocalStorage(){
    let cursosLS;
    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(function(curso){
        //Construye el template
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width=100>
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
        `;
        listaCursos.appendChild(row);
    });

}

//Remove course by ID from local storage

function eliminarCursoLocalStorage(curso){
    let cursosLS;
    //Get the array courses
    cursosLS = obtenerCursosLocalStorage();
    //Compare ID removed course and ID LS course
    cursosLS.forEach(function(cursoLS, index){
        if (cursoLS.id === curso){
            cursosLS.splice(index, 1);
        }
    });
    //Add actual array to LS
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
}

//Remove all LS elements
function vaciarLocalStorage(){
    localStorage.clear();
}
