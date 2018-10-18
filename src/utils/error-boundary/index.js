import React from 'react';


export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  /* istanbul ignore next */
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.error('Error: ', error);
    console.error('Info: ', info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return children;
  }
}
