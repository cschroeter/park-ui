import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { IconButton } from '~/components/icon-button'
import {
  NumberInput,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputScrubber,
} from '~/components/ui/number-input'

export const NumberInputDemo = () => {
  return (
    <NumberInput min={-50} max={50} defaultValue="42">
      <NumberInputScrubber />
      <NumberInputInput />
      <NumberInputControl>
        <NumberInputIncrementTrigger asChild>
          <IconButton size="xs" variant="tertiary" icon={<FiChevronUp />} aria-label="Increment" />
        </NumberInputIncrementTrigger>
        <hr />
        <NumberInputDecrementTrigger asChild>
          <IconButton
            size="xs"
            variant="tertiary"
            icon={<FiChevronDown />}
            aria-label="Decrement"
          />
        </NumberInputDecrementTrigger>
      </NumberInputControl>
    </NumberInput>
  )
}
