'use client'
import { Component } from 'react'
import { Text } from '@/components/ui'

interface ErrorBoundaryProps {
  componentName: string
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(): void {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <Text color="red.11">Error rendering component: {this.props.componentName}</Text>
    }
    return this.props.children
  }
}
