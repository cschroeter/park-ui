import { CircleDotIcon } from 'lucide-solid'
import { For } from 'solid-js'
import { Wrap } from 'styled-system/jsx'
import { Button } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

  return (
    <Wrap gap="4">
      <For each={sizes}>
        {(size) => (
          <Button size={size}>
            Button <CircleDotIcon />
          </Button>
        )}
      </For>
    </Wrap>
  )
}
