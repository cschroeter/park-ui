import { For } from 'solid-js'
import { Wrap } from 'styled-system/jsx'
import { Button, toaster } from '@/components/ui'

export const App = () => {
  const types = ['success', 'error', 'warning', 'info'] as const

  return (
    <Wrap gap="4">
      <For each={types}>
        {(type) => (
          <Button
            variant="outline"
            onClick={() =>
              toaster.create({
                title: `Toast status is ${type}`,
                type: type,
                duration: 40000,
              })
            }
          >
            {type}
          </Button>
        )}
      </For>
    </Wrap>
  )
}
