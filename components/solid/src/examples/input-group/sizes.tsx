import { EuroIcon, InfoIcon } from 'lucide-solid'
import { For } from 'solid-js/web'
import { Stack } from 'styled-system/jsx'
import { Input, InputGroup } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
  return (
    <Stack gap="4">
      <For each={sizes}>
        {(size) => (
          <InputGroup size={size} startElement={<EuroIcon />} endElement={<InfoIcon />}>
            <Input placeholder="0.00" size={size} />
          </InputGroup>
        )}
      </For>
    </Stack>
  )
}
