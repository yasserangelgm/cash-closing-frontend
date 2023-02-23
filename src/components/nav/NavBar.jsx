import { NavLink } from 'react-router-dom';
import './navbar.styles.css';

const NavBar = () => {
  return (
    <>
      <nav className="open dashboard-nav">
        <div className="menu">
          <div className="nav-link-container">
            <NavLink className="nav-link" to="summary">
              <i className="bi bi-speedometer"></i>
              <span>Dashboard</span>
            </NavLink>
          </div>
          <div className="nav-link-container">
            <NavLink className="nav-link" to="accounts">
              <i className="bi bi-person-vcard"></i>
              <span>Cuentas</span>
            </NavLink>
          </div>
          <div className="nav-link-container">
            <NavLink className="nav-link" to="transactions">
              <i className="bi bi-arrow-left-right"></i>
              <span>Movimientos</span>
            </NavLink>
          </div>
        </div>
        <div className="status">
          <div className="nav-link-container">
            <p className="nav-link">
              <i className="bi bi-person-circle"></i> <span>Yasser</span>
            </p>
          </div>

          <button className="btn nav-link">
            <i className="bi bi-box-arrow-right"></i>
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
