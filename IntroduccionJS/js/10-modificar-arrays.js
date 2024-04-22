
/* Modificar Arrays */
const tecnologias = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"];

console.table(tecnologias);

// // Agregar valores al arreglo cuando se sabe la extensión del arreglo
// tecnologias[4] = "Nest.js";

// // tecnologias[5] = "Nest.js2";

// // tecnologias[10] = "Nest.js3";

// console.table(tecnologias);

// // Agregar valores al final del arreglo cuando NO se sabe la extensión del arreglo
// tecnologias.push("Nueva tecnología"); // muta el arreglo original

// let nuevoArreglo = [...tecnologias, "Nest.js4"]; // no muta el arreglo original

// // Agregar valores al inicio del arreglo cuando NO se sabe la extensión del arreglo
// nuevoArreglo = ["Nest.js5", ...tecnologias]; // no muta el arreglo original

// // Eliminar el primer elemento de un arreglo
// tecnologias.shift(); // muta el arreglo original

// console.table(tecnologias);
// console.table(nuevoArreglo);

// Eliminar valores de un arreglo
let tecnologias2 = tecnologias.filter(function (tech) { // no muta el arreglo original
    if (tech !== "HTML") {
        return tech;
    }
});

tecnologias2 = tecnologias.map(function (tech) { // no muta el arreglo original
    if (tech === "Node.js") {
        return "Nest.js";
    } else {
        return tech;
    }
});

console.log(tecnologias2);