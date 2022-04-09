import React from 'react'
import MainText from './MainText'
import TextFadeInAndOut from './TextFadeInAndOut'
import "./homePage.css"

const HomePage = () => {
    return (
        <main>
            <TextFadeInAndOut />
            <MainText />
        </main>
    )
}

export default HomePage