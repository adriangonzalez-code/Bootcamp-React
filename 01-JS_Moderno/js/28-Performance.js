// Performance y multiple Async Await
const url = 'https://jsonplaceholder.typicode.com/comments';
const url2 = 'https://jsonplaceholder.typicode.com/todos';
const url3 = 'https://jsonplaceholder.typicode.com/photos';


// Esta función utiliza async/await para manejar la promesa de la fetch API. Async/await permite escribir código más limpio y fácil de leer. Debe anidarse dentro de una función async para usar await.
const consultarAPI = async () => {
    try {
        const inicio = performance.now();

        const response1 = await fetch(url);
        const response2 = await fetch(url2);
        const response3 = await fetch(url3);

        if (!response1.ok || !response2.ok || !response3.ok) {
            throw new Error(`HTTP error! status: ${response1.status}`);
        }
        const data = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();

        console.log(data);
        console.log(data2);
        console.log(data3);

        const fin = performance.now();

        console.log(`Primera funcion: Consulta finalizada en ${fin - inicio} milliseconds.`);
    } catch (error) {
        console.log('Error:', error.message);
    }
}

const consultarAPI2 = async () => {
    try {

        const inicio = performance.now();

        const [response, response2, response3] = await Promise.all([fetch(url), fetch(url2), fetch(url3)]);
        const [data1, data2, data3] = await Promise.all([response.json(), response2.json(), response3.json()]);

        console.log(data1);
        console.log(data2);
        console.log(data3);

        const fin = performance.now();

        console.log(`Segunda Funcion: Consulta finalizada en ${fin - inicio} milliseconds.`);
    } catch (error) {
        console.log('Error:', error.message);
    }
}


consultarAPI();
consultarAPI2();