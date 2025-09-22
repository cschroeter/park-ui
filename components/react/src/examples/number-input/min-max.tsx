import { NumberInput } from '@/components/ui'

export const App = () => {
  return (
    <NumberInput.Root defaultValue="42" min={5} max={50}>
      <NumberInput.Control />
      <NumberInput.Input />
    </NumberInput.Root>
  )
}
