const numero1 = 20;
const numero2 = "20";

/**
 * == Comparador no estricto
 * === Comparador estricto
 */

console.log(typeof numero1); // number
console.log(typeof numero2); // string

if (numero1 == numero2) {
    console.log("Los números son iguales (==)");
} else {
    console.log("Los números no son iguales (==)");
}

if (numero1 === numero2) {
    console.log("Los números son iguales (===)");
} else {
    console.log("Los números no son iguales (===)");
}