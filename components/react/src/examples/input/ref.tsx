'use client'
import { useRef } from 'react'
import { Input } from '@/components/ui'

export const App = () => {
  const ref = useRef<HTMLInputElement>(null)
  return <Input ref={ref} />
}
