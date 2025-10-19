import { Stack } from 'styled-system/jsx'
import { Progress } from '@/components/ui'

export const App = () => {
  const colors = ['blue', 'green', 'amber', 'red'] as const
  return (
    <Stack gap="4">
      {colors.map((color) => (
        <Progress.Root key={color} defaultValue={42} colorPalette={color}>
          <Progress.Track>
            <Progress.Range />
          </Progress.Track>
        </Progress.Root>
      ))}
    </Stack>
  )
}
