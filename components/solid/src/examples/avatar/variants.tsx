import { For } from 'solid-js'
import { Wrap } from 'styled-system/jsx'
import { Avatar } from '@/components/ui'

export const App = () => {
  const variants = ['solid', 'surface', 'subtle', 'outline'] as const

  return (
    <Wrap gap="4">
      <For each={variants}>
        {(variant) => (
          <Avatar.Root variant={variant} size="lg">
            <Avatar.Fallback name="Christian Busch" />
          </Avatar.Root>
        )}
      </For>
    </Wrap>
  )
}
