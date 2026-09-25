import Header from "../components/Header"
import { StickyNoteIcon } from "../components/icons";

const Notes = () => {
    return (
        <div>
            <Header />
            <div className="flex items-center justify-center p-8">
                <div className="window" style={{ width: "24em" }}>
                    <div className="title-bar">
                        <div className="title-bar-text"><StickyNoteIcon size={14} /> Notes - Under Construction</div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize"></button>
                            <button aria-label="Maximize"></button>
                            <button aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="window-body has-space">
                        <p>This page is under construction! :3</p>
                        <div role="progressbar" className="marquee">
                            <div></div>
                        </div>
                    </div>
                    <div className="status-bar">
                        <p className="status-bar-field">Status: Building...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes
