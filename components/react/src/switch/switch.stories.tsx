import type { Meta } from '@storybook/react'
import { Switch, type SwitchProps } from './switch'

const meta: Meta<SwitchProps> = {
  title: 'Switch',
  component: Switch,
}

export default meta

export const Base = () => <Switch>Label</Switch>
export const DefaultChecked = () => <Switch defaultChecked>Label</Switch>
export const ColorPalette = () => (
  <Switch colorPalette="red" defaultChecked>
    Label
  </Switch>
)
