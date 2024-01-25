import type { Meta } from '@storybook/react'
import { Switch } from '~/components/ui/switch'

const meta: Meta = {
  title: 'Components/Switch',
}

export default meta

export const Base = () => <Switch>Label</Switch>
export const Checked = () => <Switch defaultChecked>Label</Switch>
export const ColorPalette = () => <Switch colorPalette="red">Label</Switch>
