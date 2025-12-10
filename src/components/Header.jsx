import { NavLink } from 'react-router';
import Navigation from './Navigation';
import './header.css';

const Header = () => {
  return (
      <div className="navbar header bg-(--secondary) border-4 border-red-500 flex flex-row w-full">
        <div className="flex flex-row justify-between w-full border-red-500 border-2">
          <div 
            // className="collapse navbar-collapse"  
            id="navbarNav"
          >
            <Navigation />
          </div>
        </div>
      </div>
  );
};

export default Header;