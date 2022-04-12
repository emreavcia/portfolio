import React from 'react'
import "./navLinks.css"
import { Link } from "react-router-dom"

const NavLinks = () => {
    return (
        <ul>
            <li> <Link className='navLinks' to="/about" >About</Link> </li>
            <li> <Link className='navLinks' to="/" >Joy</Link> </li>
            <li> <Link className='navLinks' to="/contact" >Contact</Link> </li>
        </ul>
    )
}

export default NavLinks