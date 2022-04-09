import React, { useState } from 'react'
import "./navigation.css"
import { Link } from "react-router-dom"
import HamburgerMenu from './HamburgerMenu'
import NavLinks from './NavLinks'

function Navigation() {

  //to set the nav links to display and vice verse 
  const [displayNavLinks, setDisplayNavLinks] = useState(false)

  //to create an animation for the hamburger menu
  const [open, setOpen] = useState("hamburger")

  //function to handle both setDisplay and open states 
  const handleHamburgerMenuClick = () => {
    setDisplayNavLinks(!displayNavLinks)
    open === "hamburger" ? setOpen("cross") : setOpen("hamburger")
  }

  return (
    <>
      <header>
        <Link to="/" className='logo'>EA</Link>
        <nav>
          {displayNavLinks && <NavLinks onClick={handleHamburgerMenuClick} />}
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