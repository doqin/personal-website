import Layout from "../components/Layout";

type Game = {
    title: string,
    url: string,
    description: string,
    tags: string[]
}

const games: Game[] = [
    {
        title: "Vọng Archive",
        url: "https://vong.doqin.io.vn/",
        description: "An interactive story where you read through four characters' diaries and uncover their shared story.",
        tags: ["Web", "Interactive", "Story"]
    }
];

function Games() {
    return (
        <Layout>
            <div className="dq-stack dq-stack--lg">
                <h1>Games</h1>
                <div className="dq-grid" style={{ alignItems: "start" }}>
                    {games.map(g => (
                        <section className="dq-panel" key={g.url}>
                            <h2 className="dq-panel__title">{g.title}</h2>
                            <p>{g.description}</p>
                            <div className="tags">
                                {g.tags.map(t => <span className="dq-badge dq-badge--secondary" key={t}>{t}</span>)}
                            </div>
                            <div className="actions">
                                <a className="dq-btn dq-btn--primary" href={g.url} target="_blank" rel="noreferrer">Play</a>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Games;
