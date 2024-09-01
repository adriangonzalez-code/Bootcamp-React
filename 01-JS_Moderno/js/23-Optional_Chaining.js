// Optional Chaining ' ? ' sirve para evitar el error de 'undefined' al intentar acceder a un campo que no existe
const alumno = {
    nombre: "John Doe Smith",
    clase: 'Programación 1',
    aprobado: true,
}

//console.log(alumno.examenes.examen1); // Error: Cannot read property 'examen1' of undefined
console.log(alumno.examenes?.examen1); // undefined


// Nullish Coalescing  operator ' ?? ', también conocido como Elvis operator, se utiliza para evitar el error de 'undefined' y 'null' al intentar acceder a un campo que no existe, retorna el valor de la derecha si el valor de la izquierda es 'null' o 'undefined'
const pagina = null ?? 1;
console.log(pagina); // 1