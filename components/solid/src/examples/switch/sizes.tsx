import { For } from 'solid-js'
import { Wrap } from 'styled-system/jsx'
import { Switch } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg'] as const

  return (
    <Wrap gap="4">
      <For each={sizes}>
        {(size) => (
          <Switch.Root size={size}>
            <Switch.HiddenInput />
            <Switch.Control />
            <Switch.Label />
          </Switch.Root>
        )}
      </For>
    </Wrap>
  )
}
