import { useState, useEffect } from "react"; // importar el hook para manejar el state
import Header from "./components/Header" // importar un componente
import Guitar from "./components/Guitar"
import { db } from "./data/db"

function App() {

    // // State
    // // [state, funcion-cambiar-state] = valor-inicial
    // const [auth, setAuth] = useState(false);
    // const [total, setTotal] = useState(0);
    // const [cart, setCart] = useState([]);
    // /**
    //  * Reglas de los hooks:
    //  * 1. Se colocan en la parte superior de loss componentes
    //  * 2. No se deben colocar dentro de condicionales, funciones, tampoco después de un return
    //  */

    // // arreglo de dependencias
    // useEffect(() => {
    //     console.log("Componente listo o escuchando por auth...");
    // }, [auth]); // [] - se ejecutará cuando el componente esté listo. [dep1, dep2] - se ejecutará cada vez que cambie alguna de las dependencias


    // setTimeout(() => {
    //     setAuth(true);
    // }, 3000);

    const [data, setData] = useState(db);

    

  return (
    <>

      <Header />

      <main className="container-xl mt-5">
          <h2 className="text-center">Nuestra Colección</h2>

          <div className="row mt-5">

            <Guitar />
            <Guitar />
            <Guitar />
            <Guitar />
            <Guitar />
            <Guitar />

          </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
          <div className="container-xl">
              <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
          </div>
      </footer>
    </>
  )
}

export default App
