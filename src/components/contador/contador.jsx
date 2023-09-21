import { useState, useEffect } from "react";
import "./contador.css"

function Counter() {
 
  const [count, setCount] = useState(1);

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
      <button onClick={aumenta}>+</button>
      <button onClick={baja}>-</button>
      
    </div>
  );
}



export default Counter;