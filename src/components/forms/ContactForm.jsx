import { useState } from 'react'
import atoms from '../../styles/atoms.module.scss'

export default function ContactForm() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // to be linked with backend
    }
    
    return (
        <form className={atoms.form} onSubmit={handleSubmit}>
            <input
                className={atoms.input}
                type="text"
                name='full-name'
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                placeholder='Full name'
                required
            />
            <input
                className={atoms.input}
                type="email"
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Email'
                required
            />
            <textarea 
                className={atoms.textarea}
                name='message'
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder='Message...'
                required
            />
            <button 
                className={atoms.button}
                type='submit'
            >
                Send
            </button>
        </form>
    )
}