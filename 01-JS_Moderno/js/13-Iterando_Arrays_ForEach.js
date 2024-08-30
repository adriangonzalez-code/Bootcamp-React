// Destructuring de arrays
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

// Foreach, es una forma más moderna de iterar sobre un arreglo
tecnologias.forEach((tecnologia, index) => {
    console.log(`Tecnología ${index + 1}: ${tecnologia}`); // Imprime: "Tecnología 1: HTML", "Tecnología 2: CSS", etc.
});

// Map, también es una forma moderna de iterar sobre un arreglo y crear un nuevo arreglo con los resultados
const tecnologiasConVersion = tecnologias.map((tecnologia) => {
    return `${tecnologia} v1.0`; // Crea un nuevo arreglo con las tecnologías concatenadas con la versión
});
console.log(tecnologiasConVersion); // Imprime: ["HTML v1.0", "CSS v1.0", "JavaScript v1.0", "React v1.0", "NodeJS v1.0"]

// for ... of, también es una forma moderna de iterar sobre un arreglo
for (const tecnologia of tecnologias) {
    console.log(tecnologia); // Imprime: "HTML", "CSS", "JavaScript", "React", "NodeJS"
}