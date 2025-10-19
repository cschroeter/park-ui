import { NumberInput } from '@/components/ui'

export const App = () => {
  return (
    <NumberInput.Root defaultValue="42">
      <NumberInput.Control />
      <NumberInput.Input />
    </NumberInput.Root>
  )
}
