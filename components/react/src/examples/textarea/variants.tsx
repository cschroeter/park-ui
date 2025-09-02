import { Stack } from 'styled-system/jsx'
import { Textarea } from '@/components/ui'

export const App = () => {
  return (
    <Stack gap="4">
      <Textarea placeholder="Outline" variant="outline" />
      <Textarea placeholder="Subtle" variant="subtle" />
      <Textarea placeholder="Flushed" variant="flushed" />
    </Stack>
  )
}
