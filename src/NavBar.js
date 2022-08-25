import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar() {

    return (
        <nav>
            <NavLink exact to = "/">Home</NavLink>
            <NavLink exact to = "/chocolate">Chocolate</NavLink>
            <NavLink exact to = "/spinach">Spinach</NavLink>
            <NavLink exact to = "/skittles">Skittles</NavLink>

        </nav>
    )
}

export default NavBar;