
/* DOM - eventos en submit */
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.querySelector("#nombre");
    const password = document.querySelector("#password");

    if (nombre.value == "" || password.value == "") {
        console.log("Todos los campos son obligatorios");
    } else {
        console.log("Enviando formulario...");
        console.log("Iniciando sesión...");
    }

    console.log(nombre.value);
    console.log(password.value);

});