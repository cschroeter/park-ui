import { forwardRef } from 'react'
import { NumberInput as StyledNumberInput } from '@/components/ui'

export interface NumberInputProps extends StyledNumberInput.RootProps {}

export const NumberInput = forwardRef<HTMLDivElement, NumberInputProps>(
  function NumberInput(props, ref) {
    return (
      <StyledNumberInput.Root ref={ref} {...props}>
        <StyledNumberInput.Control />
        <StyledNumberInput.Input />
      </StyledNumberInput.Root>
    )
  },
)
