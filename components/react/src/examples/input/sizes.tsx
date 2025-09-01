import { Stack } from 'styled-system/jsx'
import { Input } from '@/components/ui'

export const App = () => {
  return (
    <Stack gap="4">
      <Input placeholder="size (sm)" size="sm" />
      <Input placeholder="size (md)" size="md" />
      <Input placeholder="size (lg)" size="lg" />
      <Input placeholder="size (xl)" size="xl" />
    </Stack>
  )
}
