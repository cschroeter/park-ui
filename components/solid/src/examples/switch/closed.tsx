import { type ComponentProps, type JSX, Show, splitProps } from 'solid-js'
import * as ParkSwitch from '@/components/ui/switch'

export interface SwitchProps extends ParkSwitch.RootProps {
  inputProps?: ComponentProps<typeof ParkSwitch.HiddenInput>
  trackLabel?: { on: JSX.Element; off: JSX.Element }
  thumbLabel?: { on: JSX.Element; off: JSX.Element }
  children?: JSX.Element
}

export const Switch = (props: SwitchProps) => {
  const [local, rest] = splitProps(props, ['inputProps', 'children', 'trackLabel', 'thumbLabel'])

  return (
    <ParkSwitch.Root {...rest}>
      <ParkSwitch.HiddenInput {...local.inputProps} />
      <ParkSwitch.Control>
        <ParkSwitch.Thumb>
          <Show when={local.thumbLabel}>
            <ParkSwitch.ThumbIndicator fallback={local.thumbLabel?.off}>
              {local.thumbLabel?.on}
            </ParkSwitch.ThumbIndicator>
          </Show>
        </ParkSwitch.Thumb>
        <Show when={local.trackLabel}>
          <ParkSwitch.Indicator fallback={local.trackLabel?.off}>
            {local.trackLabel?.on}
          </ParkSwitch.Indicator>
        </Show>
      </ParkSwitch.Control>
      <Show when={local.children != null}>
        <ParkSwitch.Label>{local.children}</ParkSwitch.Label>
      </Show>
    </ParkSwitch.Root>
  )
}
