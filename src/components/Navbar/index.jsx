import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <Link className="li" to="/">
          Home
        </Link>
        <Link className="li" to="product/Notebook">
          Notebook
        </Link>
        <Link className="li" to="/product/Desktop">
          Pc escritorio
        </Link>
        <Link className="li" to="/product/Mouse">
          Mouse
        </Link>
        <Link className="li" to="/product/Teclado">
          Teclado
        </Link>
        <Link className="li" to="/product/Consola">
          Consola
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
