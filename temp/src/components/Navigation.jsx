import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
    useEffect(() => {
        const handleResize = () => {
            const navbarCollapse = document.getElementById('navbarNav');
            const navbarToggler = document.querySelector('.navbar-toggler');

            if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
        }, []);

        const closeNavbar = () => {
            // Get the navbar toggler button
            const navbarToggler = document.querySelector('.navbar-toggler');
            
            // If the navbar is expanded, simulate a click to close it
            if (navbarToggler && navbarToggler.classList.contains('collapsed') === false) {
              navbarToggler.click();
            }
          };

  return (
    <ul className="navbar-nav ms-auto flex flex-row gap-2">
      <li className="nav-item">
        <Link to="/childcare" end className="nav-link" onClick={closeNavbar}>
          Child Care
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/parties" end className="nav-link" onClick={closeNavbar}>
          Parties
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/playground" end className="nav-link" onClick={closeNavbar}>
          Playground
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/workshop" end className="nav-link" onClick={closeNavbar}>
          Workshops
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/camp" end className="nav-link" onClick={closeNavbar}>
          Camp
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" end className="nav-link" onClick={closeNavbar}>
          About Us
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;