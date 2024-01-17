import { Combobox as ArkCombobox } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { combobox } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(combobox)

const Combobox = withProvider(styled(ArkCombobox.Root), 'root')
const ComboboxClearTrigger = withContext(styled(ArkCombobox.ClearTrigger), 'clearTrigger')
const ComboboxContent = withContext(styled(ArkCombobox.Content), 'content')
const ComboboxControl = withContext(styled(ArkCombobox.Control), 'control')
const ComboboxInput = withContext(styled(ArkCombobox.Input), 'input')
const ComboboxItem = withContext(styled(ArkCombobox.Item), 'item')
const ComboboxItemGroup = withContext(styled(ArkCombobox.ItemGroup), 'itemGroup')
const ComboboxItemGroupLabel = withContext(styled(ArkCombobox.ItemGroupLabel), 'itemGroupLabel')
const ComboboxItemIndicator = withContext(styled(ArkCombobox.ItemIndicator), 'itemIndicator')
const ComboboxItemText = withContext(styled(ArkCombobox.ItemText), 'itemText')
const ComboboxLabel = withContext(styled(ArkCombobox.Label), 'label')
const ComboboxPositioner = withContext(styled(ArkCombobox.Positioner), 'positioner')
const ComboboxTrigger = withContext(styled(ArkCombobox.Trigger), 'trigger')

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

export interface ComboboxProps extends ComponentProps<typeof Combobox> {}
export interface ComboboxClearTriggerProps extends ComponentProps<typeof ComboboxClearTrigger> {}
export interface ComboboxContentProps extends ComponentProps<typeof ComboboxContent> {}
export interface ComboboxControlProps extends ComponentProps<typeof ComboboxControl> {}
export interface ComboboxInputProps extends ComponentProps<typeof ComboboxInput> {}
export interface ComboboxItemProps extends ComponentProps<typeof ComboboxItem> {}
export interface ComboboxItemGroupProps extends ComponentProps<typeof ComboboxItemGroup> {}
export interface ComboboxItemGroupLabelProps
  extends ComponentProps<typeof ComboboxItemGroupLabel> {}
export interface ComboboxItemIndicatorProps extends ComponentProps<typeof ComboboxItemIndicator> {}
export interface ComboboxItemTextProps extends ComponentProps<typeof ComboboxItemText> {}
export interface ComboboxLabelProps extends ComponentProps<typeof ComboboxLabel> {}
export interface ComboboxPositionerProps extends ComponentProps<typeof ComboboxPositioner> {}
export interface ComboboxTriggerProps extends ComponentProps<typeof ComboboxTrigger> {}
