import { PinInput } from '@/components/ui'

export const App = () => {
  return (
    // @ts-expect-error TODO fix PinInput types
    <PinInput.Root mask>
      <PinInput.HiddenInput />
      <PinInput.Control>
        <PinInput.Input index={0} />
        <PinInput.Input index={1} />
        <PinInput.Input index={2} />
        <PinInput.Input index={3} />
      </PinInput.Control>
    </PinInput.Root>
  )
}
