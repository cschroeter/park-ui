import * as Ark from '@ark-ui/react/radio-group'
import { createStyleContext } from '~/lib/create-style-context'
import { radioGroupStyles } from './recipe'
export * from '@ark-ui/react/radio-group'

export type RadioGroupProps = React.ComponentProps<typeof RadioGroup>

const { withProvider, withContext } = createStyleContext(radioGroupStyles)

const RadioGroupRoot = withProvider(Ark.RadioGroup.Root, 'root')
export const RadioGroupIndicator = withContext(Ark.RadioGroup.Indicator, 'indicator')
export const RadioGroupItem = withContext(Ark.RadioGroup.Item, 'item')
export const RadioGroupItemControl = withContext(Ark.RadioGroup.ItemControl, 'itemControl')
export const RadioGroupItemText = withContext(Ark.RadioGroup.ItemText, 'itemText')
export const RadioGroupLabel = withContext(Ark.RadioGroup.Label, 'label')

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Root: RadioGroupRoot,
  Indicator: RadioGroupIndicator,
  Item: RadioGroupItem,
  ItemControl: RadioGroupItemControl,
  ItemText: RadioGroupItemText,
  Label: RadioGroupLabel,
})
