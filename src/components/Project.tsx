import Collapsible from "./Collapsible";
import styles from "../styles/Project.module.css";

function Project({ header, repoLink, content, tags, anecdotes }: { header: string, repoLink: string, content: string[], tags: string[], anecdotes: string[]}) {
    return <div className={styles.container}>
        <div className={styles.link}>
            <a href={repoLink} >{header}</a>
        </div>
        {content.map(c => <p>{c}</p>)}
        <div style={{margin: "20px 0 20px 0"}}>
            {tags.map(t => <a className={styles.tag}>{t}</a>)}
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