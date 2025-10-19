import { Wrap } from 'styled-system/jsx'
import { Button } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="4">
      <Button variant="solid">Solid</Button>
      <Button variant="surface">Surface</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="plain">Plain</Button>
    </Wrap>
  )
}
