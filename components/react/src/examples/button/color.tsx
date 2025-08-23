import { HStack } from 'styled-system/jsx'
import { Button } from '@/components/ui'

export const Exampe = () => {
  return (
    <HStack>
      <Button colorPalette="red">Button</Button>
      <Button colorPalette="green">Button</Button>
      <Button colorPalette="blue">Button</Button>
      <Button colorPalette="amber">Button</Button>
    </HStack>
  )
}
