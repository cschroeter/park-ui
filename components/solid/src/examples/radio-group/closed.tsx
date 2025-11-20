import { type ComponentProps, type JSX, Show, splitProps } from 'solid-js'
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
      <Show when={local.children}>
        <StyledRadioGroup.ItemText>{local.children}</StyledRadioGroup.ItemText>
      </Show>
    </StyledRadioGroup.Item>
  )
}

export const RadioGroup = StyledRadioGroup.Root
