import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { NumberInput } from '~/components/ui'

export const QuantityPicker = () => {
  return (
    <NumberInput.Root min={1} max={5} defaultValue="1">
      <NumberInput.Label>Quantity</NumberInput.Label>
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
