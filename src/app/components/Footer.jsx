import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.main}>
            <h1>_get in touch</h1>
            <Link href={"https://github.com/MarcosVFG"} target="_blank"> 
                <div className={styles.imagens}>
                    <Image
                        src="/github.png"
                        width={36}
                        height={36}
                        alt="Icone do Github"
                    />
                </div>
            </Link>
            <Link href={"mailto:contato@markindev.tech"} target="_blank"> 
                <div className={styles.imagens}>
                    <Image
                        src="/gmail.png"
                        width={36}
                        height={36}
                        alt="Icone do Gmail"
                />   
                </div>
            </Link> 
            <Link href={"https://www.linkedin.com/in/marcosvfg/"} target="_blank"> 
                <div className={styles.imagensLast}>
                    <Image
                        src="/linkedin.png"
                        width={36}
                        height={36}
                        alt="Icone do Linkedin"
                    /> 
                </div>
            </Link>                       
        </footer>
    )
}