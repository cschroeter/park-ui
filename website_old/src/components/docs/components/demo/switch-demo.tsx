import {
  Switch,
  SwitchControl,
  SwitchLabel,
  SwitchThumb,
  type SwitchProps,
} from '~/components/ui/switch'

export const SwitchDemo = (props: SwitchProps) => (
  <Switch defaultChecked {...props}>
    <SwitchControl>
      <SwitchThumb />
    </SwitchControl>
    <SwitchLabel>Label</SwitchLabel>
  </Switch>
)
