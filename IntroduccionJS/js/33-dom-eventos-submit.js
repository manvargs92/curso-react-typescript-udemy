
/* DOM - eventos en submit */
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.querySelector("#nombre");
    const password = document.querySelector("#password");

    // prevenir nuevas alertas
    const alertaPrevia = document.querySelector(".alerta");
    // if (alertaPrevia) {
    //     alertaPrevia.remove();
    // }
    alertaPrevia?.remove(); // con optional chaining

    const alerta = document.createElement("DIV");
    alerta.classList.add("alerta", "text-white", "uppercase", "text-sm", "text-center", "p-2", "font-black");

    if (nombre.value == "" || password.value == "") {
        console.log("Todos los campos son obligatorios");
        alerta.textContent = "Todos los campos son obligatorios";
        alerta.classList.add("bg-red-500");
    } else {
        console.log("Enviando formulario...");
        console.log("Iniciando sesión...");
        alerta.textContent = "Iniciando sesión...";
        alerta.classList.add("bg-green-500");
    }
    setTimeout(() => {
        alerta.remove();
    }, 3000);

    console.log(nombre.value);
    console.log(password.value);

    console.log(alerta);

    formulario.appendChild(alerta);

});