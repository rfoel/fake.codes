import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  message?: string
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message }
  }

  public render() {
    if (this.state.hasError) {
      return <h1>{this.state.message}</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
