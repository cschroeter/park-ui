import { NumberInput } from '@/components/ui'

export const App = () => {
  return (
    <NumberInput.Root defaultValue="42" allowMouseWheel>
      <NumberInput.Control />
      <NumberInput.Input />
    </NumberInput.Root>
  )
}
