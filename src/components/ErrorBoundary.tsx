import React, { type ReactNode } from "react";
import { WarningIcon } from "./icons";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return this.props.fallback ?? (
                <div style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "26em",
                    maxWidth: "90vw"
                }}>
                    <div className="window">
                        <div className="title-bar">
                            <div className="title-bar-text"><WarningIcon size={14} /> Personal Website - Error</div>
                            <div className="title-bar-controls">
                                <button aria-label="Close"></button>
                            </div>
                        </div>
                        <div className="window-body has-space">
                            <p><WarningIcon size={16} /> Oops! Something went wrong.</p>
                            <details style={{ whiteSpace: "pre-wrap" }}>
                                {this.state.error?.message}
                            </details>
                            <p>Contact the dev: <a href="mailto:personal.azalea@gmail.com">personal.azalea@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;