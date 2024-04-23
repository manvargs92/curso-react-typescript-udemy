
/* Logical OR y logical AND */
const saldo = 1000;
const pagar = 1200;
const tarjeta = true;

/**
    || OR - al menos una condición se cumpla
    && AND - todas se cumplan
 */

if (saldo > pagar || tarjeta) {
    console.log("Puedes pagar");
} else {
    console.log("No puedes pagar");
}

if (saldo > pagar && tarjeta) {
    console.log("Puedes pagar");
} else {
    console.log("No puedes pagar");
}