import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import {
  NumberInput,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputLabel,
  type NumberInputProps,
} from './snippet'

export const Demo = (props: NumberInputProps) => {
  return (
    <NumberInput min={0} max={5} defaultValue="3" width="2xs" {...props}>
      <NumberInputLabel>Quantity</NumberInputLabel>
      <NumberInputControl>
        <NumberInputInput />
        <NumberInputIncrementTrigger>
          <ChevronUpIcon />
        </NumberInputIncrementTrigger>
        <NumberInputDecrementTrigger>
          <ChevronDownIcon />
        </NumberInputDecrementTrigger>
      </NumberInputControl>
    </NumberInput>
  )
}
