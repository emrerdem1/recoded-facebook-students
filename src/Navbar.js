import React from 'react'
import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <ul>
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/signup'>Signup</NavLink></li>
        </ul>
    )
}

export default Navbar
