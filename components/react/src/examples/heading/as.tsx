import { Stack } from 'styled-system/jsx'
import { Heading } from '@/components/ui'

export const App = () => {
  return (
    <Stack>
      <Heading as="h1">Level 1</Heading>
      <Heading as="h2">Level 2</Heading>
      <Heading as="h3">Level 3</Heading>
    </Stack>
  )
}
