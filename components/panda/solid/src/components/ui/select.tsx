import { Select as ArkSelect } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { select } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(select)

export const SelectRoot = withProvider(styled(ArkSelect.Root), 'root')
export const SelectClearTrigger = withContext(styled(ArkSelect.ClearTrigger), 'clearTrigger')
export const SelectContent = withContext(styled(ArkSelect.Content), 'content')
export const SelectControl = withContext(styled(ArkSelect.Control), 'control')
export const SelectIndicator = withContext(styled(ArkSelect.Indicator), 'indicator')
export const SelectItem = withContext(styled(ArkSelect.Item), 'item')
export const SelectItemGroup = withContext(styled(ArkSelect.ItemGroup), 'itemGroup')
export const SelectItemGroupLabel = withContext(styled(ArkSelect.ItemGroupLabel), 'itemGroupLabel')
export const SelectItemIndicator = withContext(styled(ArkSelect.ItemIndicator), 'itemIndicator')
export const SelectItemText = withContext(styled(ArkSelect.ItemText), 'itemText')
export const SelectLabel = withContext(styled(ArkSelect.Label), 'label')
export const SelectPositioner = withContext(styled(ArkSelect.Positioner), 'positioner')
export const SelectTrigger = withContext(styled(ArkSelect.Trigger), 'trigger')
export const SelectValueText = withContext(styled(ArkSelect.ValueText), 'valueText')

export const Select = Object.assign(SelectRoot, {
  Root: SelectRoot,
  ClearTrigger: SelectClearTrigger,
  Content: SelectContent,
  Control: SelectControl,
  Indicator: SelectIndicator,
  Item: SelectItem,
  ItemGroup: SelectItemGroup,
  ItemGroupLabel: SelectItemGroupLabel,
  ItemIndicator: SelectItemIndicator,
  ItemText: SelectItemText,
  Label: SelectLabel,
  Positioner: SelectPositioner,
  Trigger: SelectTrigger,
  ValueText: SelectValueText,
})

export type SelectProps = typeof SelectRoot
export type SelectClearTriggerProps = typeof SelectClearTrigger
export type SelectContentProps = typeof SelectContent
export type SelectControlProps = typeof SelectControl
export type SelectIndicatorProps = typeof SelectIndicator
export type SelectItemProps = typeof SelectItem
export type SelectItemGroupProps = typeof SelectItemGroup
export type SelectItemGroupLabelProps = typeof SelectItemGroupLabel
export type SelectItemIndicatorProps = typeof SelectItemIndicator
export type SelectItemTextProps = typeof SelectItemText
export type SelectLabelProps = typeof SelectLabel
export type SelectPositionerProps = typeof SelectPositioner
export type SelectTriggerProps = typeof SelectTrigger
export type SelectValueTextProps = typeof SelectValueText
