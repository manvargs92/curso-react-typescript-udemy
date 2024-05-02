import { useState, useEffect } from "react"; // importar el hook para manejar el state
import Header from "./components/Header" // importar un componente
import Guitar from "./components/Guitar"
import { db } from "./data/db"

function App() {

  // // State
  // // [state, funcion-cambiar-state] = valor-inicial
  // const [auth, setAuth] = useState(false);
  // const [total, setTotal] = useState(0);
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

  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart"); // obtiene el carrito de localStorage
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }

  // const [data, setData] = useState(db);
  const [data] = useState(db); // eliminar funciones que nunca se utilizan

  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useState(initialCart); // ejecuta al inicio initialCart

  const MIN_ITEMS = 1;
  const MAX_ITEMS = 5;

  useEffect(() => { // similar a watch() en VueJS
    /* localStorage no se pone como función a parte ya que el state de react es asíncrono y se mandará allamar
    la función localStorage antes de que haya algo en el carrito, provocando que se guarde un arreglo vacío */
    localStorage.setItem("cart", JSON.stringify(cart)); // (identificador de lo que quieres almacenar, lo que deseas almacenar) - solo lamacena strings
  }, [cart]); // se ejecutará automáticamente cada vez que cart cambie, no hay que  mandarlo a llamar;

  function addToCart(item) {
    const itemExist = cart.findIndex(tempGuitar => tempGuitar.id === item.id); // si existe retorna la posición; si no existe retorna -1
    console.log(itemExist);

    if (itemExist >= 0) { // significa que el elemento existe en el carrito
      console.log("Ya existe...");
      if (cart[itemExist].quantity >= MAX_ITEMS) return // para que agrege más elementos del  maximo al hacer clic en "Agregar al carrito"
      // cart[itemExist].quantity++; // no se debe hacer esto ya que se modifica directamente el state
      const updatedCart = [...cart];
      updatedCart[itemExist].quantity++;
      setCart(updatedCart);
    } else {
      console.log("No existe, agregando...");
      item.quantity = 1;
      // setCart(prevCart => [...prevCart, item]);
      setCart([...cart, item]);
    }
  }

  function removeFromCart(id) {
    console.log("Eliminando...", id);

    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id)); // conserva las guitarras que no queremos eliminar
  }

  function increaseQuantity(id) {
    console.log("Incrementando...", id);

    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item, // copia del elemento con todas sus propiedades
          quantity: item.quantity + 1
        }
      }

      return item; // mantener el resto de los productos a los cuales no les estoy dando clic en incrementar
    });

    setCart(updatedCart);
  }

  function decreaseQuantity(id) {
    console.log("Decremendando...", id);

    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }

      return item;
    });

    setCart(updatedCart);
  }

  function clearCart() {
    setCart([]); // setea un arreglo vacío para limpiar el carrito de compras
  }

  return (
    <>

      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          { // las llaves indican que es código de JS
            data.map((guitar) => (
              <Guitar
                key={guitar.id} // Siempre al iterar hay que pasar un identificador único, ya sea un id, un name, etc, siempre que sean únicos
                // price={100} // nombre-prop={valor-que-se-le-va-a-pasar-al-componente}
                // auth={true}

                guitar={guitar}
                // cart={cart}
                setCart={setCart}
                addToCart={addToCart}
              />
            ))
          }

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
