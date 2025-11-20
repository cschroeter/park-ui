import { For } from 'solid-js'
import { Stack } from 'styled-system/jsx'
import { Code } from '@/components/ui'

export const App = () => {
  const variants = ['solid', 'surface', 'outline', 'subtle', 'plain'] as const
  return (
    <Stack gap="4" alignItems="start">
      <For each={variants}>{(variant) => <Code variant={variant}>console.log()</Code>}</For>
    </Stack>
  )
}
