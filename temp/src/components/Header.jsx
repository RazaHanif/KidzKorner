import { Link } from 'react-router-dom';
import Navigation from './Navigation';
// import './header.css'; 

const Header = () => {
  return (
    <div>
      <div className="flex flex-row p-2">
        <div className="flex flex-row justify-between w-full p-2 border-2 rounded-md">
          <Link to="/" end>
            <img 
              src='/logo.png'
              alt='Home'
              className='w-20'
            />
          </Link>

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