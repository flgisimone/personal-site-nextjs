import Link from 'next/link'
import { AiOutlineMenuFold, AiFillCloseCircle } from 'react-icons/ai';
import { useState } from "react"
import styles from "./Header.module.scss"

const Header = () => {

    const [menu, setMenu] = useState(true)

    const btnOpenMenu = () => {
        setMenu(false)
    }

    const btnCloseMenu = () => {
        setMenu(true)
    }

  return (
        <div className={styles.containerHeader} id="menu">
            <span className={styles.logo}><Link href={"/"} className={styles.linkLogo}>FGS</Link></span>
            <div className={styles.menu}>
                <nav className={styles.navMenu}>
                    <ul className={`${menu ? `${styles.ulMenu} ${styles.hidden}` : `${styles.ulMenu} ${styles.show}`}`} role="menu"> 
                        <Link href={"/#about"} className={styles.liLink}>Chi sono</Link>
                        <Link href={"/#portfolio"} className={styles.liLink}>theLab.</Link>
                        <Link href={"/#contatti"} className={styles.liLink}>Contatti</Link>
                    </ul>
                    <button className={`${menu ? `${styles.btnOpenMenu} ${styles.show}` : `${styles.btnOpenMenu} ${styles.hidden}`}`} onClick={btnOpenMenu}>
                        <AiOutlineMenuFold />
                    </button>
                    <button className={`${menu ? `${styles.btnCloseMenu } ${styles.hidden}` : `${styles.btnCloseMenu } ${styles.show}`}`} onClick={btnCloseMenu}>
                        <AiFillCloseCircle />
                    </button>
                </nav>
            </div>
        </div>
  )
}

export default Header