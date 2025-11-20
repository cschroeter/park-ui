import { forwardRef, type InputHTMLAttributes, type ReactNode, type RefObject } from 'react'
import { Switch as StyledSwitch } from '@/components/ui'

export interface SwitchProps extends StyledSwitch.RootProps {
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  rootRef?: RefObject<HTMLLabelElement | null>
  trackLabel?: { on: ReactNode; off: ReactNode }
  thumbLabel?: { on: ReactNode; off: ReactNode }
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(props, ref) {
  const { inputProps, children, rootRef = null, trackLabel, thumbLabel, ...rest } = props

  return (
    <StyledSwitch.Root ref={rootRef} {...rest}>
      <StyledSwitch.HiddenInput ref={ref} {...inputProps} />
      <StyledSwitch.Control>
        <StyledSwitch.Thumb>
          {thumbLabel && (
            <StyledSwitch.ThumbIndicator fallback={thumbLabel?.off}>
              {thumbLabel?.on}
            </StyledSwitch.ThumbIndicator>
          )}
        </StyledSwitch.Thumb>
        {trackLabel && (
          <StyledSwitch.Indicator fallback={trackLabel.off}>{trackLabel.on}</StyledSwitch.Indicator>
        )}
      </StyledSwitch.Control>
      {children != null && <StyledSwitch.Label>{children}</StyledSwitch.Label>}
    </StyledSwitch.Root>
  )
})
