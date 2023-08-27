import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { Stack } from 'styled-system/jsx'
import { IconButton } from '~/components/ui/icon-button'
import { Label } from '~/components/ui/label'
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
    <Stack gap="1.5" width="2xs">
      <Label htmlFor="qty">Quantity</Label>
      <NumberInput min={0} max={5} defaultValue="3" {...props}>
        <NumberInputScrubber />
        <NumberInputInput id="qty" />
        <NumberInputControl>
          <NumberInputIncrementTrigger asChild>
            <IconButton size="xs" variant="tertiary" aria-label="Increment">
              <FiChevronUp />
            </IconButton>
          </NumberInputIncrementTrigger>
          <hr />
          <NumberInputDecrementTrigger asChild>
            <IconButton size="xs" variant="tertiary" aria-label="Decrement">
              <FiChevronDown />
            </IconButton>
          </NumberInputDecrementTrigger>
        </NumberInputControl>
      </NumberInput>
    </Stack>
  )
}
