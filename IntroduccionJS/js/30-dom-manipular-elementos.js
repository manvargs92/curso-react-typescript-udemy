
/* DOM - manupular elementos */
const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion a");
const inputNombre = document.querySelector("#nombre");

// agregar atributos
heading.textContent = "Un nuevo heading...";
heading.id = "un-nuevo-id";
inputNombre.value = "Un Nuevo Valor...";
inputNombre.dataset.nombre = "input";

enlaces[0].textContent = "Nuevo Enlace";

// remover atributos
heading.removeAttribute("class");