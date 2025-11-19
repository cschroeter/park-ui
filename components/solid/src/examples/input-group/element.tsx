import { EuroIcon, InfoIcon, UserIcon } from 'lucide-solid'
import { Stack } from 'styled-system/jsx'
import { Input, InputGroup } from '@/components/ui'

export const App = () => {
  return (
    <Stack gap="4">
      <InputGroup.Root>
        <InputGroup.Control startElement={<UserIcon />}>
          <Input placeholder="Username" />
        </InputGroup.Control>
      </InputGroup.Root>

      <InputGroup.Root>
        <InputGroup.Control endElement={<EuroIcon />}>
          <Input placeholder="0.00" />
        </InputGroup.Control>
      </InputGroup.Root>

      <InputGroup.Root>
        <InputGroup.Control startElement={<EuroIcon />} endElement={<InfoIcon />}>
          <Input placeholder="0.00" />
        </InputGroup.Control>
      </InputGroup.Root>
    </Stack>
  )
}
