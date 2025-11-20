import { Stack } from 'styled-system/jsx'
import { PinInput } from '@/components/ui'

export const App = () => {
  const variants = ['outline', 'subtle', 'flushed'] as const
  return (
    <Stack gap="4">
      {variants.map((variant) => (
        <PinInput.Root key={variant} variant={variant}>
          <PinInput.HiddenInput />
          <PinInput.Control>
            <PinInput.Input index={0} />
            <PinInput.Input index={1} />
            <PinInput.Input index={2} />
            <PinInput.Input index={3} />
          </PinInput.Control>
        </PinInput.Root>
      ))}
    </Stack>
  )
}
