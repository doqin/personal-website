import { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

function Home() {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const setTimeInterval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(setTimeInterval);
        }
    }, []);

    function GetTimeOfDay(date: Date) {
        const hour = date.getHours();
        console.log(hour);
        if (hour > 6 && hour < 12) {
            return "Morning";
        }
        else if (hour >= 12 && hour < 18) {
            return "Afternoon";
        }
        else {
            return "Evening";
        }
    }
    return (<div>
        <Header/>
        <div className={styles.container}>
            <div className={styles.greeting}>
                <p>{`Good ${GetTimeOfDay(currentTime)}!`}</p>
            </div>
            <p>
                Welcome to my personal website
            </p>
            <p>
                Check out my <Link to="/projects">projects</Link>
            </p>
            <p>
                More about me <Link to="/about">here</Link>
            </p>
        </div>
    </div>)
}

export default Home;