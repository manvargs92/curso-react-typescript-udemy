
/* Funciones que retornan valores */
const sumar = function (numero1 = 0, numero2 = 0) {

    return numero1 + numero2;

}

function sumar2(numero1 = 0, numero2 = 0) {

    return numero1 + numero2;

}

const sumar3 = (numero1 = 0, numero2 = 0) => numero1 + numero2;

const sumar4 = (numero1 = 0, numero2 = 0) => {
    return numero1 + numero2;
}

const resultado = sumar(10, 20);

console.log(resultado);