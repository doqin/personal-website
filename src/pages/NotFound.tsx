import Header from "../components/Header";
import { FileQuestionIcon } from "../components/icons";

const NotFound = () => {
    return (
        <div>
            <Header />
            <div className="flex items-center justify-center p-8">
                <div className="window" style={{ width: "22em" }}>
                    <div className="title-bar">
                        <div className="title-bar-text"><FileQuestionIcon size={14} /> File Not Found</div>
                        <div className="title-bar-controls">
                            <button aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="window-body has-space">
                        <p>The page you were looking for could not be found on this system.</p>
                    </div>
                    <div className="status-bar">
                        <p className="status-bar-field">Error 404</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
