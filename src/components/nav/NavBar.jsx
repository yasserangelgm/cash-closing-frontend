import { NavLink } from "react-router-dom";
import "./navbar.styles.css";

const NavBar = () => {
  return (
    <>
      <nav className="open">
        <div className="menu">
          <div className="nav-link">
            <NavLink to="">
              <i className="bi bi-speedometer"></i>
              <span>Dashboard</span>
            </NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="accounts">
              <i className="bi bi-person-vcard"></i>
              <span>Cuentas</span>
            </NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="transactions">
              <i className="bi bi-arrow-left-right"></i>
              <span>Movimientos</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
