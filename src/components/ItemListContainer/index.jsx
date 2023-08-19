import { useState, useEffect } from "react";
import "./styles.css";

function ItemListContainer({ greetings }) {
  const [saludo, setSaludo] = useState(greetings);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log(`la cuenta es: ${count}`);
  }, [count]);
  //useEffect se renderiza si tiene el arreglo de dependencias, en esta caso si no pongo [count], no habra en cambios en la consola
  // Las llamdas APIs tiene que estar dentro de los useEffect

  function hide() {
    setShow(false);
  }

  function aumenta() {
    setCount(count + 1);
  }

  function cambio() {
    setSaludo(7);
  }

  
  return (
    <div className="item-list-container">
      <p>{saludo}</p>
      <button onClick={cambio}>calcular stock</button>
      <button onClick={aumenta}>Aumentar + 1</button>
      <p>{count}</p>
      {show && <Im/>}
      <button onClick={hide}>elimine img</button>
    </div>
  );
}

function Im() {
  return (
    <div>
      <p>AAAAAAAAA</p>
    </div>
  );
}

export default ItemListContainer;