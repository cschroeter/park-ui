import { Select as ArkSelect } from '@ark-ui/react/select'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext('Select')

const Select = withProvider(chakra(ArkSelect.Root), 'root')
const SelectClearTrigger = withContext(chakra(ArkSelect.ClearTrigger), 'clearTrigger')
const SelectContent = withContext(chakra(ArkSelect.Content), 'content')
const SelectControl = withContext(chakra(ArkSelect.Control), 'control')
const SelectIndicator = withContext(chakra(ArkSelect.Indicator), 'indicator')
const SelectItem = withContext(chakra(ArkSelect.Item), 'item')
const SelectItemGroup = withContext(chakra(ArkSelect.ItemGroup), 'itemGroup')
const SelectItemGroupLabel = withContext(chakra(ArkSelect.ItemGroupLabel), 'itemGroupLabel')
const SelectItemIndicator = withContext(chakra(ArkSelect.ItemIndicator), 'itemIndicator')
const SelectItemText = withContext(chakra(ArkSelect.ItemText), 'itemText')
const SelectLabel = withContext(chakra(ArkSelect.Label), 'label')
const SelectPositioner = withContext(chakra(ArkSelect.Positioner), 'positioner')
const SelectTrigger = withContext(chakra(ArkSelect.Trigger), 'trigger')
const SelectValueText = withContext(chakra(ArkSelect.ValueText), 'valueText')

const Root = Select
const ClearTrigger = SelectClearTrigger
const Content = SelectContent
const Control = SelectControl
const Indicator = SelectIndicator
const Item = SelectItem
const ItemGroup = SelectItemGroup
const ItemGroupLabel = SelectItemGroupLabel
const ItemIndicator = SelectItemIndicator
const ItemText = SelectItemText
const Label = SelectLabel
const Positioner = SelectPositioner
const Trigger = SelectTrigger
const ValueText = SelectValueText

export {
  ClearTrigger,
  Content,
  Control,
  Indicator,
  Item,
  ItemGroup,
  ItemGroupLabel,
  ItemIndicator,
  ItemText,
  Label,
  Positioner,
  Root,
  Select,
  SelectClearTrigger,
  SelectContent,
  SelectControl,
  SelectIndicator,
  SelectItem,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPositioner,
  SelectTrigger,
  SelectValueText,
  Trigger,
  ValueText,
}

export interface SelectProps extends HTMLChakraProps<typeof Select> {}
export interface SelectClearTriggerProps extends HTMLChakraProps<typeof SelectClearTrigger> {}
export interface SelectContentProps extends HTMLChakraProps<typeof SelectContent> {}
export interface SelectControlProps extends HTMLChakraProps<typeof SelectControl> {}
export interface SelectIndicatorProps extends HTMLChakraProps<typeof SelectIndicator> {}
export interface SelectItemProps extends HTMLChakraProps<typeof SelectItem> {}
export interface SelectItemGroupProps extends HTMLChakraProps<typeof SelectItemGroup> {}
export interface SelectItemGroupLabelProps extends HTMLChakraProps<typeof SelectItemGroupLabel> {}
export interface SelectItemIndicatorProps extends HTMLChakraProps<typeof SelectItemIndicator> {}
export interface SelectItemTextProps extends HTMLChakraProps<typeof SelectItemText> {}
export interface SelectLabelProps extends HTMLChakraProps<typeof SelectLabel> {}
export interface SelectPositionerProps extends HTMLChakraProps<typeof SelectPositioner> {}
export interface SelectTriggerProps extends HTMLChakraProps<typeof SelectTrigger> {}
export interface SelectValueTextProps extends HTMLChakraProps<typeof SelectValueText> {}
