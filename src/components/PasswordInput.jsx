import { useState } from "react"

import atoms from '../styles/atoms.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

export default function PasswordInput({minLength, value, onChange}) {
    const [inputType, setInputType] = useState('password')

    const toggleInput = (e) => {
        e.stopPropagation()
        setInputType(current => current == "text" ? "password" : "text")
    }

    return (
        <span>
            <input 
                className={atoms.input}
                type={inputType}
                placeholder="Password"
                name='password'
                value={value}
                onChange={onChange}
                minLength={minLength ? minLength : 0}
                required
                style={{width: "100%", paddingRight: "2.5rem"}}
            />
            <button
                type="button"
                onClick={toggleInput}
                style={{
                    marginLeft: "-2.5rem",
                    width: "2rem",
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    display: "inline-block"
                }}
            >
                <FontAwesomeIcon icon={inputType == "text" ? faEye : faEyeSlash}/>
            </button>
        </span>
    )
}