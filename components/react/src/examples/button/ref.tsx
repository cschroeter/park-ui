'use client'
import { useRef } from 'react'
import { Button } from '@/components/ui'

export const App = () => {
  const ref = useRef<HTMLButtonElement>(null)
  return <Button ref={ref}>Click me</Button>
}
