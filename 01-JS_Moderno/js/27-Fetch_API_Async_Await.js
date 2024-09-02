// Fetch API con Promises
const url = 'https://jsonplaceholder.typicode.com/comments';


// Esta función utiliza async/await para manejar la promesa de la fetch API. Async/await permite escribir código más limpio y fácil de leer. Debe anidarse dentro de una función async para usar await.
const consultarAPI = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error:', error.message);
    }
}

consultarAPI();