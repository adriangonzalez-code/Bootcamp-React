// Unir dos o mas objetos. El spread operator (...) es una manera de combinar las propiedades de un objeto a otro.
const producto = {
    nombre: 'Laptop',
    precio: 1200,
    disponible: false
}

const cliente = {
    nombre: 'Juan',
    premium: true
}

const compra = {
    total: 1200,
    producto
}

const carrito = {
    cantidad: 1,
    ...producto, // Copia los valores de producto en carrito, los tres puntos (...) son una sintaxis especial de ES6 para extraer propiedades de un objeto y luego pasarlos a un nuevo objeto. No crea un nuevo objeto, sino que combina las propiedades de ambos objetos en uno solo.
}

// En el ejemplo anterior, el objeto producto se agrega como un objeto adicional al objeto compra, mientras en el carrito, se utiliza el spread operator para agregar las propiedades del producto.

console.log(compra); // Imprime: { total: 120}
console.log(carrito); // Imprime: { cantidad: 1, nombre: 'Laptop', precio: 1200, disponible: false }

const nuevoObjeto = {
    producto: {...producto},
    cliente: {...cliente}
}

const otroObjeto = {
    producto,
    cliente
}

console.log(nuevoObjeto); // Imprime: { producto: { nombre : 'Laptop', precio: 1200, disponible: false }, cliente : { nombre: 'Juan', premium: true } }
console.log(otroObjeto); // Es el mismo resultado que en el anterior ejemplo.

const nuevoObjeto2 =Object.assign(producto, cliente); // También se puede utilizar Object.assign() para combinar objetos.
console.log(nuevoObjeto2); // Imprime: { nombre : 'Juan', premium: true, precio: 1200, disponible: false }