import { useState } from "react"
import Link from "next/link";
import { IoIosAddCircle, IoIosCloseCircle, IoIosArrowDown, IoLogoGithub} from 'react-icons/io';
import styles from "./About.module.scss"

const About = () => {

  const [openLanguage, setOpenLanguage] = useState(true)

  const btnOpenLanguage = () =>{
      setOpenLanguage(false)
  }

  const btnCloseLanguage = () =>{
      setOpenLanguage(true)
  }

return (
  <div className={styles.containerAbout}>
      <h2>Su di me</h2>
      <div className={styles.infoAbout}>
          <p>👨🏻‍💻 Sono un <span className={styles.colorFont}>Front-End Developer</span> Jr. 
          Lo stack tecnologico con cui lavoro si basa principalmente su <span className={styles.colorFont}>HTML, CSS, SASS e Javascript</span> utilizzando come libreria principale <span className={styles.colorFont}>React.JS</span>.</p>
          <ul className={styles.ulImgStack}>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="logo-html" />  
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="logo-css3" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="logo-javascript" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="logo-react" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="logo-sass" />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="logo-next" />
          </ul>
          <div className={styles.containerLanguage}>
              <div className={styles.containerBtnLanguage}>
                  <span>Stats linguaggi</span>        
                  <button className={`${openLanguage ? `${styles.btnOpenLanguage} ${styles.show}` : `${styles.btnOpenLanguage} ${styles.hidden}`}`} onClick={btnOpenLanguage}><IoIosAddCircle /></button>
                  <button className={`${!openLanguage ? `${styles.btnOpenLanguage} ${styles.show}` : `${styles.btnOpenLanguage} ${styles.hidden}`}`} onClick={btnCloseLanguage}><IoIosCloseCircle /></button>
              </div>
              
              <div className={`${openLanguage ? `${styles.containerGithub} ${styles.hidden}` : `${styles.containerGithub} ${styles.show}`}`}>
                  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=flgisimone&layout=compact&theme=great-gatsby" alt="most language github stats" className={styles.imgLanguage}/>
                  <img src="https://github-readme-stats-sigma-five.vercel.app/api/?username=flgisimone&theme=great-gatsby" alt="activity github stats" className={styles.imgActivity}/>
                  <img src="https://github-profile-trophy.vercel.app/?username=flgisimone&theme=great-gatsby&margin-w=4" alt="trophies github stats" className={styles.imgTrophies}/>
                  <span className={`${openLanguage ? `${styles.statsGithub} ${styles.hidden}` : `${styles.statsGithub} ${styles.show}`}`}><Link href={"https://github.com/flgisimone"}><IoLogoGithub className={styles.iconGithub}/> Github Stats</Link></span>
              </div>
          </div>
      </div>
      <a href="#portfolio" className={styles.containerLinkPortfolio}>
          <p>theLab.</p>
          <IoIosArrowDown />
      </a>
  </div>
)
}

export default About