import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { IconButton } from '~/components/ui/icon-button'
import {
  NumberInput,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputScrubber,
  type NumberInputProps,
} from '~/components/ui/number-input'

export const NumberInputDemo = (props: NumberInputProps) => {
  return (
    <NumberInput min={-50} max={50} defaultValue="42" {...props}>
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
