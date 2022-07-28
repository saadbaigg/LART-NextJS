import { useState } from 'react'
import atoms from '../../styles/atoms.module.scss'

export default function AddContentForm() {
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
                placeholder='Invitation message...'
                rows={4}
                required
            />
            <button 
                className={atoms.button}
                type='submit'
            >
                Invite
            </button>
        </form>
    )
}