import React from 'react'
import { SiLinkedin, SiGithub } from 'react-icons/si';
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <ul className='footer-list'>
                <li className='footer-list-item'><a href="https://github.com/emreavcia/portfolio" target="_blank" rel="noopener noreferrer"><SiGithub /></a> </li>
                <li className='footer-list-item'><a href="https://www.linkedin.com/in/emre-avci-765888220/" target="_blank" rel="noopener noreferrer"><SiLinkedin /></a></li>
            </ul>
        </footer>
    )
}

export default Footer