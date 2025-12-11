import { Link } from 'react-router-dom';
import Navigation from './Navigation';
// import './header.css'; 

const Header = () => {
  return (
    <div className='flex flex-row justify-center items-center p-2 w-full'>
      <div className="flex flex-row justify-between items-center w-full p-2 border-2 border-amber-500 rounded-md bg-primary">
        <Link 
          className='border-2 border-red-500'
          to="/" 
          end>
          <img 
            src='/logo.png'
            alt='Home'
            className='w-25'
          />
        </Link>

        {/* Collapsible links */}
        <div 
          className='flex-1 flex flex-row justify-end items-center border-2 border-blue-500'
        >
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;