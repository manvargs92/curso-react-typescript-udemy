
/* Oprional Chaining */
// permite acceder a las propiedades de un objeto o llamar métodos sin tener que verificar si existen o no
const alumno = {
    nombre: "Ana",
    clase: "Programación 1",
    aprobado: true
}

console.log(alumno.examenes?.examen1); // si existe examenes muestra examen1, si no existe, ejecuta el código que viene después

console.log("Después de ALUMNO");


/* Nullish coalescing operator */
// retorna el valor que está del lado derecho cuando el valor del lado izq es nulo o undefined, en caso contrario, retorna el valor de la der
const pagina = null ?? 1;

console.log(pagina);

const pagina2 = 10 ?? 1;

console.log(pagina2);