import { PinInput } from '@/components/ui'

export const App = () => {
  return (
    <PinInput.Root type="alphanumeric" defaultValue={['R', '2', 'D', '2']}>
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
