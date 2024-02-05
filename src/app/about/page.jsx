import styles from './page.module.css'
import Image from 'next/image'

export default function About() {
    return (
    <div className={styles.main}>
        <div className={styles.one}> 
            <div className={styles.numbers}>
                <span className={styles.fade}>21</span>
                <span className={styles.fadeTwo}>22</span>
                <span>23</span>
                <span>24</span>
                <span>25</span>
                <span>26</span>
                <span>27</span>
                <span>28</span>
                <span>29</span>
                <span>30</span>
                <span>31</span>
                <span>32</span>
                <span>33</span>
                <span>34</span>
                <span>35</span>
                <span>36</span>
                <span>37</span>
                <span>38</span>
                <span>39</span>
                <span className={styles.fadeTwo}>40</span>
                <span className={styles.fade}>41</span>
            </div>
        </div> 
        <div className={styles.two}>
            <h1> {'<'}about me{'>'}</h1>
            <p>Hello! I firmly believe in a <span className={styles.green}>collaborative and agile </span>approach to software development. Effectively collaborating with multidisciplinary teams is an <span className={styles.purple}>essential</span> part of my work process. I am driven by technical challenges and committed to delivering <span className={styles.red}>high-quality solutions</span> that meet the needs of end-users.</p>
            <p>In addition to my involvement in professional projects, I allocate time to <span className={styles.blue}>personal initiatives</span>  that allow me to explore new <span className={styles.red}>ideas and technologies.</span> This practice not only keeps me updated but also inspires me to address problems in <span className={styles.purple}>creative and innovative</span> ways.</p>
            <p>Currently pursuing a degree in <span className={styles.green}>systems analysis and development,</span> I am further expanding my knowledge and skills. I am always on the lookout for <span className={styles.purple}>challenges and opportunities</span> to apply what I learn in a practical and meaningful manner.</p>
            <p>Whether in professional or personal projects, I am <span className={styles.blue}>dedicated</span> to exceeding expectations and <span className={styles.red}>contributing</span> to success through innovative solutions. I am excited about the possibilities the future holds in the field of software development and am <span className={styles.green}>ready to take on new challenges.</span></p>
        </div>
        <div className={styles.three}>
            <Image
                src="/markin.jpeg"
                width={400}
                height={400}
                alt="Foto Marcos"
                className={styles.foto}
            />
        </div>
    </div>  
    )
}