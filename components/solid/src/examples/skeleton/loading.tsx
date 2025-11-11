import { createSignal } from 'solid-js'

import { Stack } from 'styled-system/jsx'
import { Button, Skeleton, Text } from '@/components/ui'

export const App = () => {
  const [loading, setLoading] = createSignal(true)

  return (
    <Stack align="flex-start" gap="4">
      <Skeleton loading={loading()}>
        <Text>Park UI rocks 🚀</Text>
      </Skeleton>
      <Button variant="surface" onClick={() => setLoading((c) => !c)}>
        Toggle
      </Button>
    </Stack>
  )
}
