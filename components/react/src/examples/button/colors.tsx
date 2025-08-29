import { Wrap } from 'styled-system/jsx'
import { Button } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="4">
      <Button colorPalette="red">Button</Button>
      <Button colorPalette="green">Button</Button>
      <Button colorPalette="blue">Button</Button>
      <Button colorPalette="amber">Button</Button>
    </Wrap>
  )
}
