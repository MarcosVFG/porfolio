'use client'

import Link from 'next/link'
import styles from './Header.module.css'
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Header () {
    const pathname = usePathname();
    return (
        <header className={styles.header}>
            <div className={styles.bottons}>
                <span className={styles.circleRed}></span>
                <span className={styles.circleYellow}></span>
                <span className={styles.circleGreen}></span>
                <h1>marcos_vinicius</h1>
            </div>
            <nav className={styles.nav}>
                <div className={pathname == '/' ? styles.testando : styles.testandoTwo}>
                    <Link href='/'>_hello</Link>
                </div>
                <div className={pathname == '/about' ? styles.testando : styles.testandoTwo}>
                    <Link href='/about'>_about</Link>
                </div>
                <div className={pathname == '/skills' ? styles.testando : styles.testandoTwo}>
                    <Link href='/skills'>_skills</Link>
                </div>
                <div className={pathname == '/projects' ? styles.testando : styles.testandoTwo}>
                    <Link href='/projects'>_projects</Link>
                </div>    
                <div className={pathname == '/contacts' ? styles.testando : styles.testandoTwo}>
                    <Link href='/contacts'>_contacts</Link>
                </div>
                <span className={styles.spanBord}></span>
            </nav>
        </header>
    )
}