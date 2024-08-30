// Arrays o arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 30, true]; // Definimos un array de tecnologías, para ello se utiliza corchetes []. Los elementos pueden ser de cualquier tipo, incluso otros arreglos.

console.table(tecnologias); // Imprime: ['HTML', 'CSS', 'JavaScript', 'React']. Los arreglos tienen un índice que comienza en 0.

console.log(tecnologias[2]); // Imprime: "JavaScript". Accedemos a un elemento del arreglo por su índice.

console.log(tecnologias[6]); // Imprime: undefined. Si intentamos acceder a un índice que no existe