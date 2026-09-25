import Collapsible from "./Collapsible";
import styles from "../styles/Project.module.css";
import type { CSSProperties } from "react";
import { RepoIcon } from "./icons";

export function ProjectBody({
    repoLink,
    content,
    tags,
    anecdotes,
    isCollapsed,
    setCollapsed
}: {
    repoLink: string,
    content: string[],
    tags: string[],
    anecdotes: string[],
    isCollapsed: boolean,
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}) {
    return <>
        {content.map(c => <p key={c}>{c}</p>)}
        <div className={styles.tags}>
            {tags.map(t => <a role="button" className={styles.tag} key={t} href={`https://google.com/search?q=${encodeURIComponent(t)}`}>{t}</a>)}
        </div>
        <p>
            <a role="button" className={styles.repoLink} href={repoLink} target="_blank" rel="noreferrer">
                <RepoIcon size={14} /> View repository
            </a>
        </p>
        <Collapsible header="Anecdote" isCollapsed={isCollapsed} setCollapsed={setCollapsed}>
            <div className={styles.anecdote}>
                {anecdotes.map(c => <p key={c}>{c}</p>)}
            </div>
        </Collapsible>
    </>
}

function Project({
    header,
    repoLink,
    content,
    tags,
    anecdotes,
    style,
    isCollapsed,
    setCollapsed
}: {
    header: string,
    repoLink: string,
    content: string[],
    tags: string[],
    anecdotes: string[],
    style?: CSSProperties,
    isCollapsed: boolean,
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}) {
    return <div className={`window ${styles.container}`} style={style}>
        <div className="title-bar">
            <div className="title-bar-text"><RepoIcon size={14} /> {header}</div>
            <div className="title-bar-controls">
                <button aria-label="Close"></button>
            </div>
        </div>
        <div className="window-body has-space">
            <ProjectBody
                repoLink={repoLink}
                content={content}
                tags={tags}
                anecdotes={anecdotes}
                isCollapsed={isCollapsed}
                setCollapsed={setCollapsed}
            />
        </div>
    </div>
}

export default Project;
