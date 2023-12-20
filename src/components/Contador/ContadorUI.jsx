import "./contador.css"

function ContadorUI({count, baja, aumenta}) {

  return (
    <div className="Count">
        <p className="contador">{count}</p>
      <button onClick={baja}>-</button>
      <button onClick={aumenta}>+</button>
      
    </div>
  );
}



export default ContadorUI;