const saldo = 1000;
const pagar = 500;
const tarjeta = false;

// Usando If anidados
if (saldo > pagar) {
    console.log("Puedes pagar tu cuenta");

    if (tarjeta) {
        console.log("Puedes pagar tu cuenta");
    }
} else {
    console.log("No tienes suficiente saldo");
}

// Podemos simplificar este código con operadores lógicos
/**}
 * Logical OR y Logical AND
 * || Or - Al menos una condición se cumple
 * && And - Todas las condiciones se cumplen
 */

 if (saldo > pagar && tarjeta) {
    console.log("Puedes pagar tu cuenta");
} else {
    console.log("No tienes suficiente saldo o no tienes una tarjeta");
}