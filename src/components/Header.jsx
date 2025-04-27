import { NavLink } from 'react-router'
import Navigation from './Navigation'
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='header-logo'>
                    <NavLink to='/' end>
                        LOGO
                    </NavLink>
                </div>
                <div className='header-nav-links'>
                    <Navigation />
                </div>
            </div>
        </div>
    )

}

export default Header