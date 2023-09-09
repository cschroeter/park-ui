import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import {
  NumberInput,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputLabel,
  type NumberInputProps,
} from '~/components/ui/number-input'

export const NumberInputDemo = (props: NumberInputProps) => {
  return (
    <NumberInput min={0} max={5} defaultValue="3" width="2xs" {...props}>
      <NumberInputLabel>Quantity</NumberInputLabel>
      <NumberInputControl>
        <NumberInputInput />
        <NumberInputIncrementTrigger>
          <FiChevronUp />
        </NumberInputIncrementTrigger>
        <NumberInputDecrementTrigger>
          <FiChevronDown />
        </NumberInputDecrementTrigger>
      </NumberInputControl>
    </NumberInput>
  )
}
