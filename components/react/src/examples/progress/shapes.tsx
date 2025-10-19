import { Stack } from 'styled-system/jsx'
import { Progress } from '@/components/ui'

export const App = () => {
  const shapes = ['rounded', 'full', 'square'] as const
  return (
    <Stack gap="4">
      {shapes.map((shape) => (
        <Progress.Root key={shape} shape={shape} defaultValue={42}>
          <Progress.Track>
            <Progress.Range />
          </Progress.Track>
        </Progress.Root>
      ))}
    </Stack>
  )
}
