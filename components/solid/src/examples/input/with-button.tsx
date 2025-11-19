import { Button, Group, Input } from '@/components/ui'

export const App = () => {
  return (
    <Group attached width="full">
      <Input flex="1" placeholder="Enter your email" />
      <Button variant="surface">Submit</Button>
    </Group>
  )
}
