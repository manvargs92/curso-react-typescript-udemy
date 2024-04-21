
/* Objetos */
// un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre o clave y un valor
const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : false
}

console.log(producto);
console.log(typeof(producto));
console.table(producto);

// acceder a las propiedades
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.autenticado);

/* Destructuring */
// const nombre = producto.nombre; // forma antigua
const { nombre, precio, disponible } = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);

/* Obect literal enhancement */
const autenticado = true;
const usuario = "Toñito";

// const nuevoObjeto = {
//     autenticado: autenticado,
//     usuario: usuario
// }
const nuevoObjeto = { // cuando la llave y el valor se llaman igual, solo tienes que pasar uno
    autenticado,
    usuario
}

console.log(nuevoObjeto);