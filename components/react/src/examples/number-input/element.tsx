import { DollarSignIcon } from 'lucide-react'
import { InputGroup, NumberInput } from '@/components/ui'

export const App = () => {
  return (
    <NumberInput.Root defaultValue="42">
      <NumberInput.Control />
      <InputGroup startElement={<DollarSignIcon />}>
        <NumberInput.Input />
      </InputGroup>
    </NumberInput.Root>
  )
}
