

/* DOM - eventos en inputs */
const inputNombre = document.querySelector("#nombre");

inputNombre.addEventListener("input", (evento) => {
    console.log(evento.target.value);
});

const inputPassword = document.querySelector("#password");
inputPassword.addEventListener("input", functionPassword);

function functionPassword() {
    inputPassword.type = "text";

    setTimeout(() => {
        inputPassword.type = "password";
    }, 300);
}