import { For } from 'solid-js'
import { Stack } from 'styled-system/jsx'
import { Code } from '@/components/ui'

export const App = () => {
  const sizes = ['sm', 'md', 'lg', 'xl'] as const
  return (
    <Stack gap="4" alignItems="start">
      <For each={sizes}>{(size) => <Code size={size}>console.log()</Code>}</For>
    </Stack>
  )
}
