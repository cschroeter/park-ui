import { NumberInput } from '@/components/ui'

export const App = () => {
  return (
    <NumberInput.Root defaultValue="2" step={3}>
      <NumberInput.Control />
      <NumberInput.Input />
    </NumberInput.Root>
  )
}
