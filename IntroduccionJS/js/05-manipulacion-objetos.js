
/* Objetos - Manipulación */
const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : false
}

// Evitar modificar el objeto de cualquier forma
// Object.freeze(producto);

// Evitar añadir o eliminar propiedades, pero sí se pueden modificar
// Object.seal(producto);

// Reescribir valores
producto.disponible = true;

// Agregar propiedades a un objeto
producto.imagen = "imagen.jpg";

// Eliminar propiedades de un objeto
delete producto.precio;



console.log(producto);