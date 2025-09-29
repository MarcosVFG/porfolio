import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  return (
    <div className={styles.main}>
      <h1>{'//'}TOP PROJECTS</h1>
      <div className={styles.content}>
        <div className={styles.border}>
          <h1>_fans and coach</h1>
          <Image
            src="/fansandcoach.png"
            width={528}
            height={272}
            alt="Feed"
            className={styles.opa}
          />
          <Link href={'https://play.google.com/store/apps/details?id=com.fansandcoach.app'} className={styles.linkDois} target="_blank">Latest project: a fantasy soccer game with 2,000+ downloads.</Link>
          <Link href={'https://play.google.com/store/apps/details?id=com.fansandcoach.app'} className={styles.link} target="_blank">Play Store</Link>
        </div>
        <div className={styles.border}>
          <h1>_fans and coach</h1>
          <Image
            src="/fansandcoach.png"
            width={528}
            height={272}
            alt="Feed"
            className={styles.opa}
          />
          <Link href={'https://apps.apple.com/br/app/fans-and-coach/id6740635737'} className={styles.linkDois} target="_blank">Latest project: a fantasy soccer game with 2,000+ downloads.</Link>
          <Link href={'https://apps.apple.com/br/app/fans-and-coach/id6740635737'} className={styles.link} target="_blank">Apple Store</Link>
        </div>
        <div className={styles.border}>
          <h1>_feed</h1>
          <Image
            src="/feed.png"
            width={528}
            height={272}
            alt="Feed"
            className={styles.opa}
          />
          <p>This project is a social network feed where comments can be added, deleted and others.</p>
          <Link href={'https://feed-social-media.vercel.app/'} className={styles.link} target="_blank">feed-social-media.vercel.app</Link>
        </div>
      </div>
    </div>
  )
}