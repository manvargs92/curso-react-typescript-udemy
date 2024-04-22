
/* Function declaration */

function sumar() {
    console.log(1 + 1);
}

function sumar2(numero1 = 0, numero2 = 0) { // parámetros por defecto
    console.log(numero1 + numero2);
}

sumar();
sumar2(100, 131);