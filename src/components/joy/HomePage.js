import React from 'react'
import MainText from './MainText'
import Motion from './Motion'
import TextFadeInAndOut from './TextFadeInAndOut'
import RotatingText from "./RotatingText"
import "./homePage.css"
import { useAnimation } from "framer-motion"

const HomePage = () => {
    const move = useAnimation()
    const moveBack = useAnimation()
    const handleAnimation = () => {
        move.start({
            scale: 1.5,
            rotate: 270,
            borderRadius: "50%",
            transition: { duration: 1 }
        })
    }

    const handleAnimationMoveBack = () => {
        move.start({
            scale: 1,
            rotate: -360,
            borderRadius: 0,
            transition: { duration: 1 }
        })
    }

    return (
        <main>
            <TextFadeInAndOut />
            <MainText handleAnimation={handleAnimation} handleAnimationMoveBack={handleAnimationMoveBack} />
            <Motion move={move} moveBack={moveBack} />
            <RotatingText />
        </main>
    )
}

export default HomePage