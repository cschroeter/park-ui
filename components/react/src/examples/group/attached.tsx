import { Stack } from 'styled-system/jsx'
import { Badge, Button, Group } from '@/components/ui'

export const App = () => {
  return (
    <Stack gap="6">
      <Group attached>
        <Button variant="outline">Item 1</Button>
        <Button variant="outline">Item 2</Button>
      </Group>
      <Group attached>
        <Badge variant="solid">Commit status</Badge>
        <Badge variant="surface">90+</Badge>
      </Group>
    </Stack>
  )
}
