import { PinInput } from '@/components/ui'

export const App = () => {
  return (
    <PinInput.Root onValueComplete={(e) => alert(e.valueAsString)}>
      <PinInput.Label>Pin Input</PinInput.Label>
      <PinInput.Control>
        {[0, 1, 2, 3].map((id, index) => (
          <PinInput.Input key={id} index={index} />
        ))}
      </PinInput.Control>
      <PinInput.HiddenInput />
    </PinInput.Root>
  )
}
