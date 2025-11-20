'use client'
import { forwardRef, type InputHTMLAttributes, type RefObject } from 'react'
import { Group, PinInput as StyledPinInput } from '@/components/ui'

export interface PinInputProps extends StyledPinInput.RootProps {
  rootRef?: RefObject<HTMLDivElement | null>
  count?: number
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  attached?: boolean
}

export const PinInput = forwardRef<HTMLInputElement, PinInputProps>(function PinInput(props, ref) {
  const { count = 4, inputProps, rootRef, attached, ...rest } = props
  return (
    <StyledPinInput.Root ref={rootRef} {...rest}>
      <StyledPinInput.HiddenInput ref={ref} {...inputProps} />
      <StyledPinInput.Control>
        <Group attached={attached}>
          {Array.from({ length: count }).map((_, index) => (
            <StyledPinInput.Input key={index} index={index} />
          ))}
        </Group>
      </StyledPinInput.Control>
    </StyledPinInput.Root>
  )
})
