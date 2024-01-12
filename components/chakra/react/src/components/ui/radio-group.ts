import { RadioGroup as ArkRadioGroup } from '@ark-ui/react/radio-group'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext('RadioGroup')

const RadioGroup = withProvider(chakra(ArkRadioGroup.Root), 'root')
const RadioGroupIndicator = withContext(chakra(ArkRadioGroup.Indicator), 'indicator')
const RadioGroupItem = withContext(chakra(ArkRadioGroup.Item), 'item')
const RadioGroupItemControl = withContext(chakra(ArkRadioGroup.ItemControl), 'itemControl')
const RadioGroupItemText = withContext(chakra(ArkRadioGroup.ItemText), 'itemText')
const RadioGroupLabel = withContext(chakra(ArkRadioGroup.Label), 'label')

const Root = RadioGroup
const Indicator = RadioGroupIndicator
const Item = RadioGroupItem
const ItemControl = RadioGroupItemControl
const ItemText = RadioGroupItemText
const Label = RadioGroupLabel

export {
  Indicator,
  Item,
  ItemControl,
  ItemText,
  Label,
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
  RadioGroupLabel,
  Root,
}

export interface RadioGroupProps extends HTMLChakraProps<typeof RadioGroup> {}
export interface RadioGroupIndicatorProps extends HTMLChakraProps<typeof RadioGroupIndicator> {}
export interface RadioGroupItemProps extends HTMLChakraProps<typeof RadioGroupItem> {}
export interface RadioGroupItemControlProps extends HTMLChakraProps<typeof RadioGroupItemControl> {}
export interface RadioGroupItemTextProps extends HTMLChakraProps<typeof RadioGroupItemText> {}
export interface RadioGroupLabelProps extends HTMLChakraProps<typeof RadioGroupLabel> {}
