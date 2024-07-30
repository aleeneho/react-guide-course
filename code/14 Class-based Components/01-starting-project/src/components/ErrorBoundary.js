import { Component } from 'react';

class ErrorBoundary extends Component {
  componentDidCatch() {}

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
