import {
  Switch,
  SwitchControl,
  SwitchInput,
  SwitchLabel,
  SwitchThumb,
  type SwitchProps,
} from '~/components/ui/switch'

export const SwitchDemo = (props: SwitchProps) => (
  <Switch defaultChecked {...props}>
    <SwitchControl>
      <SwitchInput />
      <SwitchThumb />
    </SwitchControl>
    <SwitchLabel>Label</SwitchLabel>
  </Switch>
)
