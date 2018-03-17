// VARIABLES

const shopCart = document.getElementById('carrito');
const courses = document.getElementById('lista-cursos');

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
	console.log(course);
}