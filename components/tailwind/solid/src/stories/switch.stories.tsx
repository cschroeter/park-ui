import type { Meta } from 'storybook-solidjs'
import { Switch, type SwitchProps } from '~/components/ui/switch'

const meta: Meta<SwitchProps> = {
  title: 'Components/Switch',
  component: Switch,
}

export default meta

export const Base = () => <Switch>Label</Switch>
export const Checked = () => <Switch checked>Label</Switch>
// export const ColorPalette = () => <Switch colorPalette="red">Label</Switch>
