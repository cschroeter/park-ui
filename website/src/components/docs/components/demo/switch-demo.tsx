import type { SwitchProps } from '@ark-ui/react'
import {
  Switch,
  SwitchControl,
  SwitchInput,
  SwitchLabel,
  SwitchThumb,
} from '~/components/ui/switch'

export const SwitchDemo = (props: SwitchProps) => (
  <Switch {...props}>
    <SwitchControl>
      <SwitchInput />
      <SwitchThumb />
    </SwitchControl>
    <SwitchLabel>Label</SwitchLabel>
  </Switch>
)
