// Manipulación de Objetos

const producto = {
    nombre: 'Laptop',
    precio: 1200,
    disponible: false
}

console.log(producto); // Imprime: { nombre: 'Laptop', precio : 1200, disponible: false }

// Para manipular propiedades de un objeto, podemos usar la notación de punto
producto.disponible = true; // Modificamos la propiedad "disponible"

console.log(producto); // Imprime: { nombre: 'Laptop', precio : 1200, disponible: true }, a pesar que el objeto está declarado const, se puede modificar su propiedad, pero no su referencia

producto.imagen = 'laptop.jpg'; // Cuando accedemos a una propiedad que no existe, se crea automáticamente

console.log(producto); // Imprime: { nombre: 'Laptop', precio : 1200, disponible: true, imagen: 'laptop.jpg' }

delete producto.precio; // Eliminamos la propiedad "precio"
console.log(producto); // Imprime: { nombre: 'Laptop', disponible : true, imagen: 'laptop.jpg' }

// PAra que un objeto no sea modificable, podemos usar Object.freeze()
Object.freeze(producto);

console.log(producto); // Imprime: { nombre: 'Laptop', disponible : true, imagen: 'laptop.jpg'}

// Si intentamos modificar una propiedad de un objeto con Object.freeze(), no hará efecto
producto.disponible = false;
console.log(producto); // Imprime: { nombre: 'Laptop', disponible : true, imagen: 'laptop.jpg'}

Object.seal(producto); // Con Object.seal() podemos congelar un objeto y evitar la creación de nuevas propiedades o eliminarlas, pero podemos modificar las existentes
producto.nombre = 'Notebook'; //
console.log(producto); // Imprime: { nombre: 'Notebook', disponible : true, imagen: 'laptop.jpg'}