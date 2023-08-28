import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <Link className="li" to="/">
          Home
        </Link>
        <Link className="li" to="/about">
          About
        </Link>
        <Link className="li" to="/contact">
          Contact
        </Link>
        <Link className="li" to="/user">
          Usuarios de
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
