import React from 'react'
import { useState } from 'react/cjs/react.development'
import { v4 as uuid } from 'uuid'
import "./about.css"

const About = () => {

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
            content: "21 certifactes about Front-end Programming"
        }
    ]

    const [counter, setCounter] = useState(1)
    const [newCareerContent, setNewCareerContent] = useState([])

    const handlePopUp = () => {
        counter < careerContent.length && setCounter(counter + 1)
        const content = careerContent.splice(0, `${counter}`)
        setNewCareerContent(content)

    }

    return (
        <section className='about'>
            <div className='click_me_section'>
                <h2>Click on me <br /> (my picture)!</h2>
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