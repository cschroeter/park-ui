import { forwardRef } from 'react'
import { Input } from './input'
import * as StyledPinInput from './styled/pin-input'

export interface PinInputProps extends StyledPinInput.RootProps {
  /**
   * The number of inputs to render.
   * @default 4
   */
  length?: number
}

export const PinInput = forwardRef<HTMLDivElement, PinInputProps>((props, ref) => {
  const { children, length = 4, ...rootProps } = props

  return (
    <StyledPinInput.Root ref={ref} {...rootProps}>
      {children && <StyledPinInput.Label>{children}</StyledPinInput.Label>}
      <StyledPinInput.Control>
        {Array.from({ length }, (_, index) => index).map((id, index) => (
          <StyledPinInput.Input key={id} index={index} asChild>
            <Input size={rootProps.size} />
          </StyledPinInput.Input>
        ))}
      </StyledPinInput.Control>
      <StyledPinInput.HiddenInput />
    </StyledPinInput.Root>
  )
})

PinInput.displayName = 'PinInput'
