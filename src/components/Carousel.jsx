import Image from 'next/image'
import styles from '../styles/components/Carousel.module.scss'

export default function Carousel({ image, alt }) {
    return (
        <div className={styles.container}>
            <Image 
                src={image} 
                alt={alt}
                layout='fill' 
                objectFit='cover'
                priority
            />
        </div>
    )
}