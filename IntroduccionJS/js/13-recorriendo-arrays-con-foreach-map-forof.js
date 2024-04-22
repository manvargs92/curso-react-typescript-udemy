
const tecnologias = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"];

/* Recorriendo arrays con foreach */
tecnologias.forEach(function (tech) {
    console.log(tech);   
});

/* Recorriendo arrays con map */
const arrayMap = tecnologias.map(function (tech) { // map genera un nuevo arreglo
    return tech;   
});

console.log(arrayMap);

/* Recorriendo arrays con for of */
for (let tech of tecnologias) {
    console.log(tech);
}