import { CircleDotIcon } from 'lucide-react'
import { Wrap } from 'styled-system/jsx'
import { Button } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

  return (
    <Wrap gap="4">
      {sizes.map((size) => (
        <Button key={size} size={size}>
          Button <CircleDotIcon />
        </Button>
      ))}
    </Wrap>
  )
}
