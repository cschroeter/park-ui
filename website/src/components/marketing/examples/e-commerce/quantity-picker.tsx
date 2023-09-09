import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import {
  NumberInput,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputLabel,
} from '~/components/ui/number-input'

export const QuantityPicker = () => {
  return (
    <NumberInput min={1} max={5} defaultValue="1" size="xl">
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
