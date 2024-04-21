
/* Tipos de datos */
// Undefined
let cliente;

console.log(cliente);
console.log(typeof(cliente));

// Strings o cadenas de texto
const alumno = "Juanito";

console.log(alumno);
console.log(typeof(alumno));

const producto = 'Monitor 49 pulgadas';
console.log(producto);
console.log(typeof(producto));

// Numbers
const numero = 20.20;
const numero2 = 30;
const numero3 = -100;
const numero4 = "20";

console.log(typeof(numero));
console.log(typeof(numero2));
console.log(typeof(numero3));
console.log(typeof(numero4));

// BigInt
const numeroGrande = BigInt(165044816056863012309875120328786032);
console.log(typeof(numeroGrande));

// Boolean
const descuento = true;
console.log(typeof(descuento));

// Null
const valorNulo = null;
console.log(valorNulo);

// Symbol
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);

console.log(primerSymbol);

console.log(primerSymbol == segundoSymbol);