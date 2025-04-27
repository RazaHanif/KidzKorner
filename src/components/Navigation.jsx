import { NavLink } from 'react-router-dom'
import './navigation.css'

function Navigation() {
  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/childcare" end className="nav-link text-light">
            Child Care
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/parties" end className="nav-link text-light">
            Parties
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/playground" end className="nav-link text-light">
            Playground
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/workshop" end className="nav-link text-light">
            Workshops
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" end className="nav-link text-light">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation