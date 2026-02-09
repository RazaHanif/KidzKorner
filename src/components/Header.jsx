import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const Header = () => {
  return (
    <div className='flex flex-row justify-center p-2 w-full font-m'>
      <div className="flex flex-row justify-between items-center w-full pr-2 rounded-md bg-primary">
        <Link 
          to="/"
        >
          <img 
            src='/logo.png'
            alt='Home'
            className='w-30 hover:scale-110 duration-300 ease-in-out'
          />
        </Link>

        {/* Collapsible links */}
        <div 
          className='flex-1 flex flex-row justify-end items-center p-2'
        >
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;