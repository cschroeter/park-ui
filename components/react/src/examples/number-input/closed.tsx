import { forwardRef, type InputHTMLAttributes, type RefObject } from 'react'
import { NumberInput as StyledNumberInput } from '@/components/ui'

export interface NumberInputProps extends StyledNumberInput.RootProps {
  rootRef?: RefObject<HTMLDivElement | null>
  inputProps?: InputHTMLAttributes<HTMLInputElement>
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  function NumberInput(props, ref) {
    const { inputProps, rootRef, ...rest } = props
    return (
      <StyledNumberInput.Root ref={rootRef} {...rest}>
        <StyledNumberInput.Control />
        <StyledNumberInput.Input ref={ref} {...inputProps} />
      </StyledNumberInput.Root>
    )
  },
)
