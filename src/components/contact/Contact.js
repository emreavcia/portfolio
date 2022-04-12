import React from 'react'
import "./contact.css"

const Contact = () => {
    return (
        <section className='contact_me_container'>
            <h2 className='contact_me_heading'>Contact Me</h2>
            <p className='contact_me_paragraph'>Drop me a line if you fancy a chat</p>
            <h3 className='contact_me_email'><a href="mailto:emre.avci@powercoders.org">emre.avci@powercoders.org</a></h3>
        </section>
    )
}

export default Contact