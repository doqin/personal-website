import React, { type ReactNode } from "react";

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
                <div>
                    <h1>Oops! Something went wrong.</h1>
                    <details style={{ whiteSpace: "pre-wrap" }}>
                        {this.state.error?.message}
                    </details>
                    <span>Contact the dev: <a href="mailto:personal.azalea@gmail.com">personal.azalea@gmail.com</a></span>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;