import type { Meta } from 'storybook-solidjs'
import { NumberInput, type NumberInputProps } from '~/components/ui/number-input'

const meta: Meta<NumberInputProps> = {
  title: 'Components/NumberInput',
  component: NumberInput,
}

export default meta

export const Base = () => <NumberInput>Label</NumberInput>
export const InitialValue = () => <NumberInput value="3">Initial value is 3</NumberInput>
export const MinAndMax = () => (
  <NumberInput min={0} max={5}>
    Max is 5 and Min is 0
  </NumberInput>
)
