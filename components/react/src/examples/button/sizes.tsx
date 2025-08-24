import { Wrap } from 'styled-system/jsx'
import { Button } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="6">
      <Button size="2xl">Button</Button>
      <Button size="xl">Button</Button>
      <Button size="lg">Button</Button>
      <Button size="md">Button</Button>
      <Button size="sm">Button</Button>
      <Button size="xs">Button</Button>
    </Wrap>
  )
}
