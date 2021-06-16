import React from 'react';
import { NavLink } from 'react-router-dom';

// import './Navbar.css';

export function NavBar() {
    return (
        <header>
            <nav>
                <ul >
                    <li>
                        <NavLink exact to="/" >Actividades</NavLink>
                        <NavLink to="/" >Acerca de</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;