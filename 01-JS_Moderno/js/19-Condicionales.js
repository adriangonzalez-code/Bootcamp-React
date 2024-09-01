// Condicionales

const disponible = 4000;
const retirar = 200;
const auth = true;

if (auth) {
    // Se cumple la condición de autenticación
    console.log('Acceso al sistema');

    if (disponible >= retirar) {
        console.log(`Si puedes retirar ${retirar} pesos`);
    } else {
        console.log(`No puedes retirar ${retirar}, tu saldo es insuficiente`);
    }
} else {
    // No se cumple la condición de autenticación
    console.log('No tienes acceso al sistema');
}

/**
 * > Mayor que
 * < Menor que
 * == Igual que
 * === Igual que (estricto)
 * !== Diferente que
 * >= Mayor o igual que
 * <= Menor o igual que
 */