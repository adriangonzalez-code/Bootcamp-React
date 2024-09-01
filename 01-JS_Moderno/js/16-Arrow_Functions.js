// Functions - Arrow Functions
const sumar = function (numero1 = 0, numero2 = 0) { // Esa es una función tradicional de JavaScript
    console.log(numero1 + numero2);
}

// La función anterior se puede reescribir como una función flecha de la siguiente manera
const sumarFlecha = (numero1 = 0, numero2 = 0) => { // Esa es una función flecha de JavaScript
    console.log(numero1 + numero2);
}

sumar(5, 10); // Imprime: 15
sumarFlecha(5, 10); // Imprime: 15