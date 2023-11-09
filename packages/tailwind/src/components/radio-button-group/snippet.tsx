import * as Ark from '@ark-ui/react/radio-group'
import { createStyleContext } from '~/lib/create-style-context'
import { radioButtonGroupStyles } from './recipe'

export * from '@ark-ui/react/radio-group'

const { withProvider, withContext } = createStyleContext(radioButtonGroupStyles)

const RadioButtonGroupRoot = withProvider(Ark.RadioGroup.Root, 'root')
export const RadioButtonGroupIndicator = withContext(Ark.RadioGroup.Indicator, 'indicator')
export const RadioButtonGroupItem = withContext(Ark.RadioGroup.Item, 'item')
export const RadioButtonGroupItemControl = withContext(Ark.RadioGroup.ItemControl, 'itemControl')
export const RadioButtonGroupItemText = withContext(Ark.RadioGroup.ItemText, 'itemText')
export const RadioButtonGroupLabel = withContext(Ark.RadioGroup.Label, 'label')

export const RadioButtonGroup = Object.assign(RadioButtonGroupRoot, {
  Root: RadioButtonGroupRoot,
  Indicator: RadioButtonGroupIndicator,
  Item: RadioButtonGroupItem,
  ItemControl: RadioButtonGroupItemControl,
  ItemText: RadioButtonGroupItemText,
  Label: RadioButtonGroupLabel,
})
