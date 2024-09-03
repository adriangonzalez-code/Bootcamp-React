// Eventos del DOM - Submit
const formulario = document.querySelector('#formulario');


formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recarga de la página)

    const nombre = document.querySelector('#nombre').value;
    const password = document.querySelector('#password').value;

    if (nombre === '' || password === '') {
        alert('Todos los campos son obligatorios');
        return; // Salimos del evento para evitar que el formulario se envíe y que se recargue la página.
    } else {
        console.log('Formulario enviado');
        console.log(`Nombre: ${nombre}`);
        console.log(`Contraseña: ${password}`);
    }
});