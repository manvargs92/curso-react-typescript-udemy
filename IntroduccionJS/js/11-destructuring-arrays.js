
/* Destructuring de arreglos */
const tecnologias = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"];

const react = tecnologias[3];

console.log(react);

// usando el destructuring de arreglos
const [html, css, nodejs] = tecnologias; // extrae los valores de acuerdo a su posición en el arreglo

console.log(html);
console.log(css);
console.log(nodejs);

const [, , , reactjs] = tecnologias; // extrare solo el valor de la posición deseada, una coma por cada elemento

console.log(reactjs);