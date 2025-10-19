import { DiamondIcon } from 'lucide-react'
import { Wrap } from 'styled-system/jsx'
import { Icon } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
  return (
    <Wrap gap="4">
      {sizes.map((size) => (
        <Icon key={size} size={size} color="colorPalette.solid.bg">
          <DiamondIcon />
        </Icon>
      ))}
    </Wrap>
  )
}
