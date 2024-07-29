import type { Meta } from 'storybook-solidjs'
import { NumberInput } from '~/components/ui/number-input'

const meta: Meta = {
  title: 'Components/Number Input',
}

export default meta

export const Base = () => <NumberInput>Label</NumberInput>
export const InitialValue = () => <NumberInput value="3">Initial value is 3</NumberInput>
export const MinAndMax = () => (
  <NumberInput min={0} max={5}>
    Max is 5 and Min is 0
  </NumberInput>
)
