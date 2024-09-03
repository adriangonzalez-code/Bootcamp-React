// Selectores
const heading = document.querySelector('.heading');

console.log(heading);
console.log(heading.tagName);
console.log(heading.textContent);
console.log(heading.classList);

const enlaces = document.querySelector('.navegacion a'); // Devuelve solamente un elemento
const enlaces = document.querySelectorAll('.navegacion a'); // Devuelve una NodeList con todos los elementos que coincidan con el selector

console.log(enlaces);