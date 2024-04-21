
/* Destructuring de dos o más objetos */
const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : false
}

const cliente = {
    nombre: "Luis",
    premium: true,
    direccion: {
        calle: "Calle México"
    }
}

const { nombre } = producto;
const { nombre: nombreCliente } = cliente; // crea la variable nombre, pero la renombra como nombreCliente

// const { direccion: calle } = cliente; // regresará el objeto dentro del objeto
const { direccion: { calle } } = cliente; // regresará el valor de la propiedad calle

console.log(nombre);
console.log(nombreCliente);
console.log(calle);