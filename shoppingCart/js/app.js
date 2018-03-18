// VARIABLES

const shopCart = document.getElementById('carrito');
const courses = document.getElementById('lista-cursos');
const coursesList = document.querySelector('#lista-carrito tbody');
const emptyShopCartBtn = document.getElementById('vaciar-carrito');

// LISTENERS

chargeEventListeners();

	function chargeEventListeners(){
		// Trigger when click on "Add to shopping cart (SC)"
		courses.addEventListener('click', buyCourse);
		
		// Trigger when click on "Delete from shopping cart (SC)"
		shopCart.addEventListener('click', deleteCourse);
		emptyShopCartBtn.addEventListener('click', emptyShopCart);

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

// Function to add course to shop cart
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
	keepCourseLocalStorage(courses);

}

// Function to delete a course from the DOM
function deleteCourse(e){
	e.preventDefault()

	let curso;

	if (e.target.classList.contains('borrar-curso')){

		e.target.parentElement.parentElement.remove();

	}

}

// Function to delete all courses from the DOM
function emptyShopCart(){
	//coursesList.innerHTML = '';
	while(coursesList.firstChild){
		coursesList.removeChild(coursesList.firstChild);
	}
	return false;
}

//Function to add course to local storage
function keepCourseLocalStorage(course){
	let courses;

	// Take value form array with LS data or empty
	courses = getCoursesLocalStorage();

	//Selected course added to array
	courses.push(course);

	localStorage.setItem('courses', JSON.stringify(courses));

}

//Function to get courses from local storage
function getCoursesLocalStorage(){
	let coursesLS;

	//Check if there are courses in LS
	if(localStorage.getItem('courses') === null){
		coursesLS = [];
	}else{
		//Convert form string to array
		coursesLS = JSON.parse(localStorage.getItem('courses'));
	}

	return coursesLS;
}
