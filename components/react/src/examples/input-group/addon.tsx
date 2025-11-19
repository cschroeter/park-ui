import { AtSignIcon, EuroIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Input, InputGroup } from '@/components/ui'

export const App = () => {
  return (
    <Stack gap="4">
      <InputGroup.Root>
        <InputGroup.Addon>https://</InputGroup.Addon>
        <Input placeholder="example.com" />
      </InputGroup.Root>

      <InputGroup.Root>
        <InputGroup.Addon>
          <AtSignIcon />
        </InputGroup.Addon>
        <Input placeholder="Username" />
      </InputGroup.Root>

      <InputGroup.Root>
        <InputGroup.Addon>
          <EuroIcon />
        </InputGroup.Addon>
        <Input placeholder="0.00" />
        <InputGroup.Addon>EUR</InputGroup.Addon>
      </InputGroup.Root>
    </Stack>
  )
}
