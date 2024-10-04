import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Xatolik:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Biror narsa noto'g'ri ketdi.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
