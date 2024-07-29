import { Show, children } from 'solid-js'
import * as ArkSwitch from './primitives/switch'

export interface SwitchProps extends ArkSwitch.RootProps {}

export const Switch = (props: SwitchProps) => {
  const getChildren = children(() => props.children)

  return (
    <ArkSwitch.Root {...props}>
      <ArkSwitch.Control>
        <ArkSwitch.Thumb />
      </ArkSwitch.Control>
      <Show when={getChildren()}>
        <ArkSwitch.Label>{getChildren()}</ArkSwitch.Label>
      </Show>
      <ArkSwitch.HiddenInput />
    </ArkSwitch.Root>
  )
}
