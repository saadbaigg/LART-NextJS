import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/components/Header.module.scss'

export default function Header() {
    const [showNav, setShowNav] = useState(false)
    
    const toggleNav = () => {
        setShowNav(current => !current)
    }

    return (
        <header className={styles.container}>
            <nav className={`${styles.nav} ${showNav ? styles.show : ''}`}>
                <div className={styles.navLeft}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/about-us">
                        <a>About us</a>
                    </Link>
                    <Link href="/contact-us">
                        <a>Contact us</a>
                    </Link>
                </div>
                <Link href="/login">
                    <a className={styles.login}>Log in</a>
                </Link>
            </nav>
            <button 
                aria-label='Menu button'
                className={`${styles.hamburger} ${showNav ? styles.active : ''}`}
                onClick={toggleNav}
            >
                <div aria-hidden />
                <div aria-hidden />
                <div aria-hidden />
            </button>
        </header>
    )
}