import { NumberInput, type NumberInputProps } from '~/components/ui'

export const Demo = (props: NumberInputProps) => {
  return (
    <NumberInput defaultValue="3" {...props}>
      Label
    </NumberInput>
  )
}
