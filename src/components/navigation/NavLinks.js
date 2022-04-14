import React from 'react'
import "./navLinks.css"
import { Link } from "react-router-dom"
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

const NavLinks = () => {

    const [navLink, setNavLink] = useState([
        {
            id: uuid(),
            navLinkName: "About",
            navLinkTo: "/about",
            active: false
        },
        {
            id: uuid(),
            navLinkName: "Joy",
            navLinkTo: "/",
            active: true
        },
        {
            id: uuid(),
            navLinkName: "Contact",
            navLinkTo: "/contact",
            active: false
        }

    ])

    const handleNavLinkClikc = (id) => {
        const newNavLinks = navLink.map(navLink => navLink.id !== id ? { ...navLink, active: false } : { ...navLink, active: true })
        setNavLink(newNavLinks)
    }

    return (
        <ul className='nav-list'>
            {
                navLink.map(navLink => (
                    <li className='nav-list-item'><Link onClick={() => handleNavLinkClikc(navLink.id)} className={`navLinks ${navLink.active && "navLinks-active"}`} to={navLink.navLinkTo}>{navLink.navLinkName}</Link></li>
                ))
            }
        </ul>
    )
}

export default NavLinks