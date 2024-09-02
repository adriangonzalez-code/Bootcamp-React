// Fetch API con Promises
const url = 'https://jsonplaceholder.typicode.com/comments';

fetch(url)
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then((data) => {
        console.log(data);
    })
    .catch(error => {
        console.log('Error:', error.message);
    });