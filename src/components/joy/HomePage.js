import React from 'react'
import MainText from './MainText'
import TextFadeInAndOut from './TextFadeInAndOut'
import RotatingText from "./RotatingText"
import "./homePage.css"

const HomePage = () => {
    return (
        <main>
            <TextFadeInAndOut />
            <MainText />
            <RotatingText />
        </main>
    )
}

export default HomePage