import styles from './page.module.css'

export default function Contacts() {
    return (
        <div className={styles.main}>
            <h1>{'//'}GET_IN_TOUCH</h1>
            <p className={styles.paragraph}>I{"'"}m glad to know you{"'"}re interested in getting in touch. I{"'"}m always open to new opportunities, collaborations, and interesting conversations. Whether you have a question, suggestion, or just want to say {"''"}hi{"''"} feel free to drop me a message. I look forward to hearing from you!</p>

            <span className={styles.border}></span>
            <div className={styles.github}>
                <p className={styles.secondaryP}>{'//'}github</p>
                <p className={styles.principalP}>MarcosVFG</p>
                <p className={styles.secondaryP}>{'//'}github</p>
            </div>
            <span className={styles.borderTwo}></span>

            <span className={styles.border}></span>
            <div className={styles.github}>
                <p className={styles.secondaryP}>{'//'}linkedin</p>
                <p className={styles.principalP}>/marcosvfg</p>
                <p className={styles.secondaryP}>{'//'}linkedin</p>
            </div>
            <span className={styles.borderTwo}></span>

            <span className={styles.border}></span>
            <div className={styles.github}>
                <p className={styles.secondaryP}>{'//'}email</p>
                <p className={styles.principalP}>contato@markindev.tech</p>
                <p className={styles.secondaryP}>{'//'}email</p>
            </div>
            <span className={styles.borderLast}></span>
        </div>
    )
}