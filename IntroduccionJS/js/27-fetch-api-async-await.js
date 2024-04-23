
/* Fetch API con Async Await */
const url = "https://jsonplaceholder.typicode.com/comments";

// const consultarAPI = () => {
//     fetch(url)
//         .then((respuesta) => {
//             if (respuesta.ok) {
//                 return respuesta.json();
//                 }
//                 throw new Error("Hubo un error...");
//             })
//         .then(resultado => console.log(resultado))
//         .catch(error => console.log(error.message));
// }

const consultarAPI = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Hubo un error...");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

consultarAPI();