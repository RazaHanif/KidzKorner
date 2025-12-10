import { NavLink } from 'react-router';
import Navigation from './Navigation';
// import './header.css';

const Header = () => {
  return (
    <div>
      <div className="flex flex-row p-2">
        <div className="flex flex-row justify-between w-full p-2 border-2 rounded-md">
          <NavLink to="/" end>
            <img 
              src='/logo.png'
              alt='Home'
              className='w-20'
            />
          </NavLink>

          {/* Hamburger button
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
          </button> */}

          {/* Collapsible links */}
          <div>
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;