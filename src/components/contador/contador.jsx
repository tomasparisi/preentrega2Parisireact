import { useState, useEffect } from "react";
import "./contador.css";
import ContadorUI from "./ContadorUI";


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
    <ContadorUI
    aumenta={aumenta}
    baja={baja}
    count={count}
    />
  );
}



export default Counter;