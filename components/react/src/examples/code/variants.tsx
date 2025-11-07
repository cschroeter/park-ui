import { Stack } from 'styled-system/jsx'
import { Code } from '@/components/ui'

export const App = () => {
  const variants = ['solid', 'surface', 'outline', 'subtle', 'plain'] as const
  return (
    <Stack gap="4" alignItems="start">
      {variants.map((variant) => (
        <Code key={variant} variant={variant}>
          console.log()
        </Code>
      ))}
    </Stack>
  )
}
