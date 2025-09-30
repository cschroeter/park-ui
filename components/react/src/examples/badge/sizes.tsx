import { StarIcon } from 'lucide-react'
import { Wrap } from 'styled-system/jsx'
import { Badge } from '@/components/ui'

export const App = () => {
  const sizes = ['sm', 'md', 'lg', 'xl'] as const
  return (
    <Wrap gap="4">
      {sizes.map((size) => (
        <Badge key={size} size={size}>
          <StarIcon />
          Badge
        </Badge>
      ))}
    </Wrap>
  )
}
