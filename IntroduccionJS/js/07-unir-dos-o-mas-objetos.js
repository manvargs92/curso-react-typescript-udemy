
/* Unir dos o mas objetos */
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

// Spread operator
const carrito = {
    cantidad: 1,
    producto, // coloca el OBJETO dentro de otro objeto
    ...producto // coloca el CONTENIDO de un objeto dento de otro objeto
}

console.log(carrito);

// uniendo dos objetos
const nuevoObjeto = {
    producto: {...producto},
    cliente: {...cliente}
}

// usando el Object Literal Enhancement
const nuevoObjeto2 = {
    producto,
    cliente
}

// uniendo con Object.assign
const nuevoObjeto3 = Object.assign(producto, cliente);

console.log(nuevoObjeto);
console.log(nuevoObjeto2);
console.log(nuevoObjeto3);