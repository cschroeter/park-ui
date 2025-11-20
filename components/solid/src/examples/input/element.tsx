import { Euro, Info, User } from 'lucide-solid'
import { Stack } from 'styled-system/jsx'
import { Input, InputGroup } from '@/components/ui'

export const App = () => {
  return (
    <Stack gap="4">
      <InputGroup startElement={<User />}>
        <Input placeholder="Username" />
      </InputGroup>

      <InputGroup endElement={<Euro />}>
        <Input placeholder="0.00" />
      </InputGroup>

      <InputGroup startElement={<Euro />} endElement={<Info />}>
        <Input placeholder="0.00" />
      </InputGroup>
    </Stack>
  )
}
