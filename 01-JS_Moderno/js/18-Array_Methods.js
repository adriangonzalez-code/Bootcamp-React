const tecnologias = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];
const numeros = [10, 20, 30, 40, 50];

// Filter
const nuevoArray = tecnologias.filter(function(tech) { // forma tradicional
    console.log(tech);
});

const nuevoArray2 = tecnologias.filter(tech => console.log(tech)); // forma flecha

const filtrado1 = tecnologias.filter(function(tech) { // Filtramos las tecnologías que no sean 'HTML', usando una función tradicional
    if (tech !== 'HTML') {
        return tech;
    }
});

const filtrado2 = tecnologias.filter(tech => tech !== 'HTML'); // Filtramos las tecnologías que no sean 'HTML', usando una función fleccha (arrow function)

console.log(filtrado1);  // ['JavaScript', 'React', 'Node.js', 'CSS']
console.log(filtrado2); // ['JavaScript', 'React', 'Node.js', 'CSS']

const resultado = tecnologias.includes('CSS');

console.log(resultado); // true

// Some - Devuelve true si al menos un elemento del array cumple la condición
const algunoEsMayor15 = numeros.some(numero => numero > 15);

console.log(algunoEsMayor15); // true

// Find - Devuelve el primer elemento del array que cumple la condición
const primerMayor15 = numeros.find(numero => numero > 15);

console.log(primerMayor15); // 20

// Every - Devuelve true si todos los elementos del array cumplen la condición
const todosSonMayores15 = numeros.every(numero => numero > 15);

console.log(todosSonMayores15); // false

// Reduce - Recibe una función que se ejecuta para cada elemento del array y devuelve un acumulado del total
const sumaNumeros = numeros.reduce((total, numero) => total + numero, 0);

console.log(sumaNumeros); // 150