// Modificar Arrays
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
tecnologias[5] = 'Python'; // Modificamos un elemento del arreglo. Cuando accedemos a un índice que no existe, pero hacemos una asignación, se crea ese índice y se le asigna el valor especifico.
tecnologias[8] = 'TypeScript'; // Añadimos un nuevo elemento al arreglo pero el índice es mayor al último elemento existente, por lo tanto, se crea ese nuevo índice y se le asigna el valor especificado.
tecnologias.push('Go'); // Añadimos un nuevo elemento al final del arreglo. El método push muta el arreglo original, esto quiere decir que el arreglo se modifica en lugar de devolver un nuevo arreglo.

const nuevoArreglo = [...tecnologias, 'Java']; // Creamos un nuevo arreglo utilizando la spread operator (...). Este operador permite copiar todos los elementos de un arreglo a un nuevo arreglo.
console.table(tecnologias);
console.table(nuevoArreglo);

tecnologias.shift(); // Eliminamos el primer elemento del arreglo. El método shift muta el arreglo original, esto quiere decir que el arreglo se modifica en lugar de devolver un nuevo arreglo.
console.table(tecnologias);

const tecnologias2 = tecnologias.filter(function (tech) {
    if (tech !== 'JavaScript') {
        return tech;
    }
}); // Con filter, podemos crear un nuevo arreglo con los elementos que cumplan con una condición.

console.log(tecnologias2);

const tecnologias3 = tecnologias.map(function (tech) {
    if (tech === 'JavaScript') {
        return 'TypeScript';
    } else {
        return tech;
    }
}); // Con map, podemos crear un nuevo arreglo con los elementos transformados según una función.

console.log(tecnologias3);