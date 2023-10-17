import * as Ark from '@ark-ui/react/checkbox'
import { createStyleContext } from '~/lib/create-style-context'
import { checkboxStyles } from './recipe'
export * from '@ark-ui/react/checkbox'

export type CheckboxProps = React.ComponentProps<typeof Checkbox>

const { withProvider, withContext } = createStyleContext(checkboxStyles)

const CheckboxRoot = withProvider(Ark.Checkbox.Root, 'root')
export const CheckboxControl = withContext(Ark.Checkbox.Control, 'control')
export const CheckboxLabel = withContext(Ark.Checkbox.Label, 'label')

export const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Control: CheckboxControl,
  Label: CheckboxLabel,
})
