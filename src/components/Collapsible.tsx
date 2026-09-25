import { type PropsWithChildren } from "react";
import styles from "../styles/Collapsible.module.css";

function Collapsible({ header, children, isCollapsed, setCollapsed }: PropsWithChildren<{ header: string }> & { isCollapsed: boolean, setCollapsed: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <details
            open={!isCollapsed}
            onToggle={(e) => setCollapsed(!(e.currentTarget as HTMLDetailsElement).open)}
        >
            <summary className={styles.summary}>{header}</summary>
            <div className={styles.content}>
                {children}
            </div>
        </details>
    )
}

export default Collapsible;
