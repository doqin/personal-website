import Collapsible from "./Collapsible";
import styles from "../styles/Project.module.css";
import type { CSSProperties } from "react";

function Project({ header, repoLink, content, tags, anecdotes, style }: { header: string, repoLink: string, content: string[], tags: string[], anecdotes: string[], style?: CSSProperties}) {
    return <div className={styles.container} style={style}>
        <div className={styles.link}>
            <a href={repoLink} >{header}</a>
        </div>
        {content.map(c => <p>{c}</p>)}
        <div style={{margin: "20px 0 20px 0", display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            {tags.map(t => <a className={styles.tag} href={`https://google.com/search?q=${encodeURIComponent(t)}`}>{t}</a>)}
        </div>
        
        <div style={{marginTop: "20px"}}>
            <Collapsible header="Anecdote">
                <div style={{marginLeft: "2em"}}>
                    {anecdotes.map(c => <><p>{c}</p></>)}
                </div>
            </Collapsible>
        </div>
    </div>
}

export default Project;