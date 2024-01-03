import type { NumberInputProps } from '@ark-ui/react'
import { NumberInput } from '~/components/ui/number-input'

export const Demo = (props: NumberInputProps) => {
  return <NumberInput {...props}>Label</NumberInput>
}
