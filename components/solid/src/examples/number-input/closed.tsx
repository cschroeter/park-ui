import { type ComponentProps, splitProps } from 'solid-js'
import * as StyledNumberInput from '@/components/ui/number-input'

export interface NumberInputProps extends StyledNumberInput.RootProps {
  inputProps?: ComponentProps<typeof StyledNumberInput.Input>
}

export const NumberInput = (props: NumberInputProps) => {
  const [local, rest] = splitProps(props, ['inputProps'])

  return (
    <StyledNumberInput.Root {...rest}>
      <StyledNumberInput.Control />
      <StyledNumberInput.Input {...local.inputProps} />
    </StyledNumberInput.Root>
  )
}
