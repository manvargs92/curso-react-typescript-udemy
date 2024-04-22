
/* Template Strings y Concatenación */
const producto = "Tablet de 12 Pulgadas";
const precio = 400;
const marca = "Orange";

// formas antiguas de concatenar
console.log("El producto es: " + producto);
console.log("El producto es: ", producto);

console.log(producto + " $" + precio + " Dólares, marca: " + marca);

// usando los template strings
console.log(`El producto es: ${producto}, $${precio} Dólares, marca: ${marca}`);