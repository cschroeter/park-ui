import { For } from 'solid-js'
import { Stack, Wrap } from 'styled-system/jsx'
import { Code } from '@/components/ui'

export const App = () => {
  const colors = ['blue', 'green', 'amber', 'red'] as const
  return (
    <Stack gap="4" align="flex-start">
      <For each={colors}>
        {(colorPalette) => (
          <Wrap gap="4">
            <Code colorPalette={colorPalette} variant="solid">
              console.log()
            </Code>
            <Code colorPalette={colorPalette} variant="outline">
              console.log()
            </Code>
            <Code colorPalette={colorPalette} variant="subtle">
              console.log()
            </Code>
            <Code colorPalette={colorPalette} variant="surface">
              console.log()
            </Code>
          </Wrap>
        )}
      </For>
    </Stack>
  )
}
