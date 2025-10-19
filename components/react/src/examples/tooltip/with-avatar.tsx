import { useId } from 'react'
import { Avatar, Tooltip } from '@/components/ui'

export const App = () => {
  const id = useId()

  return (
    <Tooltip ids={{ trigger: id }} content="Christian Busch is online">
      <Avatar.Root ids={{ root: id }} size="lg">
        <Avatar.Image src="https://shorturl.at/gaV8r" />
        <Avatar.Fallback name="Christian Busch" />
      </Avatar.Root>
    </Tooltip>
  )
}
