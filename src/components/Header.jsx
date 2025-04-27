import { NavLink } from 'react-router'
import Navigation from './Navigation'

const Header = () => {
    return (
        <header className='site-header'>
            <div className='container'>
                <div className='header-logo'>
                    <NavLink to='/' end>
                        LOGO
                    </NavLink>
                </div>
                <div className='header-nav'>
                    <Navigation />
                </div>
            </div>
        </header>
    )

}

export default Header