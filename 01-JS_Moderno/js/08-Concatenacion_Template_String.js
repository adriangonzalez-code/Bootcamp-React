// Template String y Concatenación
const producto = 'Laptop de 15"';
const precio = 1200;
const marca = 'Apple';

console.log('El producto es: ' + producto + ', su precio es: $' + precio + ' dólares, y la marca es: '+ marca); // Podemos concatenar con el operador '+'

// Otra forma de concatenar con Template String, que consiste en usar las comillas invertidas (` `) para encerrar el código y el uso de `${}` para insertar variables. Ejemplo anterior se puede reescribir como:
console.log(`El producto es: ${producto}, su precio es: $${precio} dólares, y la marca es: ${marca}`);

