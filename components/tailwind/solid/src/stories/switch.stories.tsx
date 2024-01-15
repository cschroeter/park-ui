import type { Meta } from 'storybook-solidjs'
import { Switch, type SwitchProps } from '~/components/ui/switch'

const meta: Meta<SwitchProps> = {
  title: 'Switch',
  component: Switch,
}

export default meta

export const Base = () => <Switch>Label</Switch>
export const DefaultChecked = () => <Switch checked>Label</Switch>
// export const ColorPalette = () => (
//   <Switch colorPalette="red" checked>
//     Label
//   </Switch>
// )
