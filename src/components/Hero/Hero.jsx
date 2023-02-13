import Link from "next/link"
import Social from "../../atoms/Social/Social"
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import styles from "./Hero.module.scss"

const Hero = () => {

  return (
    <div className={styles.containerHero}>
        <div className={styles.infoHero}>
            <h2 className={styles.author}>Giulio Simone Floresta</h2>
            <h1 className={styles.job}>Front-End Developer</h1>
            <div className={styles.containerLink}>
                <Link href="mailto:florestagiuliosimone@gmail.com" className={styles.contactMe}>Contattami</Link>
                <Link href="./CV_Giulio_Simone_Floresta_2023.pdf" target="_blank" className={styles.cvDownload} >Download CV</Link>
            </div>
            <Social />
        </div>
        <button className={styles.btnScrollDown}>
          <Link href={"#about"}><BsFillArrowDownCircleFill /></Link>
        </button>
    </div>
  )
}

export default Hero