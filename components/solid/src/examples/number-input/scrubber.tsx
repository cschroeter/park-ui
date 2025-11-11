import { ArrowLeftRightIcon } from 'lucide-solid'
import { InputGroup, NumberInput } from '@/components/ui'

export const App = () => {
  return (
    <NumberInput.Root defaultValue="42">
      <NumberInput.Control />
      <InputGroup
        startElementProps={{ pointerEvents: 'auto' }}
        startElement={
          <NumberInput.Scrubber>
            <ArrowLeftRightIcon />
          </NumberInput.Scrubber>
        }
      >
        <NumberInput.Input />
      </InputGroup>
    </NumberInput.Root>
  )
}
