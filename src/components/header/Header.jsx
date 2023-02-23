import { Link } from 'react-router-dom';
import './header.styles.css';
const Header = () => {
  return (
    <header>
      <div className="container-fluid header-container">
        <div className="logo-container">
          <i className="bi bi-cash-coin"></i>
          <span>Corte de Caja</span>
        </div>
        <div className="user">
          <Link to="/login" className="btn header-button">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
