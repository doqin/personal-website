import ProfilePicture from "./ProfilePicture"
import styles from "../styles/Header.module.css"
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className={styles.topbarContainer}>
            <div className={styles.contentContainer}>
                <h2>Nguyễn T. Khang</h2>
                <nav className={styles.navigationBar}>
                    <div><Link to="/" className={styles.link}>Home</Link></div>
                    <div><Link to="/blog" className={styles.link}>Blog</Link></div>
                    <div><Link to="/notes" className={styles.link}>Notes</Link></div>
                    <div><Link to="/projects" className={styles.link}>Projects</Link></div>
                    <div><Link to="/about" className={styles.link}>About</Link></div>
                </nav>
            </div>
            <ProfilePicture width='8em' height='8em'/>
        </div>
    )
}

export default Header;