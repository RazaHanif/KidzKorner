import { NavLink } from 'react-router-dom'
import Navigation from './Navigation'
import './header.css'

const Header = () => {
  return (
    <header className="header py-2">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="header-logo">
          <NavLink to="/" end className="navbar-brand text-light">
            LOGO
          </NavLink>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header