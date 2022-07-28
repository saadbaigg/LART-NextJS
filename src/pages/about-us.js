import Image from 'next/image'

import styles from '../styles/pages/AboutUs.module.scss'

export default function AboutUs() {
    return (
        <div className={styles.container}>
            <h1>About us</h1>
            <section>
                <div className={styles.imageWrapper}>
                    <Image 
                        src="/hannah.jpg" 
                        alt="placeholder" 
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
                <div className={styles.descriptionWrapper}>
                    <h2>Hannah</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus odio nibh, et vehicula neque sollicitudin vel. Aliquam erat volutpat. Sed efficitur libero vitae ante fermentum ultricies. </p>
                </div>
            </section>
            <section>
                <div className={styles.imageWrapper}>
                    <Image 
                        src="/andrea.jpg" 
                        alt="placeholder" 
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
                <div className={styles.descriptionWrapper}>
                    <h2>Andrea</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus odio nibh, et vehicula neque sollicitudin vel. Aliquam erat volutpat. Sed efficitur libero vitae ante fermentum ultricies. </p>
                </div>
            </section>
        </div>
    )
}