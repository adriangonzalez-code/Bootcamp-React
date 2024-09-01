// Function Declaration

function sumar () { // La sintaxis correcta para declarar una función en JavaScript es: function nombreFuncion() {... }
    console.log(5 + 5);
}

function sumar2() {
    console.log(10 + 10);
}

function sumar3(numero) { // Las funciones pueden tener parámetros, en este caso, numero.
    console.log(numero);
}

function sumar4(numero1, numero2) { // Las funciones pueden tener varios parámetros. En este caso, numero1 y numero2. Los parámetros se separan con comas.
    console.log(numero1 + numero2);
}

function sumar5(numero1 = 10, numero2 = 10) { // Las funciones también pueden tener parámetros con valores por defecto. En este caso, numero 1 y numero2 toman el valor 10 por defecto.
    console.log(numero1);
    console.log(numero2);
    console.log(numero1 + numero2);
}

sumar(); // Output: 10
sumar2(); // Output: 20
sumar3(20); // Output: 20
sumar4(5, 5); // Output: 10
sumar4(5); // Output: NaN (Not a Number)
sumar5(); // Output: 10, 10, 20