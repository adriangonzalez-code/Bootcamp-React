// Las const son como las let pero son imutables, no pueden ser reasignadas
const cliente = "Adrian";
cliente = 38; // Esto daría un error porque las constantes no se pueden modificar

const precio; // Esto también daría un error porque las constantes no pueden ser no inicializadas, es decir, deben tener un valor inicial

console.log(cliente);