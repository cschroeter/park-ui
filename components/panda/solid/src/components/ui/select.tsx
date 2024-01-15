import { Select as ArkSelect } from '@ark-ui/solid'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { select } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(select)

const Select = withProvider(styled(ArkSelect.Root), 'root')
const SelectClearTrigger = withContext(styled(ArkSelect.ClearTrigger), 'clearTrigger')
const SelectContent = withContext(styled(ArkSelect.Content), 'content')
const SelectControl = withContext(styled(ArkSelect.Control), 'control')
const SelectIndicator = withContext(styled(ArkSelect.Indicator), 'indicator')
const SelectItem = withContext(styled(ArkSelect.Item), 'item')
const SelectItemGroup = withContext(styled(ArkSelect.ItemGroup), 'itemGroup')
const SelectItemGroupLabel = withContext(styled(ArkSelect.ItemGroupLabel), 'itemGroupLabel')
const SelectItemIndicator = withContext(styled(ArkSelect.ItemIndicator), 'itemIndicator')
const SelectItemText = withContext(styled(ArkSelect.ItemText), 'itemText')
const SelectLabel = withContext(styled(ArkSelect.Label), 'label')
const SelectPositioner = withContext(styled(ArkSelect.Positioner), 'positioner')
const SelectTrigger = withContext(styled(ArkSelect.Trigger), 'trigger')
const SelectValueText = withContext(styled(ArkSelect.ValueText), 'valueText')

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

export interface SelectProps extends HTMLStyledProps<typeof Select> {}
export interface SelectClearTriggerProps extends HTMLStyledProps<typeof SelectClearTrigger> {}
export interface SelectContentProps extends HTMLStyledProps<typeof SelectContent> {}
export interface SelectControlProps extends HTMLStyledProps<typeof SelectControl> {}
export interface SelectIndicatorProps extends HTMLStyledProps<typeof SelectIndicator> {}
export interface SelectItemProps extends HTMLStyledProps<typeof SelectItem> {}
export interface SelectItemGroupProps extends HTMLStyledProps<typeof SelectItemGroup> {}
export interface SelectItemGroupLabelProps extends HTMLStyledProps<typeof SelectItemGroupLabel> {}
export interface SelectItemIndicatorProps extends HTMLStyledProps<typeof SelectItemIndicator> {}
export interface SelectItemTextProps extends HTMLStyledProps<typeof SelectItemText> {}
export interface SelectLabelProps extends HTMLStyledProps<typeof SelectLabel> {}
export interface SelectPositionerProps extends HTMLStyledProps<typeof SelectPositioner> {}
export interface SelectTriggerProps extends HTMLStyledProps<typeof SelectTrigger> {}
export interface SelectValueTextProps extends HTMLStyledProps<typeof SelectValueText> {}
