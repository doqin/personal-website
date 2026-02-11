import ProfilePicture from "./ProfilePicture"
import styles from "../styles/Header.module.css"
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className={styles.topbarContainer}>
            <div className={styles.contentContainer}>
                <h2>Nguyễn T. Khang</h2>
                <nav className={styles.navigationBar}>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/blog" className={styles.link}>Blog</Link>
                    <Link to="/notes" className={styles.link}>Notes</Link>
                    <Link to="/projects" className={styles.link}>Projects</Link>
                    <Link to="/about" className={styles.link}>About</Link>
                </nav>
            </div>
            <ProfilePicture width='8em' height='8em'/>
        </div>
    )
}

export default Header;