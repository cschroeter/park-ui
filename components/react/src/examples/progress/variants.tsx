import { Stack } from 'styled-system/jsx'
import { Progress } from '@/components/ui'

export const App = () => {
  const variants = ['solid', 'subtle'] as const
  return (
    <Stack gap="4">
      {variants.map((variant) => (
        <Progress.Root key={variant} defaultValue={42} variant={variant}>
          <Progress.Track>
            <Progress.Range />
          </Progress.Track>
        </Progress.Root>
      ))}
    </Stack>
  )
}
