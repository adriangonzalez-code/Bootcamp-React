// Manipulación del DOM
const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a');

console.log(heading.textContent); // Imprime el texto del encabezado

heading.textContent = 'Un Nuevo título'; // Cambia el texto del encabezado

console.log(heading.textContent); // Imprime: "Un Nuevo título"

heading.id = 'nuevo-encabezado'; // Asigna un id al encabezado

heading.removeAttribute('id'); // Elimina el id del encabezado

const inputNombre = document.querySelector('#nombre');
inputNombre.value = 'Juan Pérez'; // Asigna un valor al input

console.log(inputNombre.classList);

inputNombre.dataset.apellido = 'input'; // Añade un dataset al input

console.log(enlaces);

enlaces[0].textContent = 'Nueva página'; // Cambia el texto de un enlace

enlaces.forEach((enlace, index) => enlace.textContent = 'Nueva página ' + index); // Cambia el texto de todos los enlaces