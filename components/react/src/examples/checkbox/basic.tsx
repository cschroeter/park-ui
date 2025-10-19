import { Checkbox } from '@/components/ui'

export const App = () => {
  return (
    <Checkbox.Root>
      <Checkbox.HiddenInput />
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Label>Label</Checkbox.Label>
    </Checkbox.Root>
  )
}
