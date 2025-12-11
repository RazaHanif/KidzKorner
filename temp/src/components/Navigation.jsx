import { Link } from 'react-router-dom';
// import './navigation.css';

function Navigation() {

  return (
    <>
      <div 
        className="hidden md:flex flex-row w-full lg:w-3/4 justify-between gap-2 border-2 border-red-500 text-2xl"
      >
        <Link 
          to="/childcare" 
          end
        >
          Child Care
        </Link>

        <Link 
          to="/parties" 
          end
        >
          Parties
        </Link>

        <Link 
          to="/playground" 
          end
        >
          Playground
        </Link>

        <Link 
          to="/workshop" 
          end
        >
          Workshops
        </Link>

        <Link 
          to="/camp" 
          end
        >
          Camp
        </Link>

        <Link 
          to="/about" 
          end
        >
          About Us
        </Link>
      </div>
      <div>

      </div>
    </>
  );
}

export default Navigation;