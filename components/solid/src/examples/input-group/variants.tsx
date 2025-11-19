import { GlobeIcon, InfoIcon } from 'lucide-solid'
import { For } from 'solid-js'
import { Stack } from 'styled-system/jsx'
import { Input, InputGroup } from '@/components/ui'

export const App = () => {
  const variants = ['outline', 'subtle', 'surface'] as const

  return (
    <Stack gap="4">
      <For each={variants}>
        {(variant) => (
          <InputGroup.Root variant={variant}>
            <InputGroup.Addon>https://</InputGroup.Addon>
            <InputGroup.Control startElement={<GlobeIcon />} endElement={<InfoIcon />}>
              <Input borderRadius="0" placeholder="example.com" variant={variant} />
            </InputGroup.Control>
            <InputGroup.Addon>.com</InputGroup.Addon>
          </InputGroup.Root>
        )}
      </For>
    </Stack>
  )
}
