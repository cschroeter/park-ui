import type { SwitchProps } from '@ark-ui/react'
import { Switch } from '~/components/ui/switch'

export const Demo = (props: SwitchProps) => (
  <Switch defaultChecked {...props}>
    Label
  </Switch>
)
