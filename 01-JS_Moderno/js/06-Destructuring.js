// Destructuring de dos o mas objetos
const producto = {
    nombre: 'Laptop',
    precio: 1200,
    disponible: false
}

const cliente = {
    nombre: 'Juan',
    premium: true,
    direccion: {
        calle: 'Av. Principal'
    }
}

const { nombre } = producto;
const { nombre: nombreCliente, direccion: { calle} } = cliente; // Aunque el nombre sea 'nombre', lo llamamos 'nombreCliente' para diferenciarlo porque de lo contrario marcaría error.

console.log(nombre); // Imprime: "Laptop"
console.log(nombreCliente); // Imprime: "Juan"
console.log(calle); // Imprime: "Av. Principal"