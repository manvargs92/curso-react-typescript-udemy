// export function sumar(n1, n2) {
function sumar(n1, n2) {
    return n1 + n2;
}

// export function restar(n1, n2) {
function restar(n1, n2) {
    return n1 - n2;
}

export { sumar, restar}; // lo mismo que ponerlo en cada función

/* Export default */
// solo puede haber uno por archivo
export default function multiplicar(n1, n2) {
    return n1 * n2;
}