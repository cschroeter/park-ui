import type { Meta } from '@storybook/react'
import { Checkbox, type CheckboxProps } from '~/components/ui/checkbox'

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  component: Checkbox,
}

export default meta

export const Base = () => <Checkbox>Label</Checkbox>
export const DefaultChecked = () => <Checkbox defaultChecked>Label</Checkbox>
export const ColorPalette = () => (
  <Checkbox defaultChecked colorPalette="red">
    Label
  </Checkbox>
)
export const Indeterminate = () => <Checkbox checked="indeterminate">Label</Checkbox>
