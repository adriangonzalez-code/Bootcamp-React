// Eventos del DOM - clic
const heading = document.querySelector('.heading');

heading.addEventListener('mouseenter', () => {
    heading.textContent = 'Has hecho click en el encabezado!';
});

heading.addEventListener('mouseleave', () => {
    heading.textContent = 'Saliendo';
});

const enlaces = document.querySelectorAll('.navegacion a');

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault(); // Previene el comportamiento normal (por defecto o default) del enlace (abre en una nueva pestaña)
        console.log('Has clicado en:', e.target.textContent);

        e.target.textContent = 'Has visitado '+ e.target.textContent;
    });
});