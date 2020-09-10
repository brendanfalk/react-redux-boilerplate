import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            {/* Use NavLink to apply the class "active" to the text when selected */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <br /><br /><br />
        </div>
    )
}

export default Navbar
