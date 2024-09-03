// Eventos del DOM - Submit
const formulario = document.querySelector('#formulario');


formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recarga de la página)

    const nombre = document.querySelector('#nombre').value;
    const password = document.querySelector('#password').value;

    // Prevenir nuevas alertas
    const alertaPrevia = document.querySelector('.alerta');
    alertaPrevia?.remove(); // Eliminamos la alerta previa si existe para no duplicarla en caso de que se envíe el formulario varias veces seguidas

    const alerta = document.createElement('DIV');
    alerta.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black'); // Añadimos la clase de alerta y el estilo de error

    if (nombre === '' || password === '') {
        alerta.textContent = 'Todos los campos son obligatorios';
        alerta.classList.add('bg-red-500'); // Añadimos la clase
    } else {
        alerta.textContent = 'Todo, bien, Formulario enviado';
        alerta.classList.add('bg-green-500'); // Añadimos la clase
    }

    formulario.appendChild(alerta); // Añadimos la alerta al formulario

    setTimeout(() => {
        alerta.remove(); // Eliminamos la alerta después de 3 segundos
    }, 3000);
});