
/* Operador ternario */
const auth = true;
const saldo = 1000;
const pagar = 1200;
const tarjeta = true;

if (auth) {
    console.log("Usuario autenticado");
} else {
    console.log("No autenticado, ir al Login");
}

// (condición) ? (lo que se ejecuta si s cumple) : (lo que se ejecuta si no se cumple)
auth ? console.log("Usuario autenticado") : console.log("No autenticado, ir al Login");

saldo > pagar ? console.log("Sí puedes pagar") : console.log("No puedes pagar");

// ternario anidado
saldo > pagar ?
    console.log("Sí puedes pagar") :
    tarjeta ?
        console.log("Puedes pagar con tarjeta") :
        console.log("No puedes pagar");

saldo > pagar || tarjeta ?
    console.log("Sí puedes pagar") :
    console.log("No puedes pagar");