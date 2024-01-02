import type { Meta } from 'storybook-solidjs'
import { Checkbox, type CheckboxProps } from './checkbox'

const meta: Meta<CheckboxProps> = {
  title: 'Checkbox',
  component: Checkbox,
}

export default meta

export const Base = () => <Checkbox>Label</Checkbox>
export const DefaultChecked = () => <Checkbox checked>Label</Checkbox>
export const Indeterminate = () => <Checkbox checked="indeterminate">Label</Checkbox>
