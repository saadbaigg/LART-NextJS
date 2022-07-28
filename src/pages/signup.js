import { useState } from 'react'
import PasswordInput from '../components/PasswordInput'

import styles from '../styles/pages/LoginSignup.module.scss'
import atoms from '../styles/atoms.module.scss'

export default function Signup({ authorized }) {
    return (
        <div className={styles.container}>
            {authorized && <SignupForm />}
            {!authorized && <h1>Unauthorized.</h1>}
        </div>
    )
}

function SignupForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // to be linked with backend
    }

    return (
        <div className={styles.formWrapper}>
            <h1>Create your account</h1>
            <form className={atoms.form} style={{justifyContent: 'space-between', flexGrow: 1}}>
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
                    <p className={styles.inputDetails}>Must be at least 8 characters long</p>
                </div>
                <button
                    className={`${atoms.button} ${styles.loginButton}`}
                    type="submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            authorized: true // should be the result of authentication logic
        }
    }
}