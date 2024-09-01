// Ternario
const auth = true;
const saldo = 1000;
const pagar = 500;
const tarjeta = true;

if (auth) {
    console.log("Usuario autenticado");
} else {
    console.log("Usuario no autenticado, ir a Login");
}

// Ternario
auth ? console.log("Usuario autenticado") : console.log("Usuario no autenticado, ir a Login");

// Ternario con condiciones complejas
saldo > pagar ?
    console.log("Puedes pagar tu cuenta") :
    console.log("No tienes suficiente saldo");

// Ternario anidado
saldo > pagar ?
    console.log("Puedes pagar tu cuenta") :
    tarjeta ?
        console.log("Usa tu tarjeta para pagar") :
    console.log("No puedes pagar");