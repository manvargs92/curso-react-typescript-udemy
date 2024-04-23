
/* Evaluación de corto circuito && */
const auth = true; // es true o false

if (40) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

const user = {} // esto es un truthy

user && console.log("Usuario autenticado");