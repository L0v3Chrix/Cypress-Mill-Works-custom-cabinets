'use client'

import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('CMCC Website Error:', error, errorInfo)
    
    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // TODO: Add error logging service (Sentry, LogRocket, etc.)
    }
    
    this.setState({
      error,
      errorInfo,
    })
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-limestone flex items-center justify-center px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="mb-8">
              <h1 className="font-craftsman text-4xl text-workshop-charcoal mb-4">
                Something went wrong
              </h1>
              <p className="text-cedar text-lg mb-6">
                We apologize for the inconvenience. Our craftsmen are working to fix this issue.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-limestone">
                <h2 className="font-workshop text-workshop-charcoal mb-4">
                  In the meantime, you can:
                </h2>
                <ul className="text-left space-y-2 text-cedar">
                  <li className="flex items-start">
                    <span className="text-barn-red mr-2">•</span>
                    <span>Call us directly at (512) 555-0123</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-barn-red mr-2">•</span>
                    <span>Email mike@cypressmillwork.com</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-barn-red mr-2">•</span>
                    <span>Visit our workshop in Spicewood, TX</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-barn-red mr-2">•</span>
                    <span>Follow @cypressmillworkscc on Instagram</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/'}
                className="bg-barn-red text-white px-6 py-3 rounded-lg font-workshop hover:bg-barn-red/90 transition-colors"
              >
                Return Home
              </button>
              <button
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                className="border-2 border-barn-red text-barn-red px-6 py-3 rounded-lg font-workshop hover:bg-barn-red hover:text-white transition-colors"
              >
                Try Again
              </button>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left bg-red-50 p-4 rounded-lg border border-red-200">
                <summary className="cursor-pointer text-red-800 font-workshop">
                  Development Error Details (click to expand)
                </summary>
                <pre className="mt-4 text-xs text-red-700 overflow-auto">
                  {this.state.error.stack}
                </pre>
                {this.state.errorInfo && (
                  <pre className="mt-2 text-xs text-red-700 overflow-auto">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </details>
            )}
            
            <div className="mt-8 text-center">
              <p className="signature text-sm text-cedar/70">
                "Even when technology fails, craftsmanship endures"
              </p>
              <p className="text-xs text-cedar/50 mt-2">
                — Mike Switzer & The CMCC Workshop Team
              </p>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}