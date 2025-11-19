import { EuroIcon } from 'lucide-solid'
import { For } from 'solid-js'
import { Stack } from 'styled-system/jsx'
import { Group, Input, InputAddon } from '@/components/ui'

export const App = () => {
  const sizes = ['sm', 'md', 'lg', 'xl'] as const
  return (
    <Stack gap="4">
      <For each={sizes}>
        {(size) => (
          <Group attached>
            <InputAddon size={size}>
              <EuroIcon />
            </InputAddon>
            <Input placeholder="0.00" size={size} />
            <InputAddon>EUR</InputAddon>
          </Group>
        )}
      </For>
    </Stack>
  )
}
