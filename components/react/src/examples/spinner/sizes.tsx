import { Wrap } from 'styled-system/jsx'
import { Spinner } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

  return (
    <Wrap gap="4">
      {sizes.map((size) => (
        <Spinner key={size} size={size} />
      ))}
    </Wrap>
  )
}
