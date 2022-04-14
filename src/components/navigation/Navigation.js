import React, { useState } from 'react'
import "./navigation.css"
import { Link } from "react-router-dom"
import HamburgerMenu from './HamburgerMenu'
import NavLinks from './NavLinks'
import { v4 as uuid } from 'uuid'

function Navigation() {

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

  const handleNavLinkClick = (id) => {
    const newNavLinks = navLink.map(navLink => navLink.id !== id ? { ...navLink, active: false } : { ...navLink, active: true })
    setNavLink(newNavLinks)
  }
  //to set the nav links to display and vice verse 
  const [displayNavLinks, setDisplayNavLinks] = useState(false)

  //to create an animation for the hamburger menu
  const [open, setOpen] = useState("hamburger")

  //function to handle both setDisplay and open states 
  const handleHamburgerMenuClick = () => {
    setDisplayNavLinks(!displayNavLinks)
    open === "hamburger" ? setOpen("cross") : setOpen("hamburger")
  }

  const handleLogoClick = (extention) => {
    const newNavLinks = navLink.map(navLink => navLink.navLinkTo !== extention ? { ...navLink, active: false } : { ...navLink, active: true })
    setNavLink(newNavLinks)
  }

  return (
    <>
      <header>
        <Link to="/" className='logo' onClick={() => handleLogoClick("/")}>EA</Link>
        <nav>
          {displayNavLinks && <NavLinks onClick={handleHamburgerMenuClick} navLink={navLink} handleNavLinkClick={handleNavLinkClick} />}
          <HamburgerMenu
            handleHamburgerMenuClick={handleHamburgerMenuClick}
            open={open}
          />
        </nav>
      </header>
    </>
  )
}

export default Navigation