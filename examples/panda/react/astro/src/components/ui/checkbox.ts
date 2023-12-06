import { Checkbox as ArkCheckbox } from '@ark-ui/react'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { checkbox } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(checkbox)

const Checkbox = withProvider(styled(ArkCheckbox.Root), 'root')
const CheckboxControl = withContext(styled(ArkCheckbox.Control), 'control')
const CheckboxIndicator = withContext(styled(ArkCheckbox.Indicator), 'indicator')
const CheckboxLabel = withContext(styled(ArkCheckbox.Label), 'label')

const Root = Checkbox
const Control = CheckboxControl
const Indicator = CheckboxIndicator
const Label = CheckboxLabel

export {
  Checkbox,
  CheckboxControl,
  CheckboxIndicator,
  CheckboxLabel,
  Control,
  Indicator,
  Label,
  Root,
}

export interface CheckboxProps extends HTMLStyledProps<typeof Checkbox> {}
export interface CheckboxControlProps extends HTMLStyledProps<typeof CheckboxControl> {}
export interface CheckboxIndicatorProps extends HTMLStyledProps<typeof CheckboxIndicator> {}
export interface CheckboxLabelProps extends HTMLStyledProps<typeof CheckboxLabel> {}
