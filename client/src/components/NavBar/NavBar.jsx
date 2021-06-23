import React from 'react';
import { NavLink } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar';
import navBarStyle from './NavBar.module.css';

export function NavBar() {
    return (
        <header>
            <nav className={navBarStyle.nav}>
                <h1 className={navBarStyle.title}>Welcome to Travel App</h1>
                <div className={navBarStyle.links}>
                    <NavLink exact to="/home" className={navBarStyle.link}>Home</NavLink>
                    <NavLink exact to="/activities" className={navBarStyle.link}>Actividades</NavLink>
                    <NavLink to="/" className={navBarStyle.link}>Acerca de</NavLink>
                </div>

            </nav>
        </header>
    )
}

export default NavBar;