import Image from 'next/image'
import ContactForm from '../components/forms/ContactForm'

import styles from '../styles/pages/ContactUs.module.scss'

export default function ContactUs() {
    return (
        <section className={styles.container}>
            <div>
                <h1>Contact Us</h1>
                <ContactForm />
            </div>
            <div className={styles.imageWrapper}>
                <Image 
                    src="/calling.svg" 
                    alt="man having a phonecall" 
                    layout='fill'
                    objectFit='cover'
                />
            </div>
        </section>
    )
}