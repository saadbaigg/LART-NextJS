import { useState } from 'react'
import atoms from '../../styles/atoms.module.scss'
import forms from '../../styles/components/forms.module.scss'

export default function AddContentForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDOB] = useState()
    const [storyType, setStoryType] = useState('')
    const [storyStatus, setStoryStatus] = useState('')
    const [story, setStory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // to be linked with backend
    }

    return (
        <form className={`${atoms.form} ${forms.addContentForm}`} onSubmit={handleSubmit}>
            <div>
                <input
                    className={atoms.input}
                    type="text"
                    name='first-name'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    placeholder='First name'
                    required
                />
                <input
                    className={atoms.input}
                    type="test"
                    name='last-name'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    placeholder='Last name'
                    required
                />
            </div>
            <label 
                htmlFor="date" 
                className={atoms.label}
            >
                Date of birth
            </label>
            <input
                className={atoms.input}
                type="date"
                name='date-of-birth'
                value={dob}
                onChange={e => setDOB(e.target.value)}
                required
            />
            <select 
                className={atoms.input}
                name="story-type"
                value={storyType}
                onChange={e => setStoryType(e.target.value)}
                required
            >
                <option>-- Select a type --</option>
                <option value="person">Person</option>
                <option value="animal">Animal</option>
            </select>
            <select 
                className={atoms.input}
                name="story-status"
                value={storyStatus}
                onChange={e => setStoryStatus(e.target.value)}
                required
            >
                <option>-- Select a status --</option>
                <option value="in-memory">In Memory</option>
                <option value="missing">Missing</option>
                <option value="heroes">Heroes</option>
                <option value="our-lives-now">Our lives now</option>
            </select>
            <textarea 
                className={atoms.textarea}
                name='story'
                value={story}
                onChange={e => setStory(e.target.value)}
                placeholder='Story...'
                rows={5}
                required
            />
            <button 
                className={atoms.button}
                type='submit'
            >
                Add
            </button>
        </form>
    )
}