
/* Condicionales */
const disponible = 4000;
const retirar = 200;

const auth = true;

if (auth) {
    // Se cumple ls condición
    console.log("Acceso al sistema...");
} else {
    // No se cumple la condición
    console.log("No tienes permiso, inicia sesión");
}

if (disponible >= retirar) {
    console.log("Sí puedes retirar");
} else {
    console.log("Saldo insuficiente");
}