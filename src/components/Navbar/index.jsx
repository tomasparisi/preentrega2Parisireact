import CartWidget from "./CartWidget";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <button>Inicio</button>
        <button>Tienda</button>
        <button>Ubicacion</button>
        <button>Acerca de nosotros</button>
      </div>

      <CartWidget />
    </nav>
  );
}

export default Navbar;