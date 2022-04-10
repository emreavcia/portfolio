import React from 'react'
import "./rotatingText.css"
const RotatingText = () => {

    const rotatingText = "EmreAvci-Front-end Developer"

    return (
        <div className='circle'>
            <div className='rotating_text_container'>
                <p className='rotating_text'>
                    {
                        rotatingText.split("").map((character, index) => (
                            <span key={index} style={{ transform: `rotate(${index * 12.6}deg)` }}>{character}</span>
                        ))
                    }
                </p>
            </div>
        </div>
    )
}

export default RotatingText