import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark header">
        <div className="container">
          <NavLink to="/" end className="navbar-brand">
            <img 
              src='/logo.png'
              alt='Home'
              className='logo'
            />
          </NavLink>

          {/* Hamburger button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <Navigation />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;