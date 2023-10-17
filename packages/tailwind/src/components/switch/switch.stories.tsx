import { Switch, SwitchControl, SwitchLabel, SwitchThumb, type SwitchProps } from './snippet'

export const Demo = (props: SwitchProps) => (
  <Switch defaultChecked {...props}>
    <SwitchControl>
      <SwitchThumb />
    </SwitchControl>
    <SwitchLabel>Label</SwitchLabel>
  </Switch>
)
