import React from 'react'
import "./mainText.css"

const MainText = ({ handleAnimation, handleAnimationMoveBack }) => {

    return (
        <>
            <h1 className='sr-only'>Get joy with Emre Avci</h1>
            <p className='main_text hi_text'>Hi there, I'm Emre AVCI</p>
            <p className='main_text'>I enjoy playing around with <a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noopener noreferrer" onMouseOut={handleAnimationMoveBack} onMouseOver={handleAnimation}>HTML5</a >, <a href='https://www.w3schools.com/css/default.asp' target="_blank" rel="noopener noreferrer" onMouseOver={handleAnimation} onMouseOut={handleAnimationMoveBack}>CSS3</a >, <a href='https://www.w3schools.com/js/default.asp' target="_blank" rel="noopener noreferrer" onMouseOut={handleAnimationMoveBack} onMouseOver={handleAnimation}>Javascript</a >, and <a href='https://www.w3schools.com/react/default.asp' target="_blank" rel="noopener noreferrer" onMouseOut={handleAnimationMoveBack} onMouseOver={handleAnimation}>REACT.js.</a ></p>
            <p className='main_text'> Am currently studying on <a href='https://www.w3schools.com/nodejs/default.asp' target="_blank" rel="noopener noreferrer" onMouseOver={handleAnimation} onMouseOut={handleAnimationMoveBack}>Node.js</a >, hopefully won't take much to implement it into my projects professionally and confidently.</p>
            <p className='main_text'> Then, in a couple of shakes, wanna be confident with <a href='https://www.w3schools.com/mysql/default.asp' target="_blank" rel="noopener noreferrer" onMouseOver={handleAnimation} onMouseOut={handleAnimationMoveBack}>MySQL</a > and <a href='https://www.mongodb.com/' target="_blank" rel="noopener noreferrer" onMouseOver={handleAnimation} onMouseOut={handleAnimationMoveBack}>MongoDB.</a ></p>
        </>
    )
}

export default MainText