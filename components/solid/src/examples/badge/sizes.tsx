import { StarIcon } from 'lucide-solid'
import { For } from 'solid-js'
import { Wrap } from 'styled-system/jsx'
import { Badge } from '@/components/ui'

export const App = () => {
  const sizes = ['sm', 'md', 'lg', 'xl'] as const
  return (
    <Wrap gap="4">
      <For each={sizes}>
        {(size) => (
          <Badge size={size}>
            <StarIcon />
            Badge
          </Badge>
        )}
      </For>
    </Wrap>
  )
}
