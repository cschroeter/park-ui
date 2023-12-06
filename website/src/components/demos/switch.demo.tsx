import type { SwitchProps } from '@ark-ui/react'
import * as Switch from '~/components/ui/switch'

export const Demo = (props: SwitchProps) => (
  <Switch.Root defaultChecked {...props}>
    <Switch.Control>
      <Switch.Thumb />
    </Switch.Control>
    <Switch.Label>Label</Switch.Label>
  </Switch.Root>
)
