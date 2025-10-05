'use client'
import { useRef } from 'react'
import { Text } from '@/components/ui'

export const App = () => {
  const ref = useRef<HTMLParagraphElement>(null)
  return <Text ref={ref}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
}
