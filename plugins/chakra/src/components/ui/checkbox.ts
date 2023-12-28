import { Checkbox as ArkCheckbox } from '@ark-ui/react/checkbox'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext('Checkbox')

const Checkbox = withProvider(chakra(ArkCheckbox.Root), 'root')
const CheckboxControl = withContext(chakra(ArkCheckbox.Control), 'control')
const CheckboxIndicator = withContext(chakra(ArkCheckbox.Indicator), 'indicator')
const CheckboxLabel = withContext(chakra(ArkCheckbox.Label), 'label')

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

export interface CheckboxProps extends HTMLChakraProps<typeof Checkbox> {}
export interface CheckboxControlProps extends HTMLChakraProps<typeof CheckboxControl> {}
export interface CheckboxIndicatorProps extends HTMLChakraProps<typeof CheckboxIndicator> {}
export interface CheckboxLabelProps extends HTMLChakraProps<typeof CheckboxLabel> {}
