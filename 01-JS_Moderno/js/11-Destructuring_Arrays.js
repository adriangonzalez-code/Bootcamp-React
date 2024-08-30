// Destructuring de arrays
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

const react = tecnologias[3]; // Accediendo a un elemento del arreglo y almacenándolo en una variable.
const [,, js,, nodejs] = tecnologias; // Destructuring de arreglo. El primer argumento es el nombre de la variable que va a almacenar el primer elemento

console.log(react); // Imprime: "React"
console.log(js); // Imprime: "JavaScript"