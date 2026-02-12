import { useState, type PropsWithChildren } from "react";
import styles from "../styles/Collapsible.module.css";

function Collapsible({header, children} : PropsWithChildren<{header: string}>) {
    const [isCollapsed, setCollapsed] = useState<boolean>(true);
    const updateCollapsed = () => {
        setCollapsed(collapsed => !collapsed)
    };
    return (<div>
        <button type="button" onClick={updateCollapsed} className={styles.collapsible}>{isCollapsed ? `▸ ` : `▾ `}<a>{header}</a></button>
        <div className={`${styles.content} ${isCollapsed ? styles.collapsed : styles.expanded}`}>
            {children}
        </div>
    </div>)
}

export default Collapsible;