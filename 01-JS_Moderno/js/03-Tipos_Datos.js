// Tipos de datos en JavaScript

/*
    Esto es un comentario de
    varias líneas.
 */

// Undefined: Es el valor que una variable todavía no tiene un valor inicial.
let miVariable;

console.log(miVariable); // Esto daría "undefined" porque no se ha inicializado la variable.
console.log(typeof miVariable); // Esto daría "undefined"

// String: Este tipo de dato representa una cadena de caracteres.
// Se pueden encerrar dentro de comillas simples o dobles.
const alumno = "John Doe";
console.log(alumno); // Esto imprimiría "John Doe Smith"
console.log(typeof alumno); // Esto daría "string"

const producto = 'iPhone 12'; // Se pueden usar comillas simples o dobles para el contenido de la cadena.
console.log(producto); // Esto imprimiría "iPhone 12"

// Number: Este tipo de dato representa un número entero o decimal.
const numero1 = 10;
const  numero2 = 3.14;
const numero3 = -5;
const numero4 = "134"; // Aunque es un "number" pero está dentro de comillas, es considerado un String.
const numero5 = numero1 + numero4; // Aquí se convierte el número de string a número.

console.log(typeof numero1); // Esto daría "number"
console.log(typeof numero2); // Esto daría "number"
console.log(typeof numero3); // Esto daría "number"
console.log(typeof numero4); // Esto daría "String"
console.log(numero5); // Esto imprimiría 10134, es decir, 10 + "134"
console.log(typeof numero5); // Esto daría "String"

// BigInt: Este tipo de dato representa un número entero muy grande.
const numeroGrande = BigInt(1234567890123456788178674428464543443);
console.log(typeof numeroGrande); // Esto daría "bigint"

// Boolean: Este tipo de dato representa un valor booleano (true o false).
const esVerdadero = "true"; // Aunque es un valor booleano pero está dentro de comillas, es considerado un String.
const descuento = true;
const esFalso = false;

console.log(typeof esVerdadero); // Esto daría "string"
console.log(typeof descuento); // Esto daría "boolean"
console.log(typeof esFalso); // Esto daría "boolean"

// Null: Este tipo de dato representa la ausencia de un valor.
const algunValor = null; // Null es nada
let precio; // Undefined es una valor que no tiene un valor inicial. La diferencia entre null y undefined es que null es un valor que representa la ausencia de un valor, mientras que undefined es un valor que no tiene un valor inicial.

console.log(algunValor); // Esto imprimiría "null"
console.log(precio); // Esto imprimiría "undefined"
console.log(typeof algunValor); // Esto daría "object"
console.log(typeof precio); // Esto daría "undefined"

// Symbol: Este tipo de dato representa un identificador único único. Sirve para identificar propiedades únicas en objetos.
const primerSymbol = Symbol("Primer simbolo");
const segundoSymbol = Symbol(30);
const tercerSymbol = Symbol("Primer simbolo");
const cuartoSymbol = Symbol(30);

console.log(primerSymbol); // Esto imprimiría "Symbol(Primer simbolo)"
console.log(typeof primerSymbol); // Esto daría "symbol"
console.log(segundoSymbol); // Esto imprimiría "Symbol(30)"
console.log(typeof segundoSymbol); // Esto daría "symbol"

console.log(primerSymbol === segundoSymbol); // Esto imprimiría false,
console.log(primerSymbol === tercerSymbol); // Esto imprimiría false, los simbolos son iguales, pero son objetos diferentes.
console.log(segundoSymbol === cuartoSymbol); // Esto imprimiría false, los simbolos son iguales, pero son objetos diferentes.