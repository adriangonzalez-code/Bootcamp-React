// Funciones - Function Expression

sumar(5, 10); // Marca error, porque no se ha declarado la función antes de utilizarla.

const sumar = function (numero1 = 0, numero2 = 0) {
    console.log(numero1 + numero2);
}

/*function sumar2(numero1 = 0, numero2 = 0) {
    console.log(numero1 + numero2);
}*/

sumar(5, 10); // Imprime: 15