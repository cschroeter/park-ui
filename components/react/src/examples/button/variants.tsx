import { Wrap } from 'styled-system/jsx'
import { Button } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="6">
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </Wrap>
  )
}
