import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/icons/IconoNAV.png";
import cart from "../../assets/icons/carrit.png"


function NavBar() {
  return (
    <nav className="nav-container">
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo1" />
        </Link>
      </div>
      <div className="nav-center">
        <ul className="nav-ul">
          <li className="li">
            <Link to="/product/Notebook">Notebook</Link>
          </li>
          <li className="li">
            <Link to="/product/Desktop">Pc escritorio</Link>
          </li>
          <li className="li">
            <Link to="/product/Mouse">Mouse</Link>
          </li>
          <li className="li">
            <Link to="/product/Teclado">Teclado</Link>
          </li>
          <li className="li">
            <Link to="/product/Consola">Consola</Link>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="nav-icon">
          <Link to="/shop">
            <img src={cart} alt="cart" className="logo" />
            
          </Link>
          <p>3</p>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
