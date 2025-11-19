import { SearchIcon, UserIcon } from 'lucide-solid'
import { Stack } from 'styled-system/jsx'
import { Input, InputGroup, Kbd } from '@/components/ui'

export const App = () => {
  return (
    <Stack gap="4">
      <InputGroup startElement={<UserIcon />}>
        <Input placeholder="Username" />
      </InputGroup>
      <InputGroup startElement="https://" startElementProps={{ color: 'fg.muted' }}>
        <Input ps="7ch" placeholder="yoursite.com" />
      </InputGroup>
      <InputGroup flex="1" startElement={<SearchIcon />} endElement={<Kbd>⌘K</Kbd>}>
        <Input placeholder="Search contacts" />
      </InputGroup>
      <InputGroup startElement="$" endElement="USD">
        <Input placeholder="0.00" />
      </InputGroup>
    </Stack>
  )
}
