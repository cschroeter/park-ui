import { Wrap } from 'styled-system/jsx'
import { Avatar } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

  return (
    <Wrap gap="4">
      {sizes.map((size) => (
        <Avatar.Root size={size} key={size}>
          <Avatar.Fallback name="Christian Busch" />
          <Avatar.Image src="https://avatars.githubusercontent.com/u/1846056?v=4" />
        </Avatar.Root>
      ))}
    </Wrap>
  )
}
