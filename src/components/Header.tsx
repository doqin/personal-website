import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Header.module.css";
import { BlogIcon, FolderIcon, NotepadIcon, StickyNoteIcon } from "./icons";

const routes = [
    { path: "/", label: "Home", Icon: NotepadIcon },
    { path: "/blog", label: "Blog", Icon: BlogIcon },
    { path: "/notes", label: "Notes", Icon: StickyNoteIcon },
    { path: "/projects", label: "Projects", Icon: FolderIcon },
];

function Header() {
    const location = useLocation();
    const [isStartOpen, setStartOpen] = useState(false);
    const [time, setTime] = useState(new Date());
    const startRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000 * 15);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (startRef.current && !startRef.current.contains(event.target as Node)) {
                setStartOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const timeLabel = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    return (
        <div className={styles.taskbar}>
            <div className={styles.startContainer} ref={startRef}>
                <button
                    type="button"
                    title="Start"
                    aria-label="Start menu"
                    aria-expanded={isStartOpen}
                    className={`${styles.startButton} ${isStartOpen ? styles.open : ""}`}
                    onClick={() => setStartOpen(open => !open)}
                >
                    <span className={styles.orb} />
                    <span className={`${styles.orb} ${styles.orbHover}`} />
                    <span className={`${styles.orb} ${styles.orbActive}`} />
                </button>
                {isStartOpen && (
                    <ul role="menu" className={styles.startMenu}>
                        {routes.map(r => (
                            <li role="menuitem" key={r.path}>
                                <Link to={r.path} className={styles.startMenuLink} onClick={() => setStartOpen(false)}>
                                    <r.Icon size={16} /> <span>{r.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <nav className={styles.pinnedApps}>
                {routes.map(r => (
                    <Link
                        key={r.path}
                        to={r.path}
                        title={r.label}
                        aria-label={r.label}
                        className={`${styles.glassButton} ${styles.taskbarButton} ${location.pathname === r.path ? styles.open : ""}`}
                    >
                        <r.Icon size={32} />
                    </Link>
                ))}
            </nav>
            <div className={styles.clock}>{timeLabel}</div>
        </div>
    );
}

export default Header;
