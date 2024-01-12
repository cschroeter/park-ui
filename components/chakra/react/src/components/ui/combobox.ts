import { Combobox as ArkCombobox } from '@ark-ui/react/combobox'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext('Combobox')

const Combobox = withProvider(chakra(ArkCombobox.Root), 'root')
const ComboboxClearTrigger = withContext(chakra(ArkCombobox.ClearTrigger), 'clearTrigger')
const ComboboxContent = withContext(chakra(ArkCombobox.Content), 'content')
const ComboboxControl = withContext(chakra(ArkCombobox.Control), 'control')
const ComboboxInput = withContext(chakra(ArkCombobox.Input), 'input')
const ComboboxItem = withContext(chakra(ArkCombobox.Item), 'item')
const ComboboxItemGroup = withContext(chakra(ArkCombobox.ItemGroup), 'itemGroup')
const ComboboxItemGroupLabel = withContext(chakra(ArkCombobox.ItemGroupLabel), 'itemGroupLabel')
const ComboboxItemIndicator = withContext(chakra(ArkCombobox.ItemIndicator), 'itemIndicator')
const ComboboxItemText = withContext(chakra(ArkCombobox.ItemText), 'itemText')
const ComboboxLabel = withContext(chakra(ArkCombobox.Label), 'label')
const ComboboxPositioner = withContext(chakra(ArkCombobox.Positioner), 'positioner')
const ComboboxTrigger = withContext(chakra(ArkCombobox.Trigger), 'trigger')

const Root = Combobox
const ClearTrigger = ComboboxClearTrigger
const Content = ComboboxContent
const Control = ComboboxControl
const Input = ComboboxInput
const Item = ComboboxItem
const ItemGroup = ComboboxItemGroup
const ItemGroupLabel = ComboboxItemGroupLabel
const ItemIndicator = ComboboxItemIndicator
const ItemText = ComboboxItemText
const Label = ComboboxLabel
const Positioner = ComboboxPositioner
const Trigger = ComboboxTrigger

export {
  ClearTrigger,
  Combobox,
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxLabel,
  ComboboxPositioner,
  ComboboxTrigger,
  Content,
  Control,
  Input,
  Item,
  ItemGroup,
  ItemGroupLabel,
  ItemIndicator,
  ItemText,
  Label,
  Positioner,
  Root,
  Trigger,
}

export interface ComboboxProps extends HTMLChakraProps<typeof Combobox> {}
export interface ComboboxClearTriggerProps extends HTMLChakraProps<typeof ComboboxClearTrigger> {}
export interface ComboboxContentProps extends HTMLChakraProps<typeof ComboboxContent> {}
export interface ComboboxControlProps extends HTMLChakraProps<typeof ComboboxControl> {}
export interface ComboboxInputProps extends HTMLChakraProps<typeof ComboboxInput> {}
export interface ComboboxItemProps extends HTMLChakraProps<typeof ComboboxItem> {}
export interface ComboboxItemGroupProps extends HTMLChakraProps<typeof ComboboxItemGroup> {}
export interface ComboboxItemGroupLabelProps
  extends HTMLChakraProps<typeof ComboboxItemGroupLabel> {}
export interface ComboboxItemIndicatorProps extends HTMLChakraProps<typeof ComboboxItemIndicator> {}
export interface ComboboxItemTextProps extends HTMLChakraProps<typeof ComboboxItemText> {}
export interface ComboboxLabelProps extends HTMLChakraProps<typeof ComboboxLabel> {}
export interface ComboboxPositionerProps extends HTMLChakraProps<typeof ComboboxPositioner> {}
export interface ComboboxTriggerProps extends HTMLChakraProps<typeof ComboboxTrigger> {}
