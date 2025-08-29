import { PhoneIcon } from 'lucide-react'
import { Wrap } from 'styled-system/jsx'
import { IconButton } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

  return (
    <Wrap gap="4">
      {sizes.map((size) => (
        <IconButton key={size} size={size} aria-label="Call us">
          <PhoneIcon />
        </IconButton>
      ))}
    </Wrap>
  )
}
