import Header from "../components/Header";
import Project from "../components/Project";
import styles from "../styles/Projects.module.css";

const projectList = [
    {
        header: "ChitChat",
        repoLink: "https://github.com/doqin/chitchat",
        content: [
            "A simple P2P-based messaging app",
            "Many messaging apps nowadays are client-server based, which makes your privacy non-trivial. For an end-term project for my Visual Programming course, me and my friends made a LAN messaging app bundled with the client and the server to self-host"
        ],
        tags: ["C#", "WinForms", "TCP", "UDP"],
        anecdotes: [
            "This was my first project that I worked on in a team. Up until now I mostly worked alone with my personal projects to learn computer science concepts or software engineering in general. Although this was for an endterm project and didn't need to be anything special to get a decent grade, I wanted to prove myself that I could design and build a medium sized project with a frontend, a backend and a database just like a real one in production would.",
            "There was one problem, I was the only one in the group who had experience in software architectures. I was conflicted whether to take the easy path and use all kinds of dependencies that abstract the complicated stuff or use the barebones of what we had learnt up to now, that being raw Sockets, SQL and Windows Forms. I ended up picking the latter as a challenge, despite only knowing a sliver of writing custom networking protocols with TCP; A bit of experience with MSSQL and SQLite; And some past tinkering with Qt. Yeah... Not a lot of experience but at least I got some, right?",
            "I encountered many many problems once the project gets more defined and refined, and I ended up engineering quite a complicated network protocol after concurrency and file transferring beat me up hard. But I learnt a lot in the meantime and the end result was more than I could've ever asked for."
        ]
    },
    {
        header: "NEN (N.Ề.N.)",
        repoLink: "https://github.com/doqin/NEN",
        content: [
            "A .NET language using Vietnamese syntax. This project includes the compiler and an IDE to fully feel the language"
        ],
        tags: [
            "C#", ".NET", "Reflection", "WPF", "Compiler"
        ],
        anecdotes: [
            "After naively combatting with LLVM's monstrous complexity, I eventually settled with something more managable for a kernel space newbie like myself.",
            "Having had experience with .NET and C# from my previous project (ChitChat), I thought about creating a language for .NET since it'll be more beneficial with the already established ecosystem of libraries and frameworks. N.Ề.N. follows the same idea with a programming language using Vietnamese as the syntax since it's an easy reason to get you motivated to create a toy language.",
            "I never really had a problem with the languages I use to programme that I needed to create my own, but it just felt right to really see a compiler inside out through the eyes of a language designer.", 
            "C# and .NET as a whole has quite a good balance of low-level and high-level designs that keeps me grounded when deciding what to do for NEN"
        ]
    }
]

function Projects() {
    return <div>
        <Header/>
        <div className={styles.content}>
            {projectList.map(p => 
            <><Project header={p.header} repoLink={p.repoLink} content={p.content} tags={p.tags} anecdotes={p.anecdotes}/><br/></>)}
        </div>
    </div>
}

export default Projects;