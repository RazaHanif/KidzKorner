import { NavLink } from 'react-router'
import Navigation from './Navigation'
import './header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='header-container'>
                <div className='header-btns'>
                    <div>Call</div>
                    <div>Email</div>
                </div>
                <div className='header-nav'>
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
        </header>
    )

}

export default Header