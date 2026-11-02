import type { CSSProperties } from "react";
import Layout from "../components/Layout";
import Project from "../components/Project";

type ProjectItem = {
    header: string,
    repoLink: string,
    content: string[],
    tags: string[],
    anecdotes?: string[],
    collection?: string
}

const projectList: ProjectItem[] = [
    {
        header: "ChitChat",
        repoLink: "https://github.com/doqin/chitchat",
        content: [
            "A simple P2P-based messaging app",
            "Many messaging apps nowadays are client-server based, which makes your privacy non-trivial. For an end-term project for my Visual Programming course, me and my friends made a LAN messaging app bundled with the client and the server to self-host."
        ],
        tags: ["C#", "WinForms", "TCP", "UDP"],
        anecdotes: [
            "This was my first project that I worked on in a team. Up until now I mostly worked alone with my personal projects to learn computer science concepts or software engineering in general. Although this was for an endterm project and didn't need to be anything special to get a decent grade, I wanted to prove myself that I could design and build a medium sized project with a frontend, a backend and a database just like a real one in production would.",
            "There was one problem, I was the only one in the group who had experience in software architectures. I was conflicted whether to take the easy path and use all kinds of dependencies that abstract the complicated stuff or use the barebones of what we had learnt up to now, that being raw Sockets, SQL and Windows Forms. I ended up picking the latter as a challenge, despite only knowing a sliver of writing custom networking protocols with TCP; A bit of experience with MSSQL and SQLite; And some past tinkering with Qt. Yeah... Not a lot of experience but at least I got some, right?",
            "I encountered many many problems once the project gets more defined and refined, and I ended up engineering quite a complicated network protocol after concurrency and file transferring beat me up hard. But I learnt a lot in the meantime and the end result was more than I could've ever asked for."
        ]
    },
    {
        collection: "Compiler collection",
        header: "banh (bánh)",
        repoLink: "https://github.com/doqin/banh",
        content: [
            "A compiled programming language using Vietnamese syntax, powered by LLVM. (1st iteration) (archived)"
        ],
        tags: ["Golang", "LLVM", "Compiler"],
        anecdotes: [
            "I was pretty interested in compilers after learning programming in C/C++. I had heard prior that Go was simple like C and supports UTF-8 by default for strings so I thought it was a perfect fit for this project.",
            "Working with the barebone type system of Go was quite fun and I learnt how OOP works at an unabstracted level while creating the AST interface and its nodes. Iterating and refactoring was simple and quick, and I got pretty far into developing the language.",
            "I did eventually stop as I thought the Go binding for LLVM was a bit unstable and changes too often."
        ]
    },
    {
        collection: "Compiler collection",
        header: "Bao",
        repoLink: "https://github.com/bao-langu/bao",
        content: [
            "A compiled programming language using Vietnamese syntax, powered by LLVM. (2nd iteration) (on hiatus)"
        ],
        tags: ["C++", "LLVM", "Compiler"],
        anecdotes: [
            "This was my proper vision for my programming language. I carried most of the ideas from 'banh' over while rewritting in C++.",
            "I'll be honest, I never really liked working with C++. It's too complicated, nothing is standardized. Like the build system, package manager and the absence of a module system sucks mega balls. And it's proven to be right when trying to install LLVM for this project. I know the LLVM project is massive but oh lord why can't we have nice things for cross-platform development in C++. Vcpkg just loves rebuilding LLVM, something nobody wishes for, even upon your worst enemy.",
            "I got burnt out at some point into the project as juggling between platforms to keep the behaviours in check was tiring as all hell. I'll keep you in the loop once I get back on this"
        ]
    },
    {
        collection: "Compiler collection",
        header: "NEN (N.Ề.N.)",
        repoLink: "https://github.com/doqin/NEN",
        content: [
            "A .NET language using Vietnamese syntax. This project includes the compiler and an IDE to fully feel the language."
        ],
        tags: [
            "C#", ".NET", "Reflection", "WPF", "Compiler"
        ],
        anecdotes: [
            "After naively combatting with LLVM's monstrous complexity, I eventually settled with something more managable for a kernel space newbie like myself.",
            "Having had experience with .NET and C# from my previous project (ChitChat), I thought about creating a language for .NET since it'll be more beneficial with the already established ecosystem of libraries and frameworks. N.Ề.N. follows the same idea with a programming language using Vietnamese as the syntax since it's an easy reason to get you motivated to create a toy language.",
            "I never really had a problem with the languages I use to programme that I needed to create my own, but it just felt right to really see a compiler inside out through the eyes of a language designer.",
            "C# and .NET as a whole has quite a good balance of low-level and high-level designs that keeps me grounded when deciding what to do for NEN."
        ]
    },
    {
        header: "macaccord",
        repoLink: "https://github.com/doqin/macaccord",
        content: [
            "Discord client rewritten in SwiftUI"
        ],
        tags: [
            "Swift", "SwiftUI", "Reverse engineering"
        ],
        anecdotes: [
            "I was kinda unhappy with having electron running in the background eating all my ram despite not needing to render anything. Even on apple silicon, electron still eats your ram like breakfast, so I wanted to remake Discord in native frameworks because the existing projects was either deprecated or not up to my standard of a macOS app."
        ]
    },
    {
        header: "UITNotify",
        repoLink: "https://github.com/doqin/UITNotify",
        content: [
            "An Android app that notifies whenever there are new announcements on the UIT website news board"
        ],
        tags: [
            "Kotlin", "Web Scraping", "Jetpack Compose"
        ],
        anecdotes: [
            "Having missed some important announcements from my university, I wanted to fix this issue myself by creating an app that scrapes the school's news board once a day or more and notify me for new articles. This was actually my first ever personal project that had an end goal."
        ]
    },
    {
        header: "dqcss",
        repoLink: "https://github.com/doqin/dqcss",
        content: ["A small CSS library with a BIOS-screen look: VGA blue and cyan, square corners and hard drop shadows. This website is built with it."],
        tags: ["CSS", "Design system"]
    },
    {
        header: "libDQG",
        repoLink: "https://github.com/doqin/libDQG",
        content: ["A personal game engine written in Rust, with Rhai scripting."],
        tags: ["Rust", "Game engine", "3D", "Rhai"]
    },
    {
        header: "mai_os",
        repoLink: "https://github.com/doqin/mai_os",
        content: ["A toy OS for learning low level systems."],
        tags: ["Rust", "OS"]
    },
    {
        header: "tessera",
        repoLink: "https://github.com/doqin/tessera",
        content: ["Exploring micro frontend architecture and using it with Next.js to build an interactive UI for AI agents (UIT.SE.66)."],
        tags: ["TypeScript", "Next.js", "Micro frontend", "AI agent"]
    },
    {
        header: "barnacle",
        repoLink: "https://github.com/doqin/barnacle",
        content: ["A Discord bot with a character sheet, persistent memory, and an LLM brain (Groq free tier + Supabase)."],
        tags: ["TypeScript", "Discord", "LLM", "Supabase"]
    },
    {
        header: "dx9gf",
        repoLink: "https://github.com/doqin/dx9gf",
        content: ["A simple DirectX 9 game framework for learning (SE102), with a demo game project."],
        tags: ["C++", "DirectX 9", "Game dev"]
    }
]

function Projects() {
    return (
        <Layout>
            <div className="dq-stack dq-stack--lg">
                <h1>Projects</h1>
                <div className="dq-grid" style={{ "--dq-grid-min": "22rem", alignItems: "start" } as CSSProperties}>
                    {projectList.map(p => <Project key={p.header} {...p} />)}
                </div>
            </div>
        </Layout>
    );
}

export default Projects;
