import { Show, children } from 'solid-js'
import * as StyledSwitch from './styled/switch'

export interface SwitchProps extends StyledSwitch.RootProps {}

export const Switch = (props: SwitchProps) => {
  const getChildren = children(() => props.children)

  return (
    <StyledSwitch.Root {...props}>
      <StyledSwitch.Control>
        <StyledSwitch.Thumb />
      </StyledSwitch.Control>
      <Show when={getChildren()}>
        <StyledSwitch.Label>{getChildren()}</StyledSwitch.Label>
      </Show>
      <StyledSwitch.HiddenInput />
    </StyledSwitch.Root>
  )
}
