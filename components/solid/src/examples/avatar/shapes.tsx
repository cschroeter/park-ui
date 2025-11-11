import { For } from 'solid-js'
import { Wrap } from 'styled-system/jsx'
import { Avatar } from '@/components/ui'

export const App = () => {
  const shapes = ['square', 'rounded', 'full'] as const

  return (
    <Wrap gap="4">
      <For each={shapes}>
        {(shape) => (
          <Avatar.Root size="lg" shape={shape}>
            <Avatar.Fallback name="Christian Busch" />
            <Avatar.Image src="https://avatars.githubusercontent.com/u/1846056?v=4" />
          </Avatar.Root>
        )}
      </For>
    </Wrap>
  )
}
