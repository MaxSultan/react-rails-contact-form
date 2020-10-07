import React, { useState } from 'react'
import Axios from 'axios'

export default function ContactForm() {
    const [subject, setSubject] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('/contacts', {message: message, subject: subject, email:email})
        .then(res => console.log(res))
        .catch(err=> console.log(err))
    }
    return (
        <form id="contact" onSubmit={handleSubmit}>
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
