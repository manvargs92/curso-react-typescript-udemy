
/* DOM - eventos con click */
const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion a");

heading.addEventListener("click", () => {
    heading.textContent = "Diste click...";
});

enlaces.forEach( enlace => {
    enlace.addEventListener("click", () => {
        console.log("Diste clic en el enlace...");
    });
});

enlaces.forEach( enlace => {
    enlace.addEventListener("click", (evento) => {
        evento.preventDefault();
        evento.target.textContent = "Diste clic..."
    });
});