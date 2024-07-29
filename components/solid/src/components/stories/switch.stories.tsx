import type { Meta } from 'storybook-solidjs'
import { Switch } from '~/components/ui/switch'

const meta: Meta = {
  title: 'Components/Switch',
}

export default meta

export const Base = () => <Switch class="foo">Label</Switch>
export const Checked = () => <Switch checked>Label</Switch>
export const ColorPalette = () => <Switch colorPalette="red">Label</Switch>
