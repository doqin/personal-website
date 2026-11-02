import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function getTimeOfDay(date: Date) {
    const hour = date.getHours();
    if (hour > 6 && hour < 12) {
        return "Morning";
    } else if (hour >= 12 && hour < 18) {
        return "Afternoon";
    } else {
        return "Evening";
    }
}

function Home() {
    return (
        <Layout>
            <div className="dq-stack dq-stack--lg">
                <section className="dq-panel dq-panel--checker">
                    <div className="dq-panel__body">
                        <h1>{`Good ${getTimeOfDay(new Date())}!`}</h1>
                        <p>Welcome to my personal website.</p>
                        <p>
                            Check out my <Link to="/projects">projects</Link>, or read on below to learn more about me.
                        </p>
                    </div>
                </section>

                <section className="dq-panel">
                    <h2 className="dq-panel__title">Profile</h2>
                    <div className="profile">
                        <div className="dq-stack">
                            <h2>Tuấn Khang (Azalea) Nguyễn</h2>
                            <p className="muted">Software engineering undergraduate at UIT-VNUHCM</p>
                            <div className="actions">
                                <a className="dq-btn dq-btn--primary" href="https://doqin.github.io/cv/" target="_blank" rel="noreferrer">CV</a>
                                <a className="dq-btn dq-btn--secondary" href="mailto:personal.azalea@gmail.com">Email</a>
                                <a className="dq-btn dq-btn--secondary" href="https://www.linkedin.com/in/tu%E1%BA%A5n-khang-nguy%E1%BB%85n-832510393/" target="_blank" rel="noreferrer">LinkedIn</a>
                                <a className="dq-btn dq-btn--secondary" href="https://github.com/doqin" target="_blank" rel="noreferrer">GitHub</a>
                            </div>
                        </div>
                        <a href="https://github.com/doqin">
                            <img
                                className="profile__avatar"
                                alt="Profile picture"
                                src="https://avatars.githubusercontent.com/u/175150133"
                            />
                        </a>
                    </div>
                </section>

                <section className="dq-panel">
                    <h2 className="dq-panel__title">About me</h2>
                    <p>
                        Hello, I'm Khang, an undergraduate in software engineering
                        at <a href="https://uit.edu.vn">UIT-VNUHCM.</a>
                    </p>
                    <p>
                        I like to work with desktop applications but I am also
                        decently capable with mobile and web technology. Most of the
                        time I'd be working on the backend, I <i>rarely</i> care
                        about making the frontend flashy, just functional (you can
                        probably tell from this website alone)
                    </p>
                    <p>
                        Some languages I often use includes <i>C#</i>, <i>C++</i>,{" "}
                        <i>Typescript</i> and <i>Python</i>, but I usually don't
                        mind the language, just the frameworks and libraries. I do
                        sometimes try out modern languages like <i>Swift</i> and{" "}
                        <i>Rust</i> for specific tasks but it's not a common
                        occurence.
                    </p>
                    <div className="tags">
                        {["C#", "C++", "TypeScript", "Python", "Swift", "Rust"].map(t => (
                            <span className="dq-badge dq-badge--secondary" key={t}>{t}</span>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default Home;
