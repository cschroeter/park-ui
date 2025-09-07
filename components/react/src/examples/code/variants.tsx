import { Stack } from 'styled-system/jsx'
import { Code } from '@/components/ui'

export const App = () => {
  return (
    <Stack alignItems="start">
      <Code variant="solid">console.log()</Code>
      <Code variant="surface">console.log()</Code>
      <Code variant="outline">console.log()</Code>
      <Code variant="subtle">console.log()</Code>
      <Code variant="plain">console.log()</Code>
    </Stack>
  )
}
