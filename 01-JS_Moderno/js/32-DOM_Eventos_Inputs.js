// Eventos del DOM - Inputs
const inputNombre = document.querySelector('#nombre');

inputNombre.addEventListener('input', (e) => {
    console.log(e.target.value); // Imprime el valor actual del input
});

const inputPassword = document.querySelector('#password');

inputPassword.addEventListener('input', functionPassword);

function functionPassword() {
    inputPassword.type = "text";
    console.log(this.value); // Imprime el valor actual del input

    setTimeout(() => {
        inputPassword.type = "password";
    }, 300);
}