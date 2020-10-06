import React, { useState } from 'react'

export default function ContactForm() {
    const [subject, setSubject] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()
    return (
        <form id="contact">
            <h1>Contact Me!</h1>
            <div className="formField">
                <label for="email">Email</label>
                <input
                className="formInput"
                name="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
            </div>
            <div className="formField">
                <label for="subject">Subject</label>
                <input
                className="formInput"
                name="subject"
                value={subject}
                onChange={(e)=> setSubject(e.target.value)}
                />
            </div>
            <div className="formField">
                <label for="message">Message</label>
                <textarea
                className="formArea"
                name="message"
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
                />
            </div>
            <button type="submit">Send</button>
        </form>
    )
}
