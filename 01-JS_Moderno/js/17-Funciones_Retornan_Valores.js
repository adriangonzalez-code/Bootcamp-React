// Funciones que retornan valores
const sumar = function (numero1 = 0, numero2 = 0) {
    return numero1 + numero2; // Esta función retorna el resultado de la suma
}

function sumar2 (numero1 = 0, numero2 = 0) {
    return numero1 + numero2; // Esta función también retorna el resultado de la suma, pero se puede renombrar la variable 'numero1' y 'numero2' para mejorar la legibilidad
}

const sumar3 = (numero1 = 0, numero2 = 0) => numero1 + numero2; // Se puede usar la sintaxis arrow function para simplificar la función

const resultado = sumar(5, 10);
const resultado2 = sumar2(10, 20); // Se puede llamar a la función con un nombre diferente para mejorar la legibilidad y la claridad del código
const resultado3 = sumar3(20, 30); // Se puede llamar a la función con un nombre diferente para mejorar la legibilidad y la claridad del código

console.log(resultado); // Imprime: 15
console.log(resultado2); // Imprime: 30
console.log(resultado3); // Imprime: 50