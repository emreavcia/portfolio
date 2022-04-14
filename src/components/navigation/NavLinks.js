import React from 'react'
import "./navLinks.css"
import { Link } from "react-router-dom"

const NavLinks = ({ navLink, handleNavLinkClick }) => {

    return (
        <ul className='nav-list'>
            {
                navLink.map(navLink => (
                    <li key={navLink.id} className='nav-list-item'><Link onClick={() => handleNavLinkClick(navLink.id)} className={`navLinks ${navLink.active && "navLinks-active"}`} to={navLink.navLinkTo}>{navLink.navLinkName}</Link></li>
                ))
            }
        </ul>
    )
}

export default NavLinks