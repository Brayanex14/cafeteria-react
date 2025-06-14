
import "./Header.css";
import { FaHeadset, FaMugHot } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = ({ carrito2 = [] }) => {
  return (
    <div className="container-hero">
      <div className="container hero px-4 py-3">
        {/* Soporte al cliente */}
        <div className="customer-support">
          <FaHeadset className="icon-header" />
          <div className="content-customer-support">
            <span className="text">Soporte al cliente</span>
            <span className="number">123-456-7890</span>
          </div>
        </div>

        {/* Logo central */}
        <div className="container-logo">
          <FaMugHot className="icon-header" />
          <h1 className="logo">
            <a href="/">Baristas</a>
          </h1>
        </div>

        {/* Usuario y carrito */}
        <div className="container-user">
          <Link to="/login">
            <i class="fa-solid fa-user icon-header"></i>
          </Link>
          <Link to="/compras">
            <i class="fa-solid fa-cart-shopping fa-flip-horizontal"></i>
          </Link>
          <div className="content-shopping-cart">
            <span className="text">Carrito</span>
            <span className="number">({carrito2.length})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
