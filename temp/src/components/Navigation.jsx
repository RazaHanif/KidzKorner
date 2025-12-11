import { Link } from 'react-router-dom';
// import './navigation.css';

function Navigation() {

  return (
    <ul className="navbar-nav ms-auto flex flex-row gap-2">
      <li className="nav-item">
        <Link to="/childcare" end>
          Child Care
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/parties" end>
          Parties
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/playground" end>
          Playground
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/workshop" end>
          Workshops
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/camp" end>
          Camp
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" end>
          About Us
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;