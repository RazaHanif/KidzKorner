import { useEffect } from 'react';
import { NavLink } from 'react-router';
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
        <NavLink to="/childcare" end className="nav-link" onClick={closeNavbar}>
          Child Care
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/parties" end className="nav-link" onClick={closeNavbar}>
          Parties
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/playground" end className="nav-link" onClick={closeNavbar}>
          Playground
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/workshop" end className="nav-link" onClick={closeNavbar}>
          Workshops
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/camp" end className="nav-link" onClick={closeNavbar}>
          Camp
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" end className="nav-link" onClick={closeNavbar}>
          About Us
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;