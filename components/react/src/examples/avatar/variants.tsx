import { Wrap } from 'styled-system/jsx'
import { Avatar } from '@/components/ui'

export const App = () => {
  const variants = ['solid', 'surface', 'subtle', 'outline'] as const

  return (
    <Wrap gap="4">
      {variants.map((variant) => (
        <Avatar.Root variant={variant} size="lg" key={variant}>
          <Avatar.Fallback name="Christian Busch" />
        </Avatar.Root>
      ))}
    </Wrap>
  )
}
