import type { Meta } from '@storybook/react'
import { NumberInput, type NumberInputProps } from './number-input'

const meta: Meta<NumberInputProps> = {
  title: 'NumberInput',
  component: NumberInput,
}

export default meta

export const Base = () => <NumberInput>Label</NumberInput>
export const DefaultValue = () => <NumberInput defaultValue="3">Default value is 3</NumberInput>
export const MinAndMax = () => (
  <NumberInput min={0} max={5}>
    Max is 5 and Min is 0
  </NumberInput>
)
