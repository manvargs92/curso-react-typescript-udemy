

/* Performance y múltiples async await */

const url = "https://jsonplaceholder.typicode.com/comments";
const url2= "https://jsonplaceholder.typicode.com/todos";
const url3= "https://jsonplaceholder.typicode.com/photos";

const consultarAPI = async () => {
    try {
        const inicio = performance.now(); // inicia la medición del performace

        // Realiza cada fetch hasta que el anterior termine
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        const response2 = await fetch(url2);
        const data2 = await response2.json();
        console.log(data2);

        const response3 = await fetch(url3);
        const data3 = await response3.json();
        console.log(data3);
        ///////////////////////////////////////////////////
        
        const fin = performance.now(); // finaliza la medición del performance

        console.log(`El resultado de la primera función es: ${fin - inicio} ms.`);
    } catch (error) {
        console.log(error.message);
    }
}

consultarAPI();

const consultarAPI2 = async () => {
    try {
        const inicio = performance.now(); // inicia la medición del performace

        const [response, response2, response3] = await Promise.all([fetch(url), fetch(url2), fetch(url3)]); // inicia todos los fetch al mismo tiempo, lo que mejora el performance

        const [data, data2, data3] = await Promise.all([response.json, response2.json, response3.json]);

        console.log(data);
        console.log(data2);
        console.log(data3);

        const fin = performance.now(); // finaliza la medición del performance

        console.log(`El resultado de la segunda función es: ${fin - inicio} ms.`);
    } catch (error) {
        console.log(error.message);
    }
}

consultarAPI2();