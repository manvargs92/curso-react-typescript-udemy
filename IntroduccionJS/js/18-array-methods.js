
/* Array methods */
const tecnologias = ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS"];
const numeros = [10, 20, 30];

// Filter - filtra los elementos de un arreglo
const arrayConHTML = tecnologias.filter(tech => tech === "HTML");
const arraySinHTML = tecnologias.filter(tech => tech !== "HTML");

console.log(arrayConHTML);
console.log(arraySinHTML);

const resultadoFilter = numeros.filter(numero => numero !== 10);

console.log(resultadoFilter);

// Includes - revisa si existe un elemento en un arreglo
const resultadoIncludes = tecnologias.includes("CSS");

console.log(resultadoIncludes);

// Some - devuelce si al menos uno cumple una condición
const resultadoSome = numeros.some(numero => numero > 15);

console.log(resultadoSome);

// Find - devuelve el primer elemento que cumple una condición
const resultadoFind = numeros.find(numero => numero > 15);

console.log(resultadoFind);

// Every - retorna true o false si todos los elementos cumplen una condición
const resultadoEvery = numeros.every(numero => numero > 15);
console.log(resultadoEvery);

// Reduce - retorna un acumulado del total
const resultadoReduce = numeros.reduce((total, numero) => {
    // console.log(total);
    // console.log(numero);

    return total + numero;
}, 0);

console.log(resultadoReduce);