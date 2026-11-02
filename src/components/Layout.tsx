import { useEffect, useState, type PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";

const routes = [
    { path: "/", label: "Home" },
    { path: "/blog", label: "Blog" },
    { path: "/notes", label: "Notes" },
    { path: "/projects", label: "Projects" },
    { path: "/games", label: "Games" },
];

type Theme = "light" | "dark";

function readTheme(): Theme {
    try {
        return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    } catch {
        return "light";
    }
}

function Layout({ children }: PropsWithChildren) {
    const { pathname } = useLocation();
    const [theme, setTheme] = useState<Theme>(readTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem("theme", theme);
        } catch {
            // storage unavailable; the theme just won't persist
        }
    }, [theme]);

    return (
        <>
            <header className="dq-navbar">
                <div className="dq-container dq-navbar__inner">
                    <Link to="/" className="dq-navbar__brand">pup in the pub</Link>
                    <nav aria-label="Main">
                        <ul className="dq-navbar__links" style={{ margin: 0 }}>
                            {routes.map(r => (
                                <li key={r.path}>
                                    <Link
                                        to={r.path}
                                        className="dq-navbar__link"
                                        aria-current={pathname === r.path ? "page" : undefined}
                                    >
                                        {r.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button
                        type="button"
                        className="dq-navbar__link"
                        style={{ marginLeft: "auto" }}
                        aria-pressed={theme === "dark"}
                        onClick={() => setTheme(t => (t === "dark" ? "light" : "dark"))}
                    >
                        {theme === "dark" ? "Light" : "Dark"} mode
                    </button>
                </div>
            </header>
            <main className="dq-container page">{children}</main>
            <footer className="dq-statusbar">
                <div className="dq-container dq-statusbar__inner">
                    <span>© {new Date().getFullYear()} Tuấn Khang (Azalea) Nguyễn</span>
                    <span>Built with <a href="https://doqin.github.io/dqcss/">dqcss</a></span>
                </div>
            </footer>
        </>
    );
}

export default Layout;
