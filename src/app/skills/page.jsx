'use client'

import Image from 'next/image';
import styles from './page.module.css'
import { useState } from 'react';

export default function Skills() {
  const [isListOpen, setListOpen] = useState(true);

  const toggleList = () => {
    setListOpen(!isListOpen);
  };
  return (
      <div className={styles.main}>
        <div className={styles.quadranteOne}> 
          <div className={styles.setaPlus}>
            <button className={isListOpen ? styles.open : styles.teste} onClick={toggleList}>
                <Image
                  src="/seta.png"
                  width={28}
                  height={28}
                  alt="Seta"
                />
              </button>
              <div className={styles.divImage}>
                <Image
                    src="/pasta.png"
                    width={28}
                    height={28}
                    alt="Seta"
                  />
              </div>
                <p>hard_skills</p>
            </div>
            <ul id="myList" className={isListOpen ? styles.visibleList : styles.hiddenList}>
              <div className={styles.skills}>
                <Image
                    src="/html.png"
                    width={20}
                    height={20}
                    alt="Icone HTML"
                />
                <p className={styles.css}>HTML</p>
              </div>
              <div className={styles.skills}>
                <Image
                    src="/css.png"
                    width={23}
                    height={23}
                    alt="Icone CSS"
                />
                <p className={styles.css}>CSS</p>
              </div>
              <div className={styles.skills}>
                <Image
                    src="/js.png"
                    width={20}
                    height={20}
                    alt="Icone JavaScript"
                />
                <p className={styles.css}> JavaScript</p>
              </div>
              <div className={styles.skills}>
                <Image
                    src="/ts.png"
                    width={20}
                    height={20}
                    alt="Icone TypeScript"
                />
                <p className={styles.css}>TypeScript</p>
              </div>
              <div className={styles.skills}>
                <Image
                    src="/react.png"
                    width={20}
                    height={20}
                    alt="Icone React"
                />
                <p className={styles.css}>React.js</p>
              </div>
              <div className={styles.skills}>
                <Image
                    src="/node.png"
                    width={20}
                    height={20}
                    alt="Icone NodeJS"
                />
                <p className={styles.css}>NodeJS</p>
              </div>
              <div className={styles.skills}>
                <Image
                    src="/java.png"
                    width={20}
                    height={20}
                    alt="Icone Java"
                />
                <p className={styles.css}>Java</p>
              </div>
              <div className={styles.skills}>
                <Image
                    src="/c.png"
                    width={20}
                    height={20}
                    alt="Icone C"
                />
                <p className={styles.css}>C</p>
              </div>
            </ul>
          </div>
        <div className={styles.quadranteTwo}>
          <div className={styles.imgPlusText}>
            <h1>HTML</h1>
            <Image
              src="/htmlIcon.png"
              width={100}
              height={100}
              alt="Icone HTML"
            />
          </div>
          <div className={styles.imgPlusText}>
            <h1>CSS</h1>
            <Image
              src="/cssIcon.png"
              width={100}
              height={100}
              alt="Icone CSS"
            />
          </div>
          <div className={styles.imgPlusText}>
            <h1>JS</h1>
            <Image
              src="/jsIcon.png"
              width={100}
              height={100}
              alt="Icone JavaScript"
            />
          </div>
          <div className={styles.imgPlusText}>
            <h1>TS</h1>
            <Image
              src="/typeScriptIcon.png"
              width={100}
              height={100}
              alt="Icone TypeScript"
            />
          </div> 
          <div className={styles.imgPlusText}>
            <h1>NodeJS</h1>
            <Image
              src="/nodejsIcon.png"
              width={100}
              height={100}
              alt="Icone JavaScript"
            />
          </div> 
          <div className={styles.imgPlusText}>
            <h1>NGINX</h1>
            <Image
              src="/nginxIcon.png"
              width={80}
              height={100}
              alt="Icone Nginx"
            />           
          </div>
          <div className={styles.imgPlusText}>
            <h1>ReactJS</h1>
            <Image
              src="/reactIcon.png"
              width={100}
              height={100}
              alt="Icone React"
            />
          </div> 
          <div className={styles.imgPlusText}>
            <h1>Java</h1>
            <Image
              src="/javaIcon.png"
              width={100}
              height={100}
              alt="Icone Java"
            />
          </div>
          <div className={styles.imgPlusText}>
            <h1>Docker</h1>
            <Image
              src="/dockerIcon.png"
              width={100}
              height={100}
              alt="Icone Docker"
            />           
          </div>
          <div className={styles.imgPlusText}>
            <h1>GIT</h1>
            <Image
              src="/gitIcon.png"
              width={100}
              height={100}
              alt="Icone Git"
            />
          </div> 
          <div className={styles.imgPlusText}>
            <h1>NextJS</h1>
            <Image
              src="/nextJsIcon.png"
              width={100}
              height={100}
              alt="Icone Next"
            />
          </div>
          <div className={styles.imgPlusText}>
            <h1>C</h1>
            <Image
              src="/cIcon.png"
              width={100}
              height={100}
              alt="Icone C"
            />
          </div>   
        </div>
      </div>
  );
}
