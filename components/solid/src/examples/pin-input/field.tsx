import { Field, PinInput } from '@/components/ui'

export const App = () => {
  return (
    <Field.Root>
      <Field.Label>Pin</Field.Label>
      <PinInput.Root>
        <PinInput.HiddenInput />
        <PinInput.Control>
          <PinInput.Input index={0} />
          <PinInput.Input index={1} />
          <PinInput.Input index={2} />
          <PinInput.Input index={3} />
        </PinInput.Control>
      </PinInput.Root>
      <Field.HelperText>Enter the 4-digit pin sent to your email address.</Field.HelperText>
    </Field.Root>
  )
}
