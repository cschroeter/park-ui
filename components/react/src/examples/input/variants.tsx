import { Stack } from 'styled-system/jsx'
import { Input } from '@/components/ui'

export const App = () => {
  return (
    <Stack gap="4">
      <Input placeholder="Outline" variant="outline" />
      <Input placeholder="Subtle" variant="subtle" />
      <Input placeholder="Flushed" variant="flushed" />
    </Stack>
  )
}
