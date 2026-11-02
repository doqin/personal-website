import { RepoLink } from "./RepoLink";

type ProjectProps = {
    header: string,
    repoLink: string,
    content: string[],
    tags: string[],
    anecdotes?: string[],
    collection?: string
}

function Project({ header, repoLink, content, tags, anecdotes, collection }: ProjectProps) {
    return <section className="dq-panel">
        <h2 className="dq-panel__title">{header}</h2>
        {collection && <p className="muted">Part of: {collection}</p>}
        {content.map(c => <p key={c}>{c}</p>)}
        <div className="tags">
            {tags.map(t => <span className="dq-badge dq-badge--secondary" key={t}>{t}</span>)}
        </div>
        <div className="actions">
            <RepoLink href={repoLink} />
        </div>
        {anecdotes && anecdotes.length > 0 && (
            <details className="anecdote">
                <summary>Anecdote</summary>
                <div className="anecdote__body">
                    {anecdotes.map(c => <p key={c}>{c}</p>)}
                </div>
            </details>
        )}
    </section>
}

export default Project;
