import { NavLink } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <NavLink to="/childcare" end className="nav-link">
          Child Care
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/parties" end className="nav-link">
          Parties
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/playground" end className="nav-link">
          Playground
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/workshop" end className="nav-link">
          Workshops
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" end className="nav-link">
          About Us
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;