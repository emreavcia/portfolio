import React from 'react'
import "./contact.css"

const Contact = () => {
    return (
        <section className='contact_me_container'>
            <h2 className='contact_me_heading'>Contact Me</h2>
            <div>
                <p className='contact_me_paragraph'>I am available for a work.</p>
                <p className='contact_me_paragraph'>Drop me a line if you fancy a chat.</p>
            </div>
            <h3 className='contact_me_email'><a href="mailto:emre.avci@powercoders.org">emre.avci@powercoders.org</a></h3>
        </section>
    )
}

export default Contact