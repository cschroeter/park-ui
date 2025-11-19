import { Stack } from 'styled-system/jsx'
import { Input, InputGroup } from '@/components/ui'

export const App = () => {
  return (
    <Stack gap="4">
      <InputGroup startAddon="https://">
        <Input placeholder="yoursite.com" />
      </InputGroup>
      <InputGroup endAddon=".com">
        <Input placeholder="yoursite" />
      </InputGroup>
      <InputGroup startAddon="$" endAddon="USD">
        <Input placeholder="0.00" />
      </InputGroup>
    </Stack>
  )
}
