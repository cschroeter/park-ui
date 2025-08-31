import { Stack } from 'styled-system/jsx'
import { Code } from '@/components/ui'

export const App = () => {
  return (
    <Stack alignItems="start">
      <Code size="sm">console.log()</Code>
      <Code size="md">console.log()</Code>
      <Code size="lg">console.log()</Code>
    </Stack>
  )
}
