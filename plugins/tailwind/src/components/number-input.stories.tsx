import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { NumberInput } from '~/components/ui/number-input'

export const Demo = () => {
  return (
    <NumberInput.Root min={0} max={5} defaultValue="3" width="2xs">
      <NumberInput.Label>Number Input</NumberInput.Label>
      <NumberInput.Control>
        <NumberInput.Input />
        <NumberInput.IncrementTrigger>
          <ChevronUpIcon />
        </NumberInput.IncrementTrigger>
        <NumberInput.DecrementTrigger>
          <ChevronDownIcon />
        </NumberInput.DecrementTrigger>
      </NumberInput.Control>
    </NumberInput.Root>
  )
}
