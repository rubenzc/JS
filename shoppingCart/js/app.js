// VARIABLES

const shopCart = document.getElementById('carrito');
const courses = document.getElementById('lista-cursos');
const coursesList = document.querySelector('#lista-carrito tbody');

// LISTENERS

chargeEventListeners();

	function chargeEventListeners(){
		// Trigger when click on "Add to shopping cart (SC)"
		courses.addEventListener('click', buyCourse);

	}

//FUNCTIONS

//Function to add course to SC
function buyCourse(e){
	e.preventDefault()

	// Delegation for agregar-carrito
	if(e.target.classList.contains('agregar-carrito')){
		// Get all the info from class 'card'
		const course = 	e.target.parentElement.parentElement;
		// Send the selected course to get data
		readCourseData(course)
	}
}

//Function to read data course
function readCourseData(course){
	//object with info course
	const infoCourse = {
		imagen: course.querySelector('img').src,
		titulo: course.querySelector('h4').textContent,
		precio: course.querySelector('.precio span').textContent,
		id: course.querySelector('a').getAttribute('data-id')
	}

	addShopCart(infoCourse);

}

function addShopCart(course){
	const row = document.createElement('tr');
	row.innerHTML = `
		<td>  
		   <img src="${course.imagen}" width=100>
		</td>
		<td>${course.titulo}</td>
		<td>${course.precio}</td>
		<td>
		   <a href="#" class="borrar-curso" data-id="${course.id}">X</a>
		</td>
     `;

	coursesList.appendChild(row);
}