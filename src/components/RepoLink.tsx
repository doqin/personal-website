export function RepoLink({ href }: { href: string }) {
    return (
        <a className="dq-btn dq-btn--secondary" href={href} target="_blank" rel="noreferrer">
            View repository
        </a>
    );
}
