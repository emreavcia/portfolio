import React from 'react'
import "./mainText.css"

const MainText = ({ handleAnimation, handleAnimationMoveBack }) => {

    return (
        <>
            <p className='main_text'>I enjoy playing around with <span onMouseOut={handleAnimationMoveBack} onMouseOver={handleAnimation}>HTML5</span>, <span onMouseOver={handleAnimation} onMouseOut={handleAnimationMoveBack}>CSS3</span>, <span onMouseOut={handleAnimationMoveBack} onMouseOver={handleAnimation}>Javascript</span>, and <span onMouseOut={handleAnimationMoveBack} onMouseOver={handleAnimation}>REACT.js.</span></p>
            <p className='main_text'> I am currently studying on <span onMouseOver={handleAnimation} onMouseOut={handleAnimationMoveBack}>Node.js</span>, hopefully will not take more than a month to be able to implement it professionally.</p>
        </>
    )
}

export default MainText