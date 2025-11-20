import { Stack } from 'styled-system/jsx'
import { Textarea } from '@/components/ui'

export const App = () => {
  const variants = ['outline', 'subtle', 'surface', 'flushed'] as const
  return (
    <Stack gap="4">
      {variants.map((variant) => (
        <Textarea key={variant} placeholder={variant} variant={variant} />
      ))}
    </Stack>
  )
}
