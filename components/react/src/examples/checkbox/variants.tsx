import { Stack } from 'styled-system/jsx'
import { Checkbox } from '@/components/ui'

export const App = () => {
  const variants = ['solid', 'surface', 'subtle', 'outline', 'plain'] as const
  return (
    <Stack gap="4" alignItems="start">
      {variants.map((variant) => (
        <Checkbox.Root variant={variant} key={variant} defaultChecked>
          <Checkbox.HiddenInput />
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Label>Label</Checkbox.Label>
        </Checkbox.Root>
      ))}
    </Stack>
  )
}
