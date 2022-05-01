import React from 'react'
import "./contact.css"

const Contact = () => {

    return (
        <section className='contact_me_container'>
            <h1 className='sr-only'>Contact me, Emre Avci</h1>
            <h2 className='contact_me_heading'>Contact Me</h2>
            <div>
                <p className='contact_me_paragraph'>I am available for work.</p>
                <p className='contact_me_paragraph'>Drop me a line if you fancy a chat.</p>
            </div>
            <h3 className='contact_me_email'><a href="mailto:emre.avci@powercoders.org">emre.avci@powercoders.org</a></h3>
            <p className='contact_me_paragraph'>Check out my<a href="https://github.com/emreavcia" target="_blank" rel="noopener noreferrer"> github </a>account.</p>
        </section>
    )
}

export default Contact