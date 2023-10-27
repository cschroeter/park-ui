import { Switch, type SwitchProps } from './snippet'

export const Demo = (props: SwitchProps) => (
  <Switch defaultChecked {...props}>
    <Switch.Control>
      <Switch.Thumb />
    </Switch.Control>
    <Switch.Label>Label</Switch.Label>
  </Switch>
)
