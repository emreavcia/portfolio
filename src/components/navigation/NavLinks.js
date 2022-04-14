import React from 'react'
import "./navLinks.css"
import { Link } from "react-router-dom"

const NavLinks = () => {
    return (
        <ul className='nav-list'>
            <li className='nav-list-item'> <Link className='navLinks' to="/about" >About</Link> </li>
            <li className='nav-list-item'> <Link className='navLinks' to="/" >Joy</Link> </li>
            <li className='nav-list-item'> <Link className='navLinks' to="/contact" >Contact</Link> </li>
        </ul>
    )
}

export default NavLinks