import { useState, useEffect } from "react";
import "./contador.css"

function Counter({count, setCount}) {

  useEffect(() => {
  }, [count]);

  function aumenta() {
    setCount(count + 1);
  }
  function baja() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  return (
    <div className="Count">
        <p className="contador">{count}</p>
      <button onClick={baja}>-</button>
      <button onClick={aumenta}>+</button>
      
    </div>
  );
}



export default Counter;