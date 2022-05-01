import React from 'react'
import { useState } from 'react/cjs/react.development'
import { v4 as uuid } from 'uuid'
import "./about.css"

const About = () => {

    const clikcMeText = ["Click on me (my picture)!", "Click to see more", "You've seen all"]
    const [clickMeTextCounter, setClickMeTextCounter] = useState(0)

    const careerContent = [
        {
            id: uuid(),
            heading: "Career",
            content: "Third Secretary in MFA, TURKEY"
        },
        {
            id: uuid(),
            heading: "Education",
            content: "Mechanical Engineering, Yildiz Technical University"
        },
        {
            id: uuid(),
            heading: "Currently",
            content: "Powercoders Participant"
        },
        {
            id: uuid(),
            heading: "Career",
            content: "Third Secretary-Vice Consul, Turkish Consulate General in Hargeisa"
        },
        {
            id: uuid(),
            heading: "Courses",
            content: "HiCoders Full-Stack Programming 06.11.2021 -..."
        },
        {
            id: uuid(),
            heading: "Certificates",
            content: "21 certificates of Front-end Programming"
        }
    ]

    const [counter, setCounter] = useState(0)
    const [newCareerContent, setNewCareerContent] = useState([])

    const handlePopUp = () => {

        if (counter <= careerContent.length - 1) {
            setNewCareerContent(careerContent.splice(0, counter + 1))
            setCounter(counter + 1)
            setClickMeTextCounter(1)
        } else {
            setClickMeTextCounter(2)
        }
    }

    return (
        <section className='about'>
            <h1 className='sr-only'>About me, Emre Avci</h1>
            <div className='click_me_section'>
                <h2>{clikcMeText[clickMeTextCounter]}</h2>
                <img src="mySnapShot.jpg" alt="mySnapShot" onClick={handlePopUp} />
            </div>
            {
                newCareerContent.map((item, index) => (
                    <div key={item.id} className={`popup popup${index + 1}`}>
                        <h3>{item.heading}</h3>
                        <p>{item.content}</p>
                    </div>
                ))
            }
        </section>
    )
}

export default About