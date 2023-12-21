import { RadioGroup as ArkRadioButtonGroup } from '@ark-ui/react/radio-group'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext('RadioButtonGroup')

const RadioButtonGroup = withProvider(chakra(ArkRadioButtonGroup.Root), 'root')
const RadioButtonGroupIndicator = withContext(chakra(ArkRadioButtonGroup.Indicator), 'indicator')
const RadioButtonGroupItem = withContext(chakra(ArkRadioButtonGroup.Item), 'item')
const RadioButtonGroupItemControl = withContext(
  chakra(ArkRadioButtonGroup.ItemControl),
  'itemControl',
)
const RadioButtonGroupItemText = withContext(chakra(ArkRadioButtonGroup.ItemText), 'itemText')
const RadioButtonGroupLabel = withContext(chakra(ArkRadioButtonGroup.Label), 'label')

const Root = RadioButtonGroup
const Indicator = RadioButtonGroupIndicator
const Item = RadioButtonGroupItem
const ItemControl = RadioButtonGroupItemControl
const ItemText = RadioButtonGroupItemText
const Label = RadioButtonGroupLabel

export {
  Indicator,
  Item,
  ItemControl,
  ItemText,
  Label,
  RadioButtonGroup,
  RadioButtonGroupIndicator,
  RadioButtonGroupItem,
  RadioButtonGroupItemControl,
  RadioButtonGroupItemText,
  RadioButtonGroupLabel,
  Root,
}

export interface RadioButtonGroupProps extends HTMLChakraProps<typeof RadioButtonGroup> {}
export interface RadioButtonGroupIndicatorProps
  extends HTMLChakraProps<typeof RadioButtonGroupIndicator> {}
export interface RadioButtonGroupItemProps extends HTMLChakraProps<typeof RadioButtonGroupItem> {}
export interface RadioButtonGroupItemControlProps
  extends HTMLChakraProps<typeof RadioButtonGroupItemControl> {}
export interface RadioButtonGroupItemTextProps
  extends HTMLChakraProps<typeof RadioButtonGroupItemText> {}
export interface RadioButtonGroupLabelProps extends HTMLChakraProps<typeof RadioButtonGroupLabel> {}
