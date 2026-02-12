import { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import Circle from "../components/shapes/Circle";

function Home() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [{circleX, circleY}, setCirclePosition] = useState<{circleX: number, circleY: number}>({circleX: 0, circleY: 0});
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        const handleMouseMovement = (event: MouseEvent) => {
            setCirclePosition({circleX: event.clientX, circleY: event.clientY});
        }
        window.addEventListener('mousemove', handleMouseMovement);

        return () => {
            window.removeEventListener('mousemove', handleMouseMovement);
            clearInterval(interval);
        }
    }, []);

    function GetTimeOfDay(date: Date) {
        const hour = date.getHours();
        if (hour > 6 && hour < 12) {
            return "Morning";
        }
        else if (hour >= 12 && hour < 6) {
            return "Afternoon";
        }
        else {
            return "Evening";
        }
    }
    return (<div>
        <Header/>
        <Circle x={circleX} y={circleY} width={100} height={100}/>
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
        </div>
    </div>)
}

export default Home;