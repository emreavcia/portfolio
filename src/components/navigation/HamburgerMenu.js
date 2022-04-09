import React from 'react'
import "./hamburgerMenu.css"

//hamburger menu sticks
const HamburgerMenu = ({ handleHamburgerMenuClick, open }) => {
    return (
        <div className='hamburger_container' onClick={handleHamburgerMenuClick} >
            <i className={open}></i>
            <i className={open}></i>
        </div>
    )
}

export default HamburgerMenu