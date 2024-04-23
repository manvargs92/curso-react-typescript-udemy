

/* Fetch API con promises */
const url = "https://jsonplaceholder.typicode.com/comments";

fetch(url)
    .then((respuesta) => {
        // console.log(respuesta);

        if (respuesta.ok) {
            return respuesta.json();
        }
        throw new Error("Hubo un error...");
    })
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => { // muestra error si es un error de red
        console.log(error.message);
    });