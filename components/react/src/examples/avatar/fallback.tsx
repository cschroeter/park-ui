import { Wrap } from 'styled-system/jsx'
import { Avatar } from '@/components/ui'

export const App = () => {
  return (
    <Wrap gap="4">
      <Avatar.Root>
        <Avatar.Fallback name="Christian Busch" />
        <Avatar.Image src="https://bit.ly/broken-link" />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Fallback />
        <Avatar.Image src="https://bit.ly/broken-link" />
      </Avatar.Root>
    </Wrap>
  )
}
