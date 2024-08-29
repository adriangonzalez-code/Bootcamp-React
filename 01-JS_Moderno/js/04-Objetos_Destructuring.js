// Objetos: un objeto es una colección de propiedades (llaves y valores) que se agrupan en un solo lugar.

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: false,
};

console.log(producto); // Esto imprimiría: { nombre: 'Tablet', precio: 300, disponible: false }
console.log(typeof producto); // Esto imprimiría: "object"
console.table(producto); // Esto imprimiría una tabla con las propiedades y valores del objeto

// Para acceder a las propiedades de un objeto, se invoca al nombre del objeto seguido de un punto y el nombre de la propiedad
console.log(producto.nombre); // Esto imprimiría: "Tablet"
console.log(producto.autenticado); // Esto imprimiría: undefined (porque no está definida)

// Podemos extraer la propiedad de un objeto y almacenar su valor en una variable
const nombre = producto.nombre;
console.log(nombre); // Esto imprimiría: "Tablet"

// Destructuring: Consiste en extraer valores de objetos de manera más fácil y limpia, su sintaxis es entre llaves poner los nombres de las propiedades que deseamos extraer de un objeto,
const { nombre: nombreProducto, precio } = producto; // Aquí extraemos el nombre y el precio del objeto y los almacenamos en variables
console.log(nombreProducto); // Esto imprimiría: "Tablet"
console.log(precio); // Esto imprimiría: 300

// Sin destructuring tenemos que definir cada variable que deseamos extraer
const nombreProductoSinDestructuring = producto.nombre;
console.log(nombreProductoSinDestructuring); // Esto imprimiría: "Tablet"

// Object Literal Enhacement: Consiste en que se pueden omitir la asignación de variables en las propiedades de un objeto, esto es útil cuando las variables tienen el mismo nombre que las propiedades
const autenticado = true;
const usuario = "Juan";

const nuevoObjeto = {
    autenticado, // Se puede omitir el nombre de la variable y usar la misma en la clave y el valor, esto siempre que la variable tenga el mismo nombre que la propiedad
    usuario, // Se puede omitir el nombre de la variable y usar la misma en la clave y el valor, esto siempre que la variable tenga el mismo nombre que la propiedad
}

console.log(nuevoObjeto); // Esto imprimiría: { autenticado: true, usuario: "Juan" }