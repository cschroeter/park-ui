import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import type { NumberInputProps } from '~/components/ui/number-input'
import * as NumberInput from '~/components/ui/number-input'

export const Demo = (props: NumberInputProps) => {
  return (
    <NumberInput.Root min={0} max={5} defaultValue="3" width="2xs" {...props}>
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
