import Link from "next/link";
import Social from "../../atoms/Social/Social"
import { BsBoxArrowRight, BsFillEnvelopeFill, BsFillArrowUpCircleFill } from 'react-icons/bs';
import { FaReact} from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import styles from './Footer.module.scss'

const Footer = () => {

    const getYear = new Date()
    const dateYear = getYear.getFullYear()

  return (
    <>
    <div className={styles.containerFooter} id="contatti">
        <div className={styles.contact}>
            <h2>Contattami</h2>
            <Link href={"mailto:florestagiuliosimone@gmail.com"}><BsBoxArrowRight /><BsFillEnvelopeFill /></Link>
        </div>
        <div className={styles.social}>
            <span>Seguimi</span>
            <Social />
        </div>
        <div className={styles.author}>
            <span>Giulio Simone Floresta {dateYear}</span>
            <span className={styles.codeDev}>Sviluppato con <FaReact /> React & <SiNextdotjs /> Next.js</span>
        </div>
        <Link href={"#menu"} className={styles.backMenu}><BsFillArrowUpCircleFill /></Link>
    </div>
    </>
  )
}

export default Footer