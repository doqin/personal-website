import Header from "../components/Header";

function About() {
    return <div>
        <Header/>
        <div style={{padding: "0 5em 0 5em"}}>
            <h3>Hello, I'm Khang, an undergraduate in software engineering at <a href="https://uit.edu.vn">UIT-VNUHCM.</a></h3>
            <p>
                I like to work with desktop applications but I am also decently capable with mobile and web technology. Most of the time I'd be working on the backend, I <i>rarely</i> care about making the frontend flashy, just functional (you can probably tell from this website alone)
            </p>
            <p>
                Some languages I often use includes <i>C#</i>, <i>C++</i>, <i>Typescript</i> and <i>Python</i>, but I usually don't mind the language, just the frameworks and libraries. I do sometimes try out modern languages like <i>Swift</i> and <i>Rust</i> for specific tasks but it's not a common occurence.
            </p>
        </div>
        
    </div>
}

export default About;