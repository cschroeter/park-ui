import { type ComponentProps, type JSX, splitProps } from 'solid-js'
import * as StyledRadioGroup from '@/components/ui/radio-group'

export interface RadioProps extends StyledRadioGroup.ItemProps {
  inputProps?: ComponentProps<typeof StyledRadioGroup.ItemHiddenInput>
  children?: JSX.Element
}

export const Radio = (props: RadioProps) => {
  const [local, rest] = splitProps(props, ['children', 'inputProps'])

  return (
    <StyledRadioGroup.Item {...rest}>
      <StyledRadioGroup.ItemHiddenInput {...local.inputProps} />
      <StyledRadioGroup.ItemControl />
      {local.children && <StyledRadioGroup.ItemText>{local.children}</StyledRadioGroup.ItemText>}
    </StyledRadioGroup.Item>
  )
}

export const RadioGroup = StyledRadioGroup.Root
