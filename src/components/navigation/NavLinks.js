import React from 'react'
import "./navLinks.css"
import { Link } from "react-router-dom"

const NavLinks = () => {
    return (
        <ul>
            <li> <Link className='navLinks' to="/" >About</Link> </li>
            <li> <Link className='navLinks' to="/" >Work</Link> </li>
            <li> <Link className='navLinks' to="/" >Contact</Link> </li>
        </ul>
    )
}

export default NavLinks