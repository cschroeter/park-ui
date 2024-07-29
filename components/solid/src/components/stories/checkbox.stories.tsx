import type { Meta } from 'storybook-solidjs'
import { Checkbox } from '~/components/ui/checkbox'

const meta: Meta = {
  title: 'Components/Checkbox',
}

export default meta

export const Base = () => <Checkbox>Label</Checkbox>
export const Checked = () => <Checkbox checked>Label</Checkbox>
export const ColorPalette = () => <Checkbox colorPalette="red">Label</Checkbox>
export const Indeterminate = () => <Checkbox checked="indeterminate">Label</Checkbox>
