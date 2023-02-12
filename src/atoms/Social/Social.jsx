import Link from "next/link"
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'; 
import styles from "./Social.module.scss"

const Social = () => {
  return (
    <div className={styles.Social}>
        <Link href={"https://www.linkedin.com/in/giuliosimonefloresta/"} target="_blank"><FaLinkedinIn /></Link>
        <Link href={"https://github.com/flgisimone/"} target="_blank"><FaGithub /></Link>
    </div>
  )
}

export default Social