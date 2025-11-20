import { forwardRef, type InputHTMLAttributes } from 'react'
import * as StyledRadioGroup from '@/components/ui/radio-group'

export interface RadioProps extends StyledRadioGroup.ItemProps {
  inputProps?: InputHTMLAttributes<HTMLInputElement>
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(props, ref) {
  const { children, inputProps, ...rest } = props
  return (
    <StyledRadioGroup.Item {...rest}>
      <StyledRadioGroup.ItemHiddenInput ref={ref} {...inputProps} />
      <StyledRadioGroup.ItemControl />
      {children && <StyledRadioGroup.ItemText>{children}</StyledRadioGroup.ItemText>}
    </StyledRadioGroup.Item>
  )
})

export const RadioGroup = StyledRadioGroup.Root
