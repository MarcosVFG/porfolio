import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects () {
  return (
    <div className={styles.main}>
      <h1>//TOP PROJECTS</h1>
      <div className={styles.content}>
        <div className={styles.border}>
          <h1>_feed</h1>
          <Image
                src="/feed.png"
                width={528}
                height={272}
                alt="Feed"
          />
          <p>This project is a social network feed where comments can be added, deleted and others.</p>
          <Link href={'https://feed-social-media.vercel.app/'} className={styles.link} target="_blank">feed-social-media.vercel.app</Link>
        </div>
        <div className={styles.border}>
          <h1>_nasa</h1>
          <Image
                src="/nasa.png"
                width={528}
                height={272}
                alt="Feed"
          />
          <p>This project was an API consumption study, it shows a photo of the day by NASA.</p>
          <Link href={'https://nasa-jet.vercel.app/'} className={styles.link} target="_blank">nasa-jet.vercel.app</Link>
        </div>
        <div className={styles.border}>
          <h1>_simple</h1>
          <Image
                src="/simple.png"
                width={528}
                height={272}
                alt="Feed"
          />
          <p>A simple responsive website with only HTML and CSS</p>
          <Link href={'https://marcosvfg.github.io/First/'} className={styles.link} target="_blank">marcosvfg.github.io/First/</Link>
        </div>
        <div className={styles.border}>
          <h1>_construction</h1>
          <Image
                src="/construct.jpg"
                width={528}
                height={272}
                alt="Feed"
                className={styles.teste}
          />
          <p>This website is under construction...</p>
          <Link href={'/projects'} className={styles.link}>?????</Link>
        </div>
      </div>
    </div>
  )
}