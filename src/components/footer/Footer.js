import React from 'react'
import { SiLinkedin, SiGithub } from 'react-icons/si';
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <ul>
                <li><a href="https://github.com/emreavcia" target="_blank" rel="noopener noreferrer"><SiGithub /></a> </li>
                <li><a href="https://www.linkedin.com/in/emre-avci-765888220/" target="_blank" rel="noopener noreferrer"><SiLinkedin /></a></li>
            </ul>
        </footer>
    )
}

export default Footer