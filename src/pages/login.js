import { useState } from 'react'
import PasswordInput from '../components/PasswordInput'

import styles from '../styles/pages/LoginSignup.module.scss'
import atoms from '../styles/atoms.module.scss'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // to be linked with backend
    }

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h1>Log in</h1>
                <form 
                    className={atoms.form} 
                    style={{justifyContent: 'space-between', flexGrow: 1}}
                    onSubmit={handleSubmit}
                >
                    <div className={styles.inputsWrapper}>
                        <input 
                            className={atoms.input}
                            type="email"
                            name='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                        <PasswordInput 
                            minLength={8}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className={`${atoms.button} ${styles.loginButton}`}
                        type="submit"
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}