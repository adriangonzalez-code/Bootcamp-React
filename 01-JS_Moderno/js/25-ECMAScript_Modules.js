import multi, { sumar as funcionSumar, restar } from './funciones.js';

const resultado = funcionSumar(5, 10);
const restaResultado = restar(15, 5);
const multiplicacionResultado = multi(5, 10);

console.log(resultado);
console.log(restaResultado);
console.log(multiplicacionResultado);