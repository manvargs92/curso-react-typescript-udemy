import { Fragment } from "react" // usar <Fragment> para no tener divs innecesarios como etiqueta padre
import React from "react"; // usar <React.Fragment> para no tener divs innecesarios como etiqueta padre

// export default function MiComponente() { // exportar componente en una sola línea
function MiComponente() {
    
    const total = 100;

    return (
        <Fragment>
            <p>Total a pagar: {total}</p>
            <p>Después</p>
        </Fragment>
    );
}

/* Importando React from react */
// function MiComponente() {
    
//     const total = 100;

//     return (
//         <React.Fragment>
//             <p>Total a pagar: {total}</p>
//             <p>Después</p>
//         </React.Fragment>
//     );
// }

/* Otra forma pero sin importar nada */
// function MiComponente() {
    
//     const total = 100;

//     return (
//         <>
//             <p>Total a pagar: {total}</p>
//             <p>Después</p>
//         </>
//     );
// }

export default MiComponente;