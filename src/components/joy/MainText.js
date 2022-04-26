import React from 'react'
import "./mainText.css"

const MainText = ({ handleAnimation, handleAnimationMoveBack }) => {

    return (
        <>
            <p className='main_text'>I enjoy playing around with <a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noopener noreferrer" onMouseOut={handleAnimationMoveBack} onMouseOver={handleAnimation}>HTML5</a >, <a href='https://www.w3schools.com/css/default.asp' target="_blank" rel="noopener noreferrer" onMouseOver={handleAnimation} onMouseOut={handleAnimationMoveBack}>CSS3</a >, <a href='https://www.w3schools.com/js/default.asp' target="_blank" rel="noopener noreferrer" onMouseOut={handleAnimationMoveBack} onMouseOver={handleAnimation}>Javascript</a >, and <a href='https://www.w3schools.com/react/default.asp' onMouseOut={handleAnimationMoveBack} onMouseOver={handleAnimation}>REACT.js.</a ></p>
            <p className='main_text'> I am currently studying on <a href='https://www.w3schools.com/nodejs/default.asp' onMouseOver={handleAnimation} onMouseOut={handleAnimationMoveBack}>Node.js</a >, hopefully will not take more than a month to be able to implement it professionally.</p>
        </>
    )
}

export default MainText