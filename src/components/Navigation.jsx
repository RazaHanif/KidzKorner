import { NavLink } from 'react-router'


function Navigation() {
    return(
        <nav>
            <NavLink to='/childcare' end>
                Child Care
            </NavLink>
            <NavLink to='/parties' end>
                Parties
            </NavLink>
            <NavLink to='/playground' end>
                Playground
            </NavLink>
            <NavLink to='/workshop' end>
                Workshops
            </NavLink>
            <NavLink to='/about' end>
                About Us
            </NavLink>
        </nav>
    )
}

export default Navigation