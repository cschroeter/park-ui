import { EuroIcon, InfoIcon } from 'lucide-solid'
import { For } from 'solid-js/web'
import { Stack } from 'styled-system/jsx'
import { Input, InputGroup } from '@/components/ui'

export const App = () => {
  const variants = ['outline', 'subtle', 'surface', 'flushed'] as const
  return (
    <Stack gap="4">
      <For each={variants}>
        {(variant) => (
          <InputGroup startElement={<EuroIcon />} endElement={<InfoIcon />}>
            <Input placeholder="0.00" variant={variant} />
          </InputGroup>
        )}
      </For>
    </Stack>
  )
}
