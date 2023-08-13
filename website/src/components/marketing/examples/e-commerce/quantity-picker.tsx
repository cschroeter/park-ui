import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { Divider, Stack } from 'styled-system/jsx'
import { IconButton } from '~/components/ui/icon-button'
import { Label } from '~/components/ui/label'
import {
  NumberInput,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
} from '~/components/ui/number-input'

export const QuantityPicker = () => {
  return (
    <Stack gap="1.5">
      <Label htmlFor="quantity">Quantity</Label>
      <NumberInput min={1} max={5} defaultValue="1" size="xl">
        <NumberInputInput id="quantity" />
        <NumberInputControl>
          <NumberInputIncrementTrigger asChild>
            <IconButton size="xs" variant="tertiary" aria-label="Increment">
              <FiChevronUp />
            </IconButton>
          </NumberInputIncrementTrigger>
          <Divider />
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
