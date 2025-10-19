import { Stack } from 'styled-system/jsx'
import { Textarea } from '@/components/ui'

export const App = () => {
  return (
    <Stack gap="4">
      <Textarea placeholder="size (sm)" size="sm" />
      <Textarea placeholder="size (md)" size="md" />
      <Textarea placeholder="size (lg)" size="lg" />
      <Textarea placeholder="size (xl)" size="xl" />
    </Stack>
  )
}
