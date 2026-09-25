import { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import { BalloonIcon, GlobeIcon, MailIcon, NotepadIcon, RepoIcon } from "../components/icons";
import ProfilePicture from "../components/ProfilePicture";

function Home() {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const setTimeInterval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(setTimeInterval);
        };
    }, []);

    function GetTimeOfDay(date: Date) {
        const hour = date.getHours();
        if (hour > 6 && hour < 12) {
            return "Morning";
        } else if (hour >= 12 && hour < 18) {
            return "Afternoon";
        } else {
            return "Evening";
        }
    }

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={`window ${styles.welcomeWindow}`}>
                    <div className="title-bar">
                        <div className="title-bar-text"><BalloonIcon size={14} /> Welcome</div>
                        <div className="title-bar-controls">
                            <button aria-label="Close"></button>
                        </div>
                    </div>
                    <div className={`window-body has-space ${styles.welcomeBody}`}>
                        <div className={styles.greeting}>
                            <p>{`Good ${GetTimeOfDay(currentTime)}!`}</p>
                        </div>
                        <p>Welcome to my personal website.</p>
                        <p>
                            Check out my <Link to="/projects">projects</Link>, or read on below to learn more about me.
                        </p>
                    </div>
                </div>

                <div className={`window ${styles.notepadWindow}`}>
                    <div className="title-bar">
                        <div className="title-bar-text"><NotepadIcon size={14} /> About_Khang.txt - Notepad</div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize"></button>
                            <button aria-label="Maximize"></button>
                            <button aria-label="Close"></button>
                        </div>
                    </div>
                    <div className={`window-body has-space ${styles.body}`}>
                        <fieldset>
                            <legend>Profile</legend>
                            <div className={styles.profileRow}>
                                <div className={styles.profileInfo}>
                                    <p className="header header-document">Tuấn Khang (Azalea) Nguyễn</p>
                                    <p className="instruction instruction-primary">Software engineering undergraduate at UIT-VNUHCM</p>
                                    <div className={styles.actions}>
                                        <a role="button" className={styles.actionButton} href="mailto:personal.azalea@gmail.com">
                                            <MailIcon size={14} /> Email
                                        </a>
                                        <a role="button" className={styles.actionButton} href="https://www.linkedin.com/in/tu%E1%BA%A5n-khang-nguy%E1%BB%85n-832510393/" target="_blank" rel="noreferrer">
                                            <GlobeIcon size={14} /> LinkedIn
                                        </a>
                                        <a role="button" className={styles.actionButton} href="https://github.com/doqin" target="_blank" rel="noreferrer">
                                            <RepoIcon size={14} /> GitHub
                                        </a>
                                    </div>
                                </div>
                                <ProfilePicture width="80px" height="80px" />
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>About Me</legend>
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
                        </fieldset>

                        <p className={styles.credits}>
                            Icons: <a href="https://p.yusukekamiyamane.com/" target="_blank" rel="noreferrer">Fugue Icons</a> by Yusuke Kamiyamane (CC BY 3.0)
                        </p>
                        <p className={styles.credits}>
                            Background: <a href="https://x.com/kakogakone" target="_blank" rel="noreferrer">@kakogakone</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
