
/* Introducción a ECMAScript */
import { sumar, restar as funcionRestar } from "./funciones.js"; // as - para poner aliases

const resultado = sumar(20, 10);

const resultado2 = funcionRestar(30, 10);

console.log(resultado);
console.log(resultado2);

// import hola, { multiplicar } from "./funciones.js";

// const resultado3 = hola(20, 50);

// console.log(resultado3);