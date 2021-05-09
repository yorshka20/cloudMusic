import React from "react";

interface Props {
  children: JSX.Element;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.info("ErrorBoundary Catched");
    console.error(error, errorInfo);
  }

  render(): JSX.Element {
    if (this.state.hasError) {
      return (
        <div
          style={{
            height: "100%",
            background: "black",
            color: "#fff",
            textAlign: "center",
          }}
        >
          抱歉，程序出错
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
