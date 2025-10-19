import { Group, PinInput } from '@/components/ui'

export const App = () => {
  return (
    <PinInput.Root>
      <PinInput.HiddenInput />
      <PinInput.Control>
        <Group attached>
          <PinInput.Input index={0} />
          <PinInput.Input index={1} />
          <PinInput.Input index={2} />
          <PinInput.Input index={3} />
        </Group>
      </PinInput.Control>
    </PinInput.Root>
  )
}
