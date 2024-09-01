// Evaluación de corto circuito (Short-Circuit Evaluation), sirve para evitar la evaluación de expresiones en caso de que la primera se evalua como verdadera

const auth = true;

if (auth) {
    console.log('Truthy');
} else {
    console.log('Falsy');
}

const user = {};

auth && console.log("Usuario autenticado"); // Se ejecuta la línea de código debido a que auth es verdadero